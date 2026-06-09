import { describe, test, expect, mock, beforeEach } from "bun:test";
import app from "../../index"; // Mengimpor root app Hono untuk pengujian rute lokal (in-memory) tanpa TCP server asli
import { usersService } from "./users.service"; // Mengimpor service untuk dibajak kinerjanya (mocking layer DB)

/**
 * 1. SAKLAR GLOBAL (STATE MANIPULATION)
 * Variabel ini bertindak sebagai jembatan memori (closure) antara pengatur status di dalam
 * blok pengujian dengan fungsi satpam getSession yang sudah kita bajak di bawah.
 */
let mockSessionValue: any = null;

/**
 * 2. JINAKKAN SATPAM BETTER AUTH (MODULE MOCKING)
 * Memberitahu Bun untuk mencegat berkas 'utils/auth'. Ketika middleware Hono memanggil
 * auth.api.getSession(), Bun akan membelokkannya ke fungsi panah palsu buatan kita ini.
 * Trik 'as any' digunakan untuk membungkam komplain linter TypeScript di Neovim terkait tipe generik Better Auth.
 */
mock.module("../../utils/auth", () => {
  return {
    auth: {
      api: {
        // Fungsi membaca saklar secara dinamis berdasarkan nilai 'mockSessionValue' terbaru
        getSession: ((context: any) =>
          Promise.resolve(mockSessionValue)) as any,
      },
    },
  };
});

/**
 * 3. MOCKING UNTUK USERS SERVICE (SERVICE ISOLATION)
 * Memotong ketergantungan rute terhadap database PostgreSQL asli / Prisma Client.
 * Kita sediakan cetakan fungsi kosong di awal, yang nantinya isinya bisa kita manipulasi secara dinamis
 * menggunakan helper mock() milik Bun di dalam masing-masing skenario test.
 */
mock.module("./users.service", () => {
  return {
    usersService: {
      getAllUsers: () => {},
      getUserById: () => {},
      updateUser: () => {},
    },
  };
});

describe("Users Module - Integration Unit Test", () => {
  /**
   * HOOK: RESET STATE SEBELUM TEST BERJALAN
   * Memastikan bahwa setiap kali sebuah unit test baru dimulai, saklar session dikembalikan ke kondisi null.
   * Ini sangat penting (Test Isolation) agar manipulasi data di Test 2 tidak bocor ke Test 3.
   */
  beforeEach(() => {
    mockSessionValue = null;
  });

  /**
   * TEST 1: MEMASTIKAN SATPAM MIDDLEWARE BEKERJA (PROTECTION TEST)
   * Menguji apakah rute yang dilindungi benar-benar menolak request ilegal yang tidak membawa token session.
   */
  test("GET /api/users - Harus gagal (401) jika tidak membawa session", async () => {
    mockSessionValue = null; // Memastikan saklar mati (User tidak login)

    // Menembak rute secara lokal menggunakan utilitas bawaan Hono app.request()
    const res = await app.request("/api/users");

    // Ekspektasi: Satpam middleware mendeteksi session null, lalu melempar status 401 Unauthorized
    expect(res.status).toBe(401);
  });

  /**
   * TEST 2: MEMASTIKAN ALUR DATA PAGINASI BERJALAN SUKSES (HAPPY PATH)
   * Menguji skenario ideal saat user berhasil login dan sistem berhasil menyuplai data dari database service.
   */
  test("GET /api/users - Harus sukses (200) dengan data ter-paginasi", async () => {
    // A. Nyalakan saklar login sukses dengan menyuntikkan objek session tiruan
    mockSessionValue = {
      user: { id: "user-123", name: "Pak Hisbil", email: "bill@test.com" },
      session: { id: "sess-123" },
    };

    // B. Susun bentuk struktur cetakan data tiruan sesuai skema ekstensi Prisma .paginate() kita
    const mockPaginationResult = {
      data: [{ id: "user-1", name: "Pak Hisbil", email: "hisbil@example.com" }],
      meta: {
        total: 1,
        page: 1,
        limit: 10,
        lastPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };

    // C. Bajak fungsi getAllUsers pada usersService agar mengembalikan data tiruan di atas
    usersService.getAllUsers = mock(() =>
      Promise.resolve(mockPaginationResult),
    );

    // D. Jalankan simulasi request dengan parameter halaman dan header otorisasi lengkap
    const res = await app.request("/api/users?page=1&limit=10", {
      headers: { Authorization: "Bearer bebas" }, // String isi bebas karena satpam hanya membaca dari saklar
    });

    // E. Lakukan penegasan (assertion) terhadap hasil respon server
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.status).toBe("success");
  });

  /**
   * TEST 3: MEMASTIKAN VALIDASI INPUT BERJALAN KETAT (VALIDATION TEST / BAD PATH)
   * Menguji apakah zValidator(json, updateUserSchema) mampu menangkap dan memblokir input payload yang kotor.
   */
  test("PUT /api/users/me - Harus gagal (400) jika skema JSON melanggar aturan Zod", async () => {
    // A. Nyalakan saklar login sukses agar request diizinkan lolos melewati middleware satpam pelindung
    mockSessionValue = {
      user: { id: "user-123", name: "Pak Hisbil", email: "bill@test.com" },
      session: { id: "sess-123" },
    };

    // B. Jalankan request ke rute update profile dengan sengaja mengirim data nama yang cacat ("H")
    const res = await app.request("/api/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer bebas",
      },
      body: JSON.stringify({
        name: "H", // Melanggar aturan Zod .min(2) yang sudah kita deklarasikan di berkas users.schema.ts
      }),
    });

    // C. Ekspektasi: Karena berhasil lolos satpam, request tertangkap di layer Zod dan menghasilkan 400 Bad Request
    expect(res.status).toBe(400);
  });
});

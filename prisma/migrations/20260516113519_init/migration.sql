-- CreateTable
CREATE TABLE "m_users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "m_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_budgets" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "period_start" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "t_budgets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_transactions" (
    "id" SERIAL NOT NULL,
    "budget_id" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "estimate_price" DECIMAL(65,30) NOT NULL,
    "real_price" DECIMAL(65,30) NOT NULL,
    "diff_price" DECIMAL(65,30),
    "qty" INTEGER NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "t_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_users_username_key" ON "m_users"("username");

-- AddForeignKey
ALTER TABLE "t_budgets" ADD CONSTRAINT "t_budgets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "m_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_transactions" ADD CONSTRAINT "t_transactions_budget_id_fkey" FOREIGN KEY ("budget_id") REFERENCES "t_budgets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

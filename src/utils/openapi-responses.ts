import { z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";
import { jsonContent } from "stoker/openapi/helpers";
import { createErrorSchema } from "stoker/openapi/schemas";

const errorSchema = z.object({
  status: z.literal("error"),
  message: z.string(),
});

const allErrorResponses = {
  [HttpStatusCodes.BAD_REQUEST]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.BAD_REQUEST,
  ),
  [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.UNAUTHORIZED,
  ),
  [HttpStatusCodes.FORBIDDEN]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.FORBIDDEN,
  ),
  [HttpStatusCodes.NOT_FOUND]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.NOT_FOUND,
  ),
  [HttpStatusCodes.CONFLICT]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.CONFLICT,
  ),
  [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.UNPROCESSABLE_ENTITY,
  ),
  [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
    createErrorSchema(errorSchema),
    HttpStatusPhrases.INTERNAL_SERVER_ERROR,
  ),
};

type ErrorStatusCode = keyof typeof allErrorResponses;

export const createSuccessResponse = <T extends z.ZodTypeAny>(schema: T) => ({
  [HttpStatusCodes.OK]: jsonContent(
    z.object({
      status: z.literal("success"),
      data: schema,
    }),
    HttpStatusPhrases.OK,
  ),
});

export const createPaginatedResponse = <T extends z.ZodTypeAny>(schema: T) => ({
  [HttpStatusCodes.OK]: jsonContent(
    z.object({
      status: z.literal("success"),
      data: z.array(schema),
      meta: z.object({
        total: z.number(),
        page: z.number(),
        limit: z.number(),
        lastPage: z.number(),
        hasNextPage: z.boolean(),
        hasPrevPage: z.boolean(),
      }),
    }),
    HttpStatusPhrases.OK,
  ),
});

export const errorResponses = (...codes: ErrorStatusCode[]) => {
  return codes.reduce(
    (acc, code) => {
      acc[code] = allErrorResponses[code];
      return acc;
    },
    {} as Partial<typeof allErrorResponses>,
  );
};

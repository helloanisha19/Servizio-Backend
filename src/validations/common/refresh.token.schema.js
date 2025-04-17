import { extendZodWithOpenApi } from "zod-openapi";
import { z } from "zod";
extendZodWithOpenApi(z);
export const refreshTokenSchema = z.object({
  refresh_token: z.string().openapi({
    example:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRkZjA5YTRjMWU3ZjAwMWY1YTZjMWQiLCJwaG9uZV9udW1iZXIiOiI5ODU3MjEwMzQ1IiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjMwNjIwMzI4LCJleHAiOjE2MzIyMjIzMjgsInN1YiI6InNhbWVlciJ9.5yV5kqg3n7e9H2ZQg1E4y9Vr2P6c0Q3e9Qc6k9H2ZQg",
  }),
});

import * as z from "zod";

export const MessageSchema = z.object({
  message: z.string().min(10).max(1000),
});

import { z } from "zod";

export const joyasQuerySchema = z.object({
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 2)) // Convertir a número
    .default(2)
    .refine((val) => val > 0, {
      message: "'limit' debe ser un número positivo.",
    }),
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 1)) // Convertir a número
    .default(1)
    .refine((val) => val > 0, {
      message: "'page' debe ser un número positivo.",
    }),
  order_by: z.string().optional().default("id_ASC"),
});

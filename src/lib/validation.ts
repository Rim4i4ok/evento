import { z } from "zod";

export const pageNumberSchema = z.coerce.number().int().positive().optional();

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please provide a valid email address").max(100),
  phone: z
    .string()
    .min(10, "Please provide a valid phone number")
    .max(15)
    .regex(/^[0-9+ ]+$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

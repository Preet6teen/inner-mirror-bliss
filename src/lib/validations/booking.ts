import { z } from "zod";

export const bookingFormSchema = z.object({
  serviceId: z.string().min(1, "Please select a service"),
  mode: z.enum(["in-person", "online-video", "distance"], {
    errorMap: () => ({ message: "Please select an appointment mode" }),
  }),
  appointmentDate: z
    .string()
    .min(10, "Please select an appointment date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  appointmentTime: z
    .string()
    .min(5, "Please select an appointment time")
    .regex(/^\d{2}:\d{2}$/, "Time must be in HH:mm format"),
  clientName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  clientEmail: z
    .string()
    .email("Please provide a valid email address")
    .max(100, "Email must be less than 100 characters"),
  clientPhone: z
    .string()
    .min(10, "Please provide a valid 10-digit phone number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+ ]+$/, "Phone number must contain only numbers and standard prefix"),
  clientNotes: z
    .string()
    .max(500, "Notes must be under 500 characters")
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

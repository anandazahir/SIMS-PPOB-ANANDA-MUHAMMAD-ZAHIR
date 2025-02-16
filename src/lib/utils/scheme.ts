import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Paramter email tidak sesuai format" }),
  password: z.string().min(8, { message: "Password minimal 8 karakter" }),
});

export const RegisterSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email wajib diisi" })
      .email({ message: "Paramter email tidak sesuai format" }),
    first_name: z.string().min(1, { message: "Nama Depan wajib diisi" }),
    last_name: z.string().min(1, { message: "Nama Belakang wajib diisi" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Konfirmasi password wajib diisi" })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password harus sama",
    path: ["confirmPassword"],
  });

export const UpdateProfileSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  first_name: z.string(),
  last_name: z.string(),
  profile_image: z.string().url({ message: "URL foto profil tidak valid" }),
});
export const TopUpSchema = z.object({
  top_up_amount: z
    .number({
      required_error: "Nominal top-up harus diisi.",
      invalid_type_error: "Nominal top-up harus berupa angka.",
    })
    .min(10000, "Minimal top-up adalah Rp10.000.")
    .max(1000000, "Maksimal top-up adalah Rp1.000.000."),
});
export const TransactionSchema = z.object({
  service_code: z.string(),
});

export type TransactionRequest = z.infer<typeof TransactionSchema>;
export type TopUpRequest = z.infer<typeof TopUpSchema>;
export type RegisterRequest = z.infer<typeof RegisterSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
export type UpdateProfileRequest = z.infer<typeof UpdateProfileSchema>;

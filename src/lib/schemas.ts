import { z } from "zod";

export const signUpFormSchema = z
  .object({
    username: z.string().min(1, "Username can't be empty."),
    email: z.string().email(" Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

export type TSignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const logInFormSchema = z.object({
  email: z.string().email(" Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TLoginFormSchema = z.infer<typeof logInFormSchema>;

export const forgetPasswordFormSchema = z.object({
  email: z.string().email(),
});

export type TForgetPasswordFormSchema = z.infer<typeof forgetPasswordFormSchema>;

export const resetPasswordFormSchema = z.object({
  email: z.string().email(" Invalid email address"),
  otp: z.string().min(5, "Password must be at least 8 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TResetPasswordFormSchema = z.infer<typeof resetPasswordFormSchema>;

export const sendFormSchema = z.object({
  recipient: z.string().min(1, "Id can't be empty"),
  amount: z
    .union([
      z.number(),
      z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), {
          message: "Invalid number format",
        })
        .transform((val) => parseFloat(val)),
    ])
    .refine((val) => val >= 0.000001, {
      message: "Amount must be at least 0.000001",
    }),
});

export type TSendFormSchema = z.infer<typeof sendFormSchema>;

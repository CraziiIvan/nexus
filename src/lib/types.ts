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

export const logInFormSchema = z
  .object({
    email: z.string().email(" Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

export type TLoginFormSchema = z.infer<typeof logInFormSchema>;

export const sendFormSchema = z
  .object({
    recipient: z.string(),
    amount: z.number(),
  })

export type TSendFormSchema = z.infer<typeof sendFormSchema>;

export type TJwtToken = {
  token_type: "access";
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}

export type TTransaction = {
  sender: number
  recipient: string
  amount: number 
  transaction_hash: string
  status: string
  timestamp : string
  block_number: string
  fee: string
}

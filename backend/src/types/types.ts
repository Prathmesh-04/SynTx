import { z } from "zod"

export const UserSchema = z.object({
    username: z.string().trim().min(3).toLowerCase(),
    password: z.string().min(5),
    email: z.email()
});

export const SigninSchema = z.object({
    keyword : z.string(),
    password: z.string()
})

export const submissionSchema = z.object({
    userId: z.string(),
    sourceCode: z.string(),
    language: z.string(),
    input: z.string()
})
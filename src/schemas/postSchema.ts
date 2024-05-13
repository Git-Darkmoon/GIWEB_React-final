import { z } from "zod"

export const postSchema = z.object({
  userId: z.string().min(1, {
    message: "User ID must be a positive integer",
  }),
  title: z.string().min(1, {
    message: "Title must not be empty",
  }),
  body: z.string().min(1, {
    message: "Body must not be empty",
  }),
})

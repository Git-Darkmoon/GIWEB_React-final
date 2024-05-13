"use client"

import InputBase from "@/components/InputBase"
import { postSchema } from "@/schemas/postSchema"
import { createPost } from "@/services/posts"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

function CreatePost() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInputs>({
    resolver: zodResolver(postSchema),
  })

  const onSubmit: SubmitHandler<PostInputs> = async (data) => {
    toast.promise(createPost(data), {
      loading: "Creating Post...",
      success: <h3>Post created!</h3>,
      error: <h3>Something went wrong...</h3>,
    })

    reset()
  }

  return (
    <section className="mx-auto max-w-2xl px-12 md:px-6 pt-14">
      <div>
        <h1 className="text-3xl font-bold text-gradient text-center mb-3">
          Create a new post
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-5 md:grid-cols-1"
        >
          <div>
            <InputBase
              type="number"
              placeholder="12"
              label="User ID"
              id="userId"
              registerFn={register}
            />
            {errors?.userId?.message && (
              <p className="text-red-500 text-sm pt-1">
                {errors?.userId?.message as string}
              </p>
            )}
          </div>
          <div>
            <InputBase
              type="text"
              placeholder="Breaking News !!!"
              label="Post Title"
              id="title"
              registerFn={register}
            />
            {errors?.title?.message && (
              <p className="text-red-500 text-sm pt-1">
                {errors?.title?.message as string}
              </p>
            )}
          </div>
          <div>
            <InputBase
              type="text"
              placeholder="Hi everyone !!! Did you know that ..."
              label="Post Content"
              id="body"
              registerFn={register}
            />
            {errors?.body?.message && (
              <p className="text-red-500 text-sm pt-1">
                {errors?.body?.message as string}
              </p>
            )}
          </div>

          <button
            className="bg-gradient cursor-pointer text-lg text-blacky px-4 py-2 rounded active:scale-95 hover:scale-105 transition-transform "
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
      </div>
    </section>
  )
}
export default CreatePost

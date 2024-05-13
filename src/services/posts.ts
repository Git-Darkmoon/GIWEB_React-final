import { User } from "@/types/User"
import {
  callDeleteHttpAdapter,
  callGetHttpAdapter,
  callPostHttpAdapter,
  callPutHttpAdapter,
} from "./Adapter/CallHttpAdapter"

const BASE_URL: string = "https://jsonplaceholder.typicode.com/"

export async function getProducts(): Promise<any> {
  const response = await callGetHttpAdapter(`${BASE_URL}/posts`, (data) => data)
  return response as PostInputs[]
}

export async function getUserDetails(id: string): Promise<any> {
  const response = await callGetHttpAdapter(
    `${BASE_URL}/users/${id}`,
    (data) => data
  )
  return response as User
}

export async function createPost(post: PostInputs): Promise<any> {
  const response = await callPostHttpAdapter(`${BASE_URL}/posts`, post)
  return response
}

export async function updatePost(id: string, post?: PostInputs): Promise<any> {
  const response = await callPutHttpAdapter(`${BASE_URL}/posts/${id}`, post)
  return response
}

export async function deletePost(id: string): Promise<any> {
  const response = await callDeleteHttpAdapter(`${BASE_URL}/posts/${id}`)
  return response
}

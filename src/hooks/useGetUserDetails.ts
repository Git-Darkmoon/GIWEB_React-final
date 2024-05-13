import { getUserDetails } from "@/services/posts"
import { User } from "@/types/User"
import { useQuery } from "@tanstack/react-query"

export const useGetUserDetails = (userId: string) => {
  return useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => getUserDetails(userId),
  })
}

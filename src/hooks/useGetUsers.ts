import { getProducts } from "@/services/posts"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
  return useQuery<UserApiResponse>({
    queryKey: ["posts"], //refetch whenever the data changes
    queryFn: getProducts,
    staleTime: 30_000, //don't refetch previously viewed pages until cache is more than 30 seconds old
  })
}

"use client"

import { useGetUserDetails } from "@/hooks/useGetUserDetails"
import { getInitials } from "@/utils/AvatarLetters"

function UserDetails({ params }: { params: { userId: string } }) {
  const { userId } = params
  const { data: user, isLoading } = useGetUserDetails(userId)

  if (isLoading) {
    return (
      <div className="text-slate-50 text-3xl w-full h-full grid place-items-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="text-slate-50 px-8 py-6 md:px-12 grid gap-8">
      <div className="flex items-center gap-6">
        <div className="size-16 bg-slate-400/30 grid place-items-center rounded-full">
          {getInitials(user?.name || "JD")}
        </div>
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold capitalize">{user?.name}</h1>
          <div className="text-gray-400">@{user?.username}</div>
          <div className="text-gray-400">{user?.email}</div>
        </div>
      </div>
      <hr className="border-slate-400/30" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <div className="text-gray-400">Address</div>
          <div>
            {user?.address.street} St.
            <br />
            {user?.address.suite}
            <br />
            {user?.address.city}, US
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-gray-400">Contact</div>
          <div>
            <div>Phone: {user?.phone}</div>
            <div>Website: {user?.website}</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-gray-400">Company</div>
          <div>
            <div>{user?.company.name}</div>
            <div>{user?.company.catchPhrase}</div>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-gray-400">Geo-localization</div>
          <div>
            <div>Latitude: {user?.address.geo.lat}</div>
            <div>Longitude: {user?.address.geo.lng}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserDetails

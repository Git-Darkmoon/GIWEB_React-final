"use client"

import { useMemo } from "react"
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table"
import { Menu } from "@mantine/core"
import { User } from "@/types/User"
import { IconInfoCircle } from "@tabler/icons-react"
import { useGetUsers } from "@/hooks/useGetUsers"
import Link from "next/link"
import { deletePost, updatePost } from "@/services/posts"
import toast from "react-hot-toast"

const Table = () => {
  const columns = useMemo<MRT_ColumnDef<User>[] | any>(
    () => [
      {
        accessorKey: "userId",
        header: "User ID",
      },
      {
        accessorKey: "id",
        header: "Post ID",
      },
      {
        accessorKey: "title",
        header: "Post Title",
      },
      {
        accessorKey: "body",
        header: "Content",
      },
      {
        accessorKey: "link",
        enableColumnActions: false,
        enableColumnFilter: false,
        enableColumnOrdering: false,
        enableSorting: false,
        disableFilters: true,
        enableGlobalFilter: false,
        header: "User Details",
        Cell: ({ cell, row }: any) => (
          <Link
            className="flex gap-2 underline-offset-4 hover:underline "
            href={`/${row.original.userId}`}
          >
            <p className="text-gradient font-semibold">Go to details</p>
            <IconInfoCircle />
          </Link>
        ),
      },
    ],
    []
  )

  const { data, isError, isFetching, isLoading, refetch } = useGetUsers()

  const fetchedUsers: User[] | any = data ?? []

  const table = useMantineReactTable({
    columns,
    data: fetchedUsers,
    enableRowActions: true,
    renderRowActionMenuItems: (e) => (
      <>
        <Menu.Item
          onClick={async () => {
            let postId = e.row.getValue<string>("id")
            toast.promise(updatePost(postId), {
              loading: `Updating post ...`,
              success: <h3>Post #{postId} updated!</h3>,
              error: <h3>Ups! couldn&apos;t modify data...</h3>,
            })
          }}
        >
          Update
        </Menu.Item>
        <Menu.Item
          onClick={async () => {
            let postId = e.row.getValue<string>("id")
            toast.promise(deletePost(postId), {
              loading: `Deleting post ...`,
              success: <h3>Post #{postId} deleted!</h3>,
              error: <h3>Ups! couldn&apos;t delete...</h3>,
            })
          }}
        >
          Delete
        </Menu.Item>
      </>
    ),
    positionGlobalFilter: "left",
    enableColumnFilterModes: true,
    columnFilterModeOptions: ["contains", "startsWith", "endsWith"],
    mantineToolbarAlertBannerProps: isError
      ? {
          color: "red",
          children: "Error loading data",
        }
      : undefined,

    state: {
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      showGlobalFilter: true,
    },
    enableFullScreenToggle: false,
    enableDensityToggle: false,
  })

  return <MantineReactTable table={table} />
}

export default Table

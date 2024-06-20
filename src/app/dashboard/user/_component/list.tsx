"use client"
import {  MoreHorizontal, Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/ui/datatable"



const users = [
  {
    id: "728ed52f",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  },
  {
    id: "728ed52a",
    user: "Zilmas",
    role: "Super Admin",
    contact: "081293XXX",
    status: "Aktif"
  }
]

const List = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "user",
      header: "User",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "contact",
      header: "Kontak",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      id: "actions",
      size: 100,
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
   
        return (
          <div className="space-x-2">
            <Button
              variant="destructive"
              size="sm"
            >
              <Trash2 className="w-4" />
            </Button>
            <Button
              size="sm"
            >
              <Edit2 className="w-4" />
            </Button>
          </div>
        )
      },
    }
  ]

  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default List
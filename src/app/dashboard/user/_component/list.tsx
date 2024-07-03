"use client"
import { Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DataTable } from "@/components/ui/datatable"

const users = [
  {
    id: "728ed52f",
    user: "Zilmas",
    no_aggota: "5001",
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
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div>
              <div className="font-semibold">{row.original.user}</div>
              <div className="text-sm text-gray-500">{row.original.no_aggota}</div>
            </div>
          </div>
        )
      }
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
          <div className="flex space-x-2">
           <Button
              variant="link"
              size="sm"
            >
              <Trash2 
                className="w-4 text-red-500" 
              />
            </Button>
            <Button
              size="sm"
              variant="link"
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
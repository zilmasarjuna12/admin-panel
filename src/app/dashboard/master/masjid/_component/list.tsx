"use client"
import { Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DataTable } from "@/components/ui/datatable"

const data = [
  {
    id: "728ed52f",
    name: "Al - XXX",
    city: "Bandung",
    province: "Jawa Barat",
    phone_number: "081XXXX",
    coordinate: "5123,123123",
    account_bank: "123123123",
    status: "Aktif"
  }
]

const List = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Masjid",
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div>
              <div className="font-semibold">{row.original.name}</div>
              <div className="text-sm text-gray-500">{row.original.city}, {row.original.province}</div>
            </div>
          </div>
        )
      }
    },
    {
      accessorKey: "phone_number",
      header: "Kontak Pengurus"
    },
    {
      accessorKey: "coordinate",
      header: "Koordinate"
    },
    {
      accessorKey: "account_bank",
      header: "Rekening"
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
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default List
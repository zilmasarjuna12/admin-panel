"use client"
import { Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DataTable } from "@/components/ui/datatable"

const data = [
  {
    id: "728ed52f",
    name: "Al - XXX",
    phone_number: "081XXXX",
    coordinate: "5123,123123",
    account_bank: "123123123",
    status: "Aktif"
  },
  {
    id: "728ed52f",
    name: "Al - XXX",
    phone_number: "081XXXX",
    coordinate: "5123,123123",
    account_bank: "123123123",
    status: "Aktif"
  },
  {
    id: "728ed52f",
    name: "Al - XXX",
    phone_number: "081XXXX",
    coordinate: "5123,123123",
    account_bank: "123123123",
    status: "Aktif"
  },
  {
    id: "728ed52f",
    name: "Al - XXX",
    phone_number: "081XXXX",
    coordinate: "5123,123123",
    account_bank: "123123123",
    status: "Aktif"
  },
]

const List = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Masjid"
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
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default List
"use client"
import { Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DataTable } from "@/components/ui/datatable"

const users = [
  {
    id: "728ed52f",
    no_anggota: "5001",
    name: "Zilmas",
    nilai_storan: "100000",
    tanggal_setoran: "12/Apr/2024",
    sisa_setoran: "Rp. 1.000.000",
    status: "Aktif"
  }
]

const List = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "user",
      header: "Anggota",
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div>
              <div className="font-semibold">{row.original.name}</div>
              <div className="text-sm text-gray-500">{row.original.no_anggota}</div>
            </div>
          </div>
        )
      }
    },
    {
      accessorKey: "role",
      header: "Nilai Setoran",
      cell: ({ row }) => {
        return (
          <div>
            <div>{row.original.nilai_storan}</div>
            <div>{row.original.tanggal_setoran}</div>
          </div>
        )
      }
    },
    {
      accessorKey: "contact",
      header: "Sisa Setoran",
      cell: ({ row }) => {
        return (
          <div>
            <div>{row.original.sisa_setoran}</div>
          </div>
        )
      }
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
"use client"
import { Trash2, Edit2 } from "lucide-react"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DataTable } from "@/components/ui/datatable"

const data = [
  {
    id: "728ed52f",
    name: "Rizal",
    jenis_relawan: "Relawan IT",
    alamat: "....",
    kontribusi: "-",
    tunjangan: "-"
  },
  {
    id: "728ed52f",
    name: "Rizal",
    jenis_relawan: "Relawan IT",
    alamat: "....",
    kontribusi: "-",
    tunjangan: "-"
  },
  {
    id: "728ed52f",
    name: "Rizal",
    jenis_relawan: "Relawan IT",
    alamat: "....",
    kontribusi: "-",
    tunjangan: "-"
  }
]

const List = () => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Relawan"
    },
    {
      accessorKey: "jenis_relawan",
      header: "Jenis Relawan"
    },
    {
      accessorKey: "alamat",
      header: "Alamat"
    },
    {
      accessorKey: "kontribusi",
      header: "Kontribusi"
    },
    {
      accessorKey: "tunjangan",
      header: "Tunjangan",
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
import Menu from "@/components/menu"
import Header from "./_component/header"

const menus = [
  {
    key: "1",
    label: "Dashboard",
    href: "/dashboard"
  }, {
    key: "2",
    label: "Manajemen User",
    href: "/dashboard/user"
  }, {
    key: "3",
    label: "Master",
    children: [
      {
        key: "3-1",
        label: "Data Masjid",
        href: "/dashboard/master/masjid"
      },
      {
        key: "3-2",
        label: "Data Relawan",
        href: "/dashboard/master/relawan"
      },
      {
        key: "3-3",
        label: "Data Manajerial"
      },
      {
        key: "3-4",
        label: "Apps Koperasi"
      }
    ]
  },
  {
    key: "4",
    label: "Simpanan",
    children: [
      {
        key: "4-1",
        label: "Simpanan Pokok"
      },
      {
        key: "4-2",
        label: "Simpanan Wajib"
      },
      {
        key: "4-3",
        label: "Simpanan Sukarela"
      },
      {
        key: "4-4",
        label: "Simpanan Pokok Khusus"
      }
    ]
  }
]

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="hidden md:inline md:basis-1/6 bg-primary p-4">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>
        <Menu 
          menus={menus}
        />
      </div>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <div className="px-6 py-4 bg-white">
          {
            children
          }
        </div>
      </div>
     
    </div>
  )
}

export default Layout
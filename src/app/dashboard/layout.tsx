import Menu from "@/components/menu"
import Header from "./_component/header"

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
          menus={[{
            key: "1",
            label: "Dashboard",
            href: "/dashboard"
          }, {
            key: "2",
            label: "User Role",
            href: "/dashboard/user"
          }]}
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
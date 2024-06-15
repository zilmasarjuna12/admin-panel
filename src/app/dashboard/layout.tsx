import Menu from "@/components/menu"

import Profile from "./_component/profile"

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/6 bg-primary p-4">
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
      <div className="basis-5/6 px-5 py-4">
        <div>
          <div className="flex items-center h-12">
            <div>
              <h3 className="text-xl font-bold">
                Manajemen Pengguna
              </h3>
            </div>
            <div className="flex ml-auto items-center">
              <Profile />
            </div>
          </div>
          <div className="mt-6">
            {
              children
            }
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Layout
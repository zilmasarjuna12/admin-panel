import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Menu from "@/components/menu"
import Profile from "./profile"

const Header = () => {
  return (
    <div className="sticky items-center top-0 z-[1] flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none shadow-5 px-6 py-4 border-b border-gray-200 dark:bg-gray-800">
      <div className="md:hidden">
      <Sheet >
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="bg-primary" side="left">
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
        </SheetContent>
      </Sheet>
      </div>
      <div className="flex ml-auto items-center ">
        <Profile />
      </div>
    </div>
  )
}

export default Header
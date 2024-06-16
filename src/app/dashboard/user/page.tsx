import {
  Button,
} from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import FilterForm from "./_component/filter"

const Page = () => {
  return (
    <div>
      <div className="mb-4">
        <div className="breadcrumb mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">User</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h3 className="text-xl font-semibold">
          User Management
        </h3>
      </div>
      <div className="md:flex items-center">
        <FilterForm />
        <div className="mt-3 md:mt-0 flex md:ml-auto md:items-center space-x-4">
          <Button
            className="w-full"
          >
            Tambah
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
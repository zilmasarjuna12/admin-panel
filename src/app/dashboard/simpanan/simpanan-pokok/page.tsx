import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"

import FilterForm from "./_component/filter"
import List from "./_component/list"

const Page = () => {
  return (
    <div>
      <div className="mb-4">
        <div className="breadcrumb mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Simpanan Pokok</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h3 className="text-xl font-semibold">
          Simpanan Pokok
        </h3>
      </div>
      <div className="md:flex items-center">
        <FilterForm />
      </div>
      <div className="mt-6">
        <List />
      </div>

      
    </div>
  )
}

export default Page
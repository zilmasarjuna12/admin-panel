import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

import FilterForm from "./_component/filter"
import List from "./_component/list"
import AddForm from './_component/add'

const Page = () => {
  return (
    <div>
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Master</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Relawan</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h3 className="text-xl font-semibold">
          Data Relawan
        </h3>
      </div>
     
      <div className="md:flex items-center">
        <FilterForm />
        <div className="mt-3 md:mt-0 flex md:ml-auto md:items-center space-x-4">
          <AddForm />
        </div>
      </div>
      <div className="mt-6">
        <List />
      </div>
    </div>
  )
}

export default Page
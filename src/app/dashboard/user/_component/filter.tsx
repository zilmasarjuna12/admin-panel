import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"

const FilterForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <Input 
        placeholder="Search" 
        width={300}
        className="w-full md:col-span-2 md:w-[300px]"
      />
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Role 1</SelectItem>
          <SelectItem value="dark">Role 2</SelectItem>
          <SelectItem value="system">Role 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Aktif</SelectItem>
          <SelectItem value="dark">Tidak Aktif</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterForm
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Input 
        placeholder="Search" 
        width={300}
        className="w-full md:col-span-1 md:w-[300px]"
      />
      <Select>
        <SelectTrigger className="w-full col-span-1">
          <SelectValue placeholder="Semua jenis relawan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Relawan 1</SelectItem>
          <SelectItem value="dark">Relawan 2</SelectItem>
          <SelectItem value="system">Relawan 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterForm
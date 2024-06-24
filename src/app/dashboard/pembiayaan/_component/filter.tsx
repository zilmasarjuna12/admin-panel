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
          <SelectValue placeholder="Semua Pekerjaan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Pekerjaan 1</SelectItem>
          <SelectItem value="dark">Pekerjaan 2</SelectItem>
          <SelectItem value="system">Pekerjaan 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Jenis Pembiyaan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Ba'i</SelectItem>
          <SelectItem value="dark">Mudhorobah</SelectItem>
          <SelectItem value="dark">Qiradh</SelectItem>
          <SelectItem value="dark">Rahn</SelectItem>
          <SelectItem value="dark">Muzara'ah</SelectItem>
          <SelectItem value="dark">Qardhul Hasan</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FilterForm
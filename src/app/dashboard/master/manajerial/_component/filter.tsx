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
          <SelectValue placeholder="Area Kerja" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Jawa Barat</SelectItem>
          <SelectItem value="dark">Jakarta</SelectItem>
          <SelectItem value="system">Jawa Tengah</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Jabatan" />
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
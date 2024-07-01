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
    </div>
  )
}

export default FilterForm
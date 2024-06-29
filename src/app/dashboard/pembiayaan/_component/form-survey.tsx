import { useFormContext } from "react-hook-form";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const FormSurvey = () => {
  const form = useFormContext<any>();

  return (
    <div className="grid gap-4">
      <div className="rounded-md border px-4 py-3">
        <div className="grid grid-cols-3 pb-3 gap-4">
          <div className="col-span-2">
            <h5 className="font-medium">Survey</h5>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <h5 className="font-medium">Ya</h5>
              <h5 className="font-medium">Tidak</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            Apakah anda pengurus masjid?
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  asChild={false}
                  className="grid grid-cols-2"
                >
                  <RadioGroupItem value="yes"  />
                  <RadioGroupItem value="no" />
                </RadioGroup>
              )}
            />
          </div>
          <div className="col-span-2">
            Apakah anda memiliki cicilan lebih dari 1 tagihan?
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  asChild={false}
                  className="grid grid-cols-2"
                >
                  <RadioGroupItem value="yes"  />
                  <RadioGroupItem value="no" />
                </RadioGroup>
              )}
            />
          </div>
          <div className="col-span-2">
            Apakah anda perokok?
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  asChild={false}
                  className="grid grid-cols-2"
                >
                  <RadioGroupItem value="yes"  />
                  <RadioGroupItem value="no" />
                </RadioGroup>
              )}
            />
          </div>
          <div className="col-span-2">
            Apakah anda memiliki kendaraan bermotor?
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  asChild={false}
                  className="grid grid-cols-2"
                >
                  <RadioGroupItem value="yes"  />
                  <RadioGroupItem value="no" />
                </RadioGroup>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSurvey
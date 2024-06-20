"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Button,
} from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  fullname: z.string(),
  phone_number: z.string(),
  role: z.string(),
  status: z.boolean(),
})

const AddForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone_number: "",
      role: "",
      status: false,
    },
  })

  const handleSubmit =  () => {

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full"
        >
          Tambah
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah user</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid gap-2 mb-7">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem
                    className="grid gap-1"
                  >
                    <FormLabel>
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nama lengkap"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem
                    className="grid gap-1"
                  >
                    <FormLabel>
                      Kontak
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nomor kontak yang aktif"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">Superadmin</SelectItem>
                        <SelectItem value="m@google.com">Admin</SelectItem>
                        <SelectItem value="m@support.com">Role</SelectItem>
                      </SelectContent>
                    </Select>
                  
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormLabel>
                      Status
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddForm
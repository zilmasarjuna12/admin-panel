"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Button,
} from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Step from "@/components/ui/step"

import FormPersonal from "./form-personal"
import FormPekerjaan from "./form-pekerjaan"
import { useState } from "react"

const formSchema = z.object({
  fullname: z.string(),
  phone_number: z.string(),
  role: z.string(),
  status: z.boolean(),
})

const getStepContent = (step: number) => {
  switch (step) {
    case 1: 
      return <FormPersonal />
    case 2:
      return <FormPekerjaan />
  }
}

const AddForm = () => {
  const [activeStep, setActiveStep] = useState(1)
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
      <DialogContent className="sm:max-w-[925px]">
        <DialogHeader>
          <DialogTitle>Tambah Pengajuan</DialogTitle>
        </DialogHeader>

        <Step 
          activeStep={5}
          steps={["Personal", "Pekerjaan", "Usaha", "Kontak", "Survei", "Review"]}
        />

        {
          getStepContent(activeStep)
        }
        <DialogFooter>
          <Button 
            type="button"
            onClick={() => setActiveStep(activeStep+1)}
          >Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddForm
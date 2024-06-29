"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
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
  username: z.string(),
  test: z.string()
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
  
  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      test: "",
    },
    mode: "all"
  })

  const handleSubmit =  () => {

  }

  const handleNext = async () => {
    const isStepValid = await form.trigger(undefined, { shouldFocus: true });
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button
          className="w-full"
        >
          Tambah
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[925px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Tambah Pengajuan</DialogTitle>
        </DialogHeader>
        
        <div className="p-6">
          <Step 
            activeStep={activeStep}
            steps={["Personal", "Pekerjaan", "Usaha", "Kontak", "Survei", "Review"]}
          />
          <FormProvider {...form}>
            {
              getStepContent(activeStep)
            }
          </FormProvider>
        </div>
        <DialogFooter className="bg-white px-6 py-3 shadow-slate border-t-[1px] border-gray-200 shadow-lg">
          <Button 
            type="button"
            onClick={handleNext}
          >Lanjutkan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddForm
'use client'

import { ReactElement, ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type FormConfig = {
  defaultValues?: Record<string, any>
}

type FormProps = {
  children?: ReactElement | ReactNode
  submitHandler: SubmitHandler<any>
  className?: string
} & FormConfig

const Form = ({ children, submitHandler, defaultValues, className }: FormProps) => {
  const formConfig: FormConfig = {}

  if (!!defaultValues) formConfig['defaultValues'] = defaultValues

  const methods = useForm<FormProps>(formConfig)

  const { handleSubmit, reset } = methods

  const onSubmit = (data: any) => {
    submitHandler(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form

'use client'

import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import { Button } from 'antd'

const ResetPassPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='mx-0 my-[100px] flex justify-center'>
      <Form submitHandler={onSubmit}>
        <h3 className='mb-2.5'>Reset Password</h3>
        <div className='my-1.5 mx-0'>
          <FormInput name='oldPassword' label='Old password' type='password' />
        </div>
        <div className='my-1.5 mx-0'>
          <FormInput name='newPassword' label='New password' type='password' />
        </div>
        <Button type='primary' htmlType='submit'>
          submit
        </Button>
      </Form>
    </div>
  )
}

export default ResetPassPage

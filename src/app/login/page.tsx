'use client'

import loginImage from '@/assets/login.png'
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import { SubmitHandler } from 'react-hook-form'

type FormValues = {
  id: string
  password: string
}

export default function LoginPage() {
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
  }
  return (
    <Row justify='center' align='middle' className='min-h-screen'>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt='Login' />
      </Col>
      <Col sm={12} md={8} lg={8} className='space-y-3'>
        <h1 className='text-3xl font-semibold'>First login into your account</h1>
        <Form submitHandler={onSubmit} className='space-y-3'>
          <div>
            <FormInput name='id' size='large' placeholder='Type Your ID' label='User Id' />
          </div>
          <div>
            <FormInput name='password' type='password' size='large' placeholder='Type Your password' label='Password' />
          </div>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

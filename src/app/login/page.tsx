'use client'

import loginImage from '@/assets/login.png'
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import { useUserLoginMutation } from '@/redux/api/authApi'
import { storeUserInfo } from '@/service/auth.service'
import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

type FormValues = {
  id: string
  password: string
}

export default function LoginPage() {
  const { push } = useRouter()
  const [loginUser] = useUserLoginMutation()

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const userData = await loginUser(data).unwrap()
      const accessToken = userData?.data?.accessToken
      if (accessToken) {
        push('/profile')
      }
      storeUserInfo({ accessToken })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Row justify='center' align='middle' className='min-h-screen'>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt='Login' priority />
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
          <Button type='primary' htmlType='submit' size='large' className='!px-10'>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

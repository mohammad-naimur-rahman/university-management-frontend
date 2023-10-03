'use client'

import Form from '@/components/Forms/Form'
import FormInput from '@/components/Forms/FormInput'
import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import { useDepartmentQuery, useUpdateDepartmentMutation } from '@/redux/api/departmentApi'
import { Button, Col, Row, message } from 'antd'
import { useRouter } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default function EditDepartmentPage({ params }: Props) {
  const { push } = useRouter()
  const { id } = params

  const { data } = useDepartmentQuery(id)

  const [updateDepartment] = useUpdateDepartmentMutation()

  const defaultValues: any = {
    title: data?.title || '',
  }

  const onSubmit = async (values: any) => {
    message.loading('Updating Department...')
    try {
      await updateDepartment({ body: values, id })
      message.success('Department updated successfully!')
      push('/super_admin/department')
    } catch (err: any) {
      console.error(err.message)
      message.error(err.message)
    }
  }

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: 'super_admin',
            link: '/super_admin',
          },
          {
            label: 'department',
            link: '/super_admin/department',
          },
        ]}
      />

      <ActionBar title='Update Deaprtment' />

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} className='my-2.5 mx-0'>
            <FormInput name='title' label='Title' />
          </Col>
        </Row>
        <Button type='primary' htmlType='submit'>
          Update
        </Button>
      </Form>
    </div>
  )
}

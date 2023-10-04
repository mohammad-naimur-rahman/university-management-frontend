'use client'

import Form from '@/components/Forms/Form'
import FormDatePicker from '@/components/Forms/FormDatePicker'
import FormInput from '@/components/Forms/FormInput'
import FormSelectField from '@/components/Forms/FormSelectField'
import FormTextArea from '@/components/Forms/FormTextArea'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UploadImage from '@/components/ui/UploadImage'
import { bloodGroupOptions, genderOptions } from '@/constants/global'
import { useDepartmentsQuery } from '@/redux/api/departmentApi'
import { adminSchema } from '@/schemas/admin'
import { IDepartment } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Col, Row } from 'antd'

const CreateAdminPage = () => {
  const { data } = useDepartmentsQuery({ limit: 100, page: 1 })

  const departments: IDepartment[] = data?.departments!

  const departmentOptions =
    departments &&
    departments?.map(({ title, id }) => {
      return {
        label: title,
        value: id,
      }
    })

  const onSubmit = async (data: any) => {
    try {
      console.log(data)
    } catch (err: any) {
      console.error(err.message)
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
            label: 'admin',
            link: '/super_admin/admin',
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div className='border-[1px] border-[#d9d9d9] rounded-md p-4 mb-2.5'>
            <p className='text-lg mb-2.5'>Admin Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.name.firstName' size='large' label='First Name' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.name.middleName' size='large' label='Middle Name' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.name.lastName' size='large' label='Last Name' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='password' name='password' size='large' label='Password' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormSelectField
                  size='large'
                  name='admin.gender'
                  options={genderOptions}
                  label='Gender'
                  placeholder='Select'
                />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormSelectField
                  size='large'
                  name='admin.managementDepartment'
                  options={departmentOptions}
                  label='Department'
                  placeholder='Select'
                />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <UploadImage />
              </Col>
            </Row>
          </div>

          {/* basic info */}
          <div className='border-[1px] border-[#d9d9d9] rounded-md p-4 mb-2.5'>
            <p className='text-lg mb-2.5'>Basic Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='email' name='admin.email' size='large' label='Email address' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.contactNo' size='large' label='Contact No.' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.emergencyContactNo' size='large' label='Emergency Contact No.' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormDatePicker name='admin.dateOfBirth' label='Date of birth' size='large' />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormSelectField
                  size='large'
                  name='admin.bloodGroup'
                  options={bloodGroupOptions}
                  label='Blood group'
                  placeholder='Select'
                />
              </Col>
              <Col className='gutter-row mb-2.5' span={8}>
                <FormInput type='text' name='admin.designation' size='large' label='Designation' />
              </Col>
              <Col span={12} className='my-2.5 mx-0'>
                <FormTextArea name='admin.presentAddress' label='Present address' rows={4} />
              </Col>

              <Col span={12} className='my-2.5 mx-0'>
                <FormTextArea name='admin.permanentAddress' label='Permanent address' rows={4} />
              </Col>
            </Row>
          </div>
          <Button htmlType='submit' type='primary'>
            Create
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CreateAdminPage

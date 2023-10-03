import { bloodGroupOptions } from '@/constants/global'
import { Col, Row } from 'antd'
import FormDatePicker from '../Forms/FormDatePicker'
import FormInput from '../Forms/FormInput'
import FormSelectField from '../Forms/FormSelectField'
import FormTextArea from '../Forms/FormTextArea'

const StudentBasicInfo = () => {
  return (
    <div className='border border-[#d9d9d9] rounded-md p-4 my-2.5'>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={8} className='my-2.5 mx-0'>
          <FormInput type='email' name='student.email' label='Email address' size='large' />
        </Col>

        <Col span={8} className='my-2.5 mx-0'>
          <FormInput name='student.contactNo' label='Contact no.' size='large' />
        </Col>

        <Col span={8} className='my-2.5 mx-0'>
          <FormInput name='student.emergencyContactNo' label='Emergency contact no.' size='large' />
        </Col>

        <Col span={12} className='my-2.5 mx-0'>
          <FormDatePicker name='student.dateOfBirth' label='Date of birth' size='large' />
        </Col>

        <Col span={12} className='my-2.5 mx-0'>
          <FormSelectField name='student.bloodGroup' label='Blood group' options={bloodGroupOptions} size='large' />
        </Col>

        <Col span={12} className='my-2.5 mx-0'>
          <FormTextArea name='student.presentAddress' label='Present address' rows={4} />
        </Col>

        <Col span={12} className='my-2.5 mx-0'>
          <FormTextArea name='student.permanentAddress' label='Permanent address' rows={4} />
        </Col>
      </Row>
    </div>
  )
}

export default StudentBasicInfo

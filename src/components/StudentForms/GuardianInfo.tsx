import { Col, Row } from 'antd'
import FormInput from '../Forms/FormInput'

const GuardianInfo = () => {
  return (
    <>
      <div className='border-[1px] border-[#d9d9d9] rounded-md p-4 my-2.5'>
        <p className='text-lg font-semibold my-1.5 mx-0'>Guardian information</p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.fatherName' label='Father name' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.fatherOccupation' label='Father occupation' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.fatherContactNo' label='Father contact no.' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.motherName' label='Mother name' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.motherOccupation' label='Mother occupation' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.motherContactNo' label='Mother contact no.' size='large' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.guardian.address' label='Address' size='large' />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default GuardianInfo

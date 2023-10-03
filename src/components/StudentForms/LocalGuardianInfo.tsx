import { Col, Row } from 'antd'
import FormInput from '../Forms/FormInput'

const LocalGuardianInfo = () => {
  return (
    <>
      <div className='border border-[#d9d9d9] rounded-md p-4 my-2.5'>
        <p className='text-lg font-semibold my-1.5 mx-0'>Guardian information</p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.localGuardian.name' label='Local guardian name' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.localGuardian.occupation' label='Local guardian occupation' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.localGuardian.contactNo' label='Local guardian contact no.' />
          </Col>

          <Col span={6} className='my-2.5 mx-0'>
            <FormInput name='student.localGuardian.address' label='Local guardian address' />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LocalGuardianInfo

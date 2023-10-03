import { Row, Space, Spin } from 'antd'

const Loading = () => {
  return (
    <Row justify='center' align='middle' className='h-screen'>
      <Space>
        <Spin tip='Loading' size='large'></Spin>
      </Space>
    </Row>
  )
}

export default Loading

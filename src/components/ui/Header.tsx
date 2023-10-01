import { ACCESS_TOKEN } from '@/constants/storageKey'
import { removeUserInfo } from '@/service/auth.service'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd'
import { useRouter } from 'next/navigation'
const { Header: AntHeader } = Layout

const Header = () => {
  const router = useRouter()

  const logOut = () => {
    removeUserInfo(ACCESS_TOKEN)
    router.push('/')
  }

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Button onClick={logOut} type='text' danger>
          Logout
        </Button>
      ),
    },
  ]
  return (
    <AntHeader className='bg-white'>
      <Row justify='end' align='middle' className='h-full'>
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size='large' icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  )
}

export default Header

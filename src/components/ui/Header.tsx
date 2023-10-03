import { authKey } from '@/constants/storageKey'
import { getUserInfo, removeUserInfo } from '@/services/auth.service'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd'
import { useRouter } from 'next/navigation'
const { Header: AntHeader } = Layout

const Header = () => {
  const router = useRouter()

  const logOut = () => {
    removeUserInfo(authKey)
    router.push('/login')
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
  const { role } = getUserInfo() as any
  return (
    <AntHeader className='bg-white'>
      <Row justify='end' align='middle' className='h-full'>
        <p className='mx-1.5 my-0'>{role}</p>
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

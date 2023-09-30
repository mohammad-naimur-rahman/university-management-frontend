'use client'

import { Layout, Menu } from 'antd'
import { useState } from 'react'

import { USER_ROLE } from '@/constants/role'
import { sidebarItems } from '@/constants/sidebarItems'

const { Sider } = Layout

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const role = USER_ROLE.ADMIN

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      width={280}
      className='overflow-auto h-screen sticky left-0 top-0 bottom-0'>
      <div className='text-white text-3xl text-center font-semibold mb-4'>PH-University</div>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={sidebarItems(role)} />
    </Sider>
  )
}

export default SideBar

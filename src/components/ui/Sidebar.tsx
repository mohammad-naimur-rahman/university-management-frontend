'use client'

import { Layout, Menu } from 'antd'
import { useState } from 'react'

import { sidebarItems } from '@/constants/sidebarItems'
import { getUserInfo } from '@/services/auth.service'

const { Sider } = Layout

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  // const role = USER_ROLE.ADMIN;
  const { role } = getUserInfo() as any
  // console.log(role);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      width={280}
      className='overflow-auto h-screen sticky left-0 top-0 bottom-0'>
      <p className='text-white text-3xl text-center font-bold mb-2 py-2.5'>UMS</p>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={sidebarItems(role)} />
    </Sider>
  )
}

export default SideBar

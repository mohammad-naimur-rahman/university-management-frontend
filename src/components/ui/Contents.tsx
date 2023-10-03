'use client'
import { Layout } from 'antd'
import Header from './Header'

const { Content } = Layout

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content className='min-h-screen text-black'>
      <Header />

      <div className='p-2.5'>{children}</div>
    </Content>
  )
}

export default Contents

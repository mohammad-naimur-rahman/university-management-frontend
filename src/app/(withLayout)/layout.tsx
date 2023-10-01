'use client'

import Contents from '@/components/ui/Contents'
import SideBar from '@/components/ui/Sidebar'
import { isLoggedIn } from '@/service/auth.service'
import { Layout } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  const isUserLoggedIn = isLoggedIn()

  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    if (!isUserLoggedIn) {
      push('/login')
    }
    setisLoading(false)
  }, [isUserLoggedIn, push])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  )
}

export default DashboardLayout

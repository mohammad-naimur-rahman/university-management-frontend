'use client'

import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { useDepartmentsQuery } from '@/redux/api/departmentApi'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {}

  const [size, setsize] = useState(10)
  const [page, setpage] = useState(1)
  const [sortBy, setsortBy] = useState('')
  const [sortOrder, setsortOrder] = useState('')

  query['limit'] = size
  query['page'] = page
  query['sortBy'] = sortBy
  query['sortOrder'] = sortOrder

  const { data, isFetching } = useDepartmentsQuery({ ...query })

  const departments = data?.departments
  const meta = data?.meta

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      sorter: true,
    },
    {
      title: 'Action',
      render: (data: any) => {
        return (
          <div className='flex gap-2'>
            <Button type='primary' onClick={() => console.log(data)}>
              <EyeOutlined />
            </Button>
            <Button type='primary' onClick={() => console.log(data)}>
              <EditOutlined />
            </Button>
            <Button type='primary' danger onClick={() => console.log(data)}>
              <DeleteOutlined />
            </Button>
          </div>
        )
      },
    },
  ]

  const onPaginationChange = (page: number, pageSize: number) => {
    setpage(page)
    setsize(pageSize)
  }

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter
    setsortBy(field)
    setsortOrder(order === 'ascend' ? 'asc' : 'desc')
  }

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: 'super_admin',
            link: '/super_admin',
          },
        ]}
      />
      <h1>Department List</h1>
      <Link href='/super_admin/department/create'>
        <Button type='primary'>Create</Button>
      </Link>

      <UMTable
        columns={columns}
        dataSource={departments}
        loading={isFetching}
        pageSize={size}
        total={meta?.total!}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  )
}

export default ManageDepartmentPage

'use client'

import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { Button } from 'antd'
import Link from 'next/link'

const ManageDepartmentPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
    },
    {
      key: '2',
      name: 'John',
      age: 42,
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: 'Action',
      render: (data: any) => {
        return (
          <Button type='primary' danger onClick={() => console.log(data)}>
            X
          </Button>
        )
      },
    },
  ]

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize)
  }

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter
    console.log(order, field)
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
        dataSource={dataSource}
        loading={false}
        pageSize={10}
        total={100}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  )
}

export default ManageDepartmentPage

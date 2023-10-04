'use client'

import ActionBar from '@/components/ui/ActionBar'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb'
import UMTable from '@/components/ui/UMTable'
import { useDeleteDepartmentMutation, useDepartmentsQuery } from '@/redux/api/departmentApi'
import { useDebounce } from '@/redux/hooks'
import { DeleteOutlined, EditOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useState } from 'react'

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {}

  const [searchTerm, setsearchTerm] = useState('')
  const [size, setsize] = useState(10)
  const [page, setpage] = useState(1)
  const [sortBy, setsortBy] = useState('')
  const [sortOrder, setsortOrder] = useState('')

  size ? (query['limit'] = size) : null
  page ? (query['page'] = page) : null
  sortBy ? (query['sortBy'] = sortBy) : null
  sortOrder ? (query['sortOrder'] = sortOrder) : null

  const debouncedValue = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  })

  if (!!debouncedValue) {
    query['searchTerm'] = debouncedValue
  }

  const { data, isFetching } = useDepartmentsQuery({ ...query })
  const [deleteDepartment] = useDeleteDepartmentMutation()

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
      render: (data: any) => data && dayjs(data).format('MMM D, YYYY hh:mm A'),
      sorter: true,
    },
    {
      title: 'Action',
      render: (data: any) => {
        return (
          <div className='flex gap-2'>
            <Link href={`/super_admin/department/edit/${data.id}`}>
              <Button type='primary'>
                <EditOutlined />
              </Button>
            </Link>
            <Button type='primary' danger onClick={() => deleteDepartment(data.id)}>
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

  const resetFilters = () => {
    setsortBy('')
    setsortOrder('')
    setsearchTerm('')
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

      <ActionBar title='Department List'>
        <div className='flex items-center gap-2'>
          <Input
            placeholder='Search...'
            size='large'
            className='max-w-sm'
            onChange={e => setsearchTerm(e.target.value)}
          />

          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button type='primary' onClick={resetFilters}>
              <ReloadOutlined />
            </Button>
          )}
        </div>

        <Link href='/super_admin/department/create'>
          <Button type='primary' size='large'>
            Create Department
          </Button>
        </Link>
      </ActionBar>

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

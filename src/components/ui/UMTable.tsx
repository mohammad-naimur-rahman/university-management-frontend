'use client'

import { Table } from 'antd'

interface TableProps {
  columns: any
  dataSource: any
  loading: boolean
  pageSize?: number
  total: number
  onPaginationChange: (page: number, pageSize: number) => void
  pageSizeOptions?: string[]
  showSizeChanger?: boolean
  onTableChange: (pagination: any, filters: any, sorter: any) => void
  showPagination?: boolean
}

export default function UMTable({
  columns,
  dataSource,
  loading,
  pageSize = 10,
  total,
  onPaginationChange,
  pageSizeOptions = ['5', '10', '20'],
  showSizeChanger = true,
  onTableChange,
  showPagination = true,
}: TableProps) {
  const paginationConfig = showPagination
    ? {
        pageSize,
        total,
        pageSizeOptions,
        showSizeChanger,
        onChange: onPaginationChange,
      }
    : false

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  )
}

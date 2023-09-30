import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

interface UMBreadCrumbProps {
  items: {
    label: string
    link: string
  }[]
}

const UMBreadCrumb = ({ items }: UMBreadCrumbProps) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href='/'>
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map(({ label, link }) => {
      return {
        title: link ? <Link href={link}>{label}</Link> : <span>{label}</span>,
      }
    }),
  ]

  return <Breadcrumb items={breadCrumbItems} />
}

export default UMBreadCrumb

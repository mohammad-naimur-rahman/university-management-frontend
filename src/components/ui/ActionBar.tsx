type ActionBarProps = {
  title?: string
  children?: React.ReactElement | React.ReactNode
}

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div className='space-y-3 pt-3'>
      <h1>{title}</h1>
      <div className='flex justify-between items-center'>{children}</div>
    </div>
  )
}

export default ActionBar

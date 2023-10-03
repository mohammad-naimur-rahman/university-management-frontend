type ActionBarProps = {
  title?: string
  children?: React.ReactElement | React.ReactNode
}

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className='flex'>{children}</div>
    </div>
  )
}

export default ActionBar

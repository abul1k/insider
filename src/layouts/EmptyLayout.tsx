interface IProps {
  children: string | JSX.Element | JSX.Element[]
}

export const EmptyLayout = ({ children }: IProps) => {
  return <>{children}</>
}

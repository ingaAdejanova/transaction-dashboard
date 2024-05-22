import styled from 'styled-components'
import theme from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logout } from '../../redux/actions'
import { Header } from './AppBar'

const StyledHeader = styled(Header)`
  background-color: ${theme.colors.blue};
`

type HeaderSettings = {
  title: string
  action: () => void
}

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const { sme } = useAppSelector((state) => state.sme)
  const { user } = useAppSelector((state) => state.currentUser)

  const headerSettings: HeaderSettings[] = [
    {
      title: 'Logout',
      action: () => dispatch(logout()),
    },
  ]

  return (
    <>
      <StyledHeader leftText={sme.legalName} rightText={user.name} img={user.profileImage} settings={headerSettings} />
      {children}
    </>
  )
}

export default Layout

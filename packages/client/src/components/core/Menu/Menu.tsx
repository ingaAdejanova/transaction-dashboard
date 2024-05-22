import { Menu as MuiMenu, MenuItem } from '@mui/material'
import styled from 'styled-components'

type MenuItem = {
  title: string
  action: () => void
}

type Origin = {
  vertical: 'top' | 'center' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

type Props = {
  anchorEl: HTMLElement | null
  settings: MenuItem[]
  handleClose: () => void
  anchorOrigin?: Origin
  transformOrigin?: Origin
}

const StyledMenuItemText = styled.div`
  text-align: center;
`

export const Menu = ({
  anchorEl,
  settings,
  handleClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
}: Props) => {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      keepMounted
      transformOrigin={transformOrigin}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {settings?.map((setting) => (
        <MenuItem key={setting.title} onClick={setting.action}>
          <StyledMenuItemText>{setting.title}</StyledMenuItemText>
        </MenuItem>
      ))}
    </MuiMenu>
  )
}

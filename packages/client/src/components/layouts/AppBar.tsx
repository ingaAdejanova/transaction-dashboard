import React from 'react'
import styled from 'styled-components'
import { AppBar as MuiAppBar, Toolbar, IconButton, Container } from '@mui/material'

import { Typography } from '../core/Typography'
import { Menu } from '../core/Menu'
import { Avatar } from '../core/Avatar'
import { Tooltip } from '../core/Tooltip'

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`

const Box = styled.div`
  display: flex;
  align-items: center;
`

type Props = {
  leftText: string
  rightText: string
  img: string
  settings: { title: string; action: () => void }[]
  className?: string
}

export const Header = ({ leftText, rightText, img, settings, className }: Props) => {
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <MuiAppBar className={className} position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            {leftText}
          </Typography>
          <Box>
            <Typography variant="body1" noWrap component="div">
              {rightText}
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt={rightText} src={img} />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElUser} settings={settings} handleClose={handleCloseUserMenu} />
          </Box>
        </StyledToolbar>
      </Container>
    </MuiAppBar>
  )
}

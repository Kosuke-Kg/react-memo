import React, { type FC } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import useHeader from './api/useHeader'

const Header: FC = () => {
  const { navigate } = useHeader()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          onClick={() => { navigate('/') } }
        >
          <Typography
            variant="h6"
            component="a"
            sx={{
              display: 'inline-block',
              cursor: 'pointer'
            }}
          >
            個人的 Rect Typescript メモ
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header

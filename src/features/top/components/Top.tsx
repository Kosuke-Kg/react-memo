import React, { type FC } from 'react'
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import useTop from '../api/useTop'

const Top: FC = () => {
  const { navigate } = useTop()
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="MemoList"
      subheader={
        <ListSubheader component="div" id="MemoList">
          React Typescript 個人的メモ
        </ListSubheader>
      }
    >
      <ListItemButton
        onClick={() => {
          navigate('form')
        }}
      >
        <ListItemText primary="React Hook Form" />
      </ListItemButton>
    </List>
  )
}

export default Top

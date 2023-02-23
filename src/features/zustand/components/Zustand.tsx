import React from 'react'
import useZustandTest from '../api/useZustandTest'
import { Button, Typography } from '@mui/material'

const ZustandTest = () => {
  const {count, countUp} = useZustandTest()
  return(
    <>
      <Typography>Zustand : {count}</Typography>
      <Button onClick={() => countUp()}>countUp</Button>
    </>
  )
}

export default  ZustandTest

import useZustandTestReset from '../api/useZustandTestReset'
import { Button, Typography } from '@mui/material'

const ZustandTestReset = () => {
  const {count, reset}=useZustandTestReset()
  return (
    <>
      <Typography>Zustand count : {count}</Typography>
      <Button onClick={() => reset()}>Count Reseet</Button>
    </>

  )
}

export default ZustandTestReset

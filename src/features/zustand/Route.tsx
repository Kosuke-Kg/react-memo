import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import ZustandTest from './components/Zustand'
import ZustandTestReset from './components/ZustandTestReset'


const ZustandRoutes: FC = () => {
  return(
    <Routes>
      <Route path="/" element={<ZustandTest/>}/>
      <Route path="/reset" element={<ZustandTestReset/>}/>
    </Routes>
  )
}

export default  ZustandRoutes

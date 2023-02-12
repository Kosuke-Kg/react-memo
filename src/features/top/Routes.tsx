import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Top from './components/Top'

const TopRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top/>}/>
    </Routes>
  )
}

export default TopRoutes

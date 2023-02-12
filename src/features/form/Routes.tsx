import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Forms from './components/Form'

const FormRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Forms/>}/>
    </Routes>
  )
}

export default FormRoutes

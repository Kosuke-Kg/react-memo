import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form'

const FormRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form/>}/>
    </Routes>
  )
}

export default FormRoutes

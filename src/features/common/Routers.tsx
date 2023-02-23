import React, { type FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopRoute from '../top/Routes'
import FormRoutes from '../form/Routes'
import Header from './header/Header'
import ZustandRoutes from '../zustand/Route'

const Routers: FC = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/*" element={<TopRoute/>} />
        <Route path="/form/*" element={<FormRoutes/>} />
        <Route path="/zustand/*" element={<ZustandRoutes/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers

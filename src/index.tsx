import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './features/common/Routers'
import './features/common/styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
)

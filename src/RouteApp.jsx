import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

const RouteApp = () => {
  return (
    <BrowserRouter basename='/charges' >
     <Routes>
        <Route path="/" element={<App />} />
     </Routes>
    </BrowserRouter>
  )
}

export default RouteApp
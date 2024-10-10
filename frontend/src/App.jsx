import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Foodko from './pages/Foodko'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Foodko/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App

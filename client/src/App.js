import React from 'react'
import {Routes, Route} from 'react-router'
import Landing from './pages/Landing/Landing'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import List from './pages/Todo/List'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/to-do-list" element={<List />} />
    </Routes>
  )
}

export default App
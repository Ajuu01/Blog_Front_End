import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
import About from './pages/About'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>}/>
          <Route path="/edit/:id" element={<EditBlog/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </>
  )
}

export default App

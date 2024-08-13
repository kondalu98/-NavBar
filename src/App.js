import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Final } from './Components/About/Final'
import { Main } from './Components/Demo/Main'
import MainContact from './Components/ContactPages/MainContact'
import { NavBars } from './Components/NavBar/NavBars'
import Project_Final from './Components/Project/Project_Final'
import React from 'react'

export function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBars></NavBars>
    <Routes>
    <Route path='/' element={<Final></Final>}></Route>
    <Route path='/about' element={<Final></Final>}></Route>
    <Route path='/project' element={<Project_Final></Project_Final>}></Route>
    <Route path='/Resource' element={<Final></Final>}></Route>
    <Route path='/contact' element={<MainContact></MainContact>}></Route>
    <Route path='/demo' element={<Main></Main>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}


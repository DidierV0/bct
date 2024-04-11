import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const Index = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        {/* <Route path='/Login' element={<Login/>} />
        <Route path='/Actions' element={<Action/>} />
        <Route path='/detail/:id' element={<Detail/>} /> */}
    </Routes>
  )
}

export default Index
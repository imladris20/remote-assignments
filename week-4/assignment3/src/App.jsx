import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

// App Components
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default App

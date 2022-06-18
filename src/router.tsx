import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

/* digitar rfce */

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* rout tem a propriedade onde passamos o caminho */}
        <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;

// Importando recursos do react-router-dom
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Task from '../views/Task'
import QrCode from '../views/QrCode'

// Criando e exportando a função Routers
export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Criando as rotas e os componentes que correspondem */}
                <Route path="/" element={<Home/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/task/:id" element={<Task/>}/>
                <Route path="/qrcode" element={<QrCode/>}/>
            </Routes>   
        </BrowserRouter>
    )
} 
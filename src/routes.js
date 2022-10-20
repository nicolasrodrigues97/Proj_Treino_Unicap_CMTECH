import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import ClientList from './pages/client-list';
import ClientRegister from './pages/client-register';
import ClientEdit from './pages/client-edit';

export default function Routing(){
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ <Login />} />
                <Route path="/client-list" element={ <ClientList />} />
                <Route path="/client-register" element={ <ClientRegister />} />
                <Route path="/client-edit" element={ <ClientEdit />} />
            </Routes>
        </Router>
    )
}
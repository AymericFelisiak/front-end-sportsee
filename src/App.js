import './style/sass/style.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/user/User.js';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SideBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

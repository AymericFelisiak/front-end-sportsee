import './style/sass/style.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Profile from './pages/profile/Profile';
import Error from './pages/error/Error';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SideBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/user/:id" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

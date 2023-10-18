import './style/sass/style.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { User } from './pages/user/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

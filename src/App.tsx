import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Loginform from './components/Loginform';
import SignForm from './components/SignForm';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="login" element={<Loginform />} />
          <Route path="signup" element={<SignForm />} />

        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;

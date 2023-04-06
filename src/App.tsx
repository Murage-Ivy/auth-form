import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Loginform from './components/Loginform';
import PokemonContainer from './components/PokemonContainer';
import SignForm from './components/SignForm';
import { PokemonContextProvider } from './context/PokemonContext';
import { UserContextProvider } from './context/UserContext';

const App: React.FC = () => {
  
  return (
    <div className="App">
      {/* <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="login" element={<Loginform />} />
          <Route path="signup" element={<SignForm />} />

        </Routes>
      </UserContextProvider> */}
      <PokemonContextProvider>
        <PokemonContainer />
      </PokemonContextProvider>
    </div>
  );
}

export default App;

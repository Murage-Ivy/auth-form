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
      <Routes>
        <Route path="/" element={<UserContextProvider><Loginform /></UserContextProvider>} />
        <Route path="/signup" element={<UserContextProvider><SignForm /></UserContextProvider>} />
        <Route path="/pokemon" element={<PokemonContextProvider><PokemonContainer /></PokemonContextProvider>} />
      </Routes>
    </div>
  );
}

export default App;

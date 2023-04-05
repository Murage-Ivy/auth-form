import React from 'react';

import './App.css';
import Loginform from './components/Loginform';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Loginform />
      </UserContextProvider>

    </div>
  );
}

export default App;

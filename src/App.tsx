import React from 'react';

import './App.css';
import Loginform from './components/Loginform';
import SignForm from './components/SignForm';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <Loginform />

      </UserContextProvider> */}
      <SignForm />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Demoform from './component/Demoform';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Formlogin from './component/Formlogin';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ManageUsers from './component/ManageUsers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ManageUsers />
        <Formlogin />
      </header>
    </div>
  );
}

export default App;

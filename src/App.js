
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="CV Application"></Header>
        {/* <Navigation></Navigation> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

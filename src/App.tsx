import React from 'react';
import logo from './logo.svg';
import './App.css';
import State from './components/State';
import Expenses from './components/Expenses';

function App() {
  let username: string = "Ilan Yagutilov"
  return (
    <div className="App">
      <div className="imgPlusTextContainer">
        {/* <img src="cashBackground.jpg" alt="background of cash for the bank" /> */}
      </div>
      {<h5 className='welcomeMessage bg-success-subtle' style={{ fontWeight: '100' }}>Welcome back <span style={{ fontWeight: '500' }}>{username}</span></h5>}
      <State />
      <Expenses />
    </div>
  );
}

export default App;

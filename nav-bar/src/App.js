import React from 'react';
import './App.css';
import { CardContainer } from './constants/cartes';
import MainPage from './container/mainpage';

function App() {
  return (
    <div>
      <MainPage/>
      <CardContainer/>
    </div>
  );
}

export default App;

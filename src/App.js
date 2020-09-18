import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { StepTracker } from './Components/StepTracker';

const App = () => {
  return (
    <div className="App">
      <StepTracker />
    </div>
  )
}

export default App;

// src/App.tsx
import React, { useEffect } from 'react';
import './styles.css';
import FizzBuzzForm from "./components/FizzBuzzForm";

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Fizzbuzz';
  }, []);
  return (
    <div className="App">
      <h1>FizzBuzz Sequence Generator</h1>
      <FizzBuzzForm />
    </div>
  );
};

export default App;

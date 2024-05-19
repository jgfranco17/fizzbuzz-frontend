// src/components/FizzBuzzForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

export const LOCAL_API_URL = 'http://localhost:8080';
export const PROD_API_URL = 'https://fizzbuzz-fastapi.onrender.com';

interface FizzBuzzSequence {
  fizz: number;
  buzz: number;
  fizzbuzz: number;
  digits: number;
  sequence: string[];
}

const FizzBuzzForm: React.FC = () => {
  const [number, setNumber] = useState<number | ''>('');
  const [result, setResult] = useState<FizzBuzzSequence | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('Number input changed:', e.target.value);
    setNumber(e.target.value === '' ? '' : parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with number:', number);
    try {
      const response = await axios.get<FizzBuzzSequence>(`${PROD_API_URL}/v0/fizzbuzz`, {
        params: { number },
      });
      console.log('API response:', response.data);
      setResult(response.data);
      setError(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error response:', err.response);
        setError(err.response?.data?.detail ?? 'Error fetching data');
      } else {
        console.error('Unknown error:', err);
        setError('An unknown error occurred');
      }
      setResult(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <div className="error">Error: {error}</div>}
      {result && (
        <div className="result">
          <h3>FizzBuzz Sequence:</h3>
          <p>{result.sequence.join(', ')}</p>
          <h3>Counts:</h3>
          <p>Fizz: {result.fizz}</p>
          <p>Buzz: {result.buzz}</p>
          <p>FizzBuzz: {result.fizzbuzz}</p>
        </div>
      )}
    </div>
  );
};

export default FizzBuzzForm;
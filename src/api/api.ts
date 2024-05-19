// src/api/api.ts
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

export const getFizzBuzzSequence = async (number: number): Promise<FizzBuzzSequence> => {
  const response = await axios.get<FizzBuzzSequence>(`${PROD_API_URL}/v0/fizzbuzz`, {
    params: { number },
  });
  return response.data;
};

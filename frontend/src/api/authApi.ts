import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Change this to your backend URL

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // { token, user }
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data; // { message: 'User registered successfully!' }
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

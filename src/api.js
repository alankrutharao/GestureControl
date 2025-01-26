import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const signUp = (userData) => axios.post(`${BASE_URL}/signup`, userData);

// Add these functions for gesture control
export const startGestureRecognition = () => axios.post(`${BASE_URL}/start-gesture-recognition`);
export const stopGestureRecognition = () => axios.post(`${BASE_URL}/stop-gesture-recognition`);

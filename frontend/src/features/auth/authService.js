import axios from 'axios';

const API_URL_REGISTER = '/api/users';
const API_URL_LOGIN = '/api/users/login';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  login,
  logout,
};

export default authService;

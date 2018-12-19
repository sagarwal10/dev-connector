import axios from 'axios';

const setAuthToken = token => {
  if (token) { 
    // Apply to every request (login)
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete Auth header (logout)
    delete axios.defaults.headers.common['Authorization'];
  }
} 

export default setAuthToken;

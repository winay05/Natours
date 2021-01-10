/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  // console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }

    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
  //
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v1/users/logout'
    });

    if (res.data.status === 'success') {
      location.reload(true); //imp to mark as true to reload from server and not just browser cache
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again');
  }
};

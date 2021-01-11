/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  // console.log(email, password);
  if (password !== passwordConfirm)
    return showAlert('error', "Passwords don't match!");
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Account created successfully!');
      window.setTimeout(() => {
        location.assign('/me'); //after signing up, go to my profile page
      }, 2000);
    }

    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
  //
};

/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

//type is either 'password' or 'data'
export const updateUserSetings = async (data, type) => {
  try {
    const endPoint = type === 'password' ? 'updateMyPassword' : 'updateMe';
    const res = await axios({
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/v1/users/${endPoint}`,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
      location.reload(true); //imp to mark as true to reload from server and not just browser cache
    }

    console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

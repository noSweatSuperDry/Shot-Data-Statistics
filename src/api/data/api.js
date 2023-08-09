// src/api.js

import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './api/apiDataSlice';

const apiUrl = 'https://dummyjson.com/users';

export const fetchApiData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());

    const response = await axios.get(apiUrl);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

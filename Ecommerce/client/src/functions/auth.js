import axios from 'axios';

export const createorUpdateUser = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API,
    {},
    { headers: { authtoken: authtoken } }
  );
};

export const currentAdmin = async (authtoken) => {
  const URL1 = 'http://localhost:8000/api/admin';
  return await axios.post(URL1, {}, { headers: { authtoken: authtoken } });
};

export const currentUser = async (authtoken) => {
  const URL = 'http://localhost:8000/api/current-user';
  return await axios.post(URL, {}, { headers: { authtoken: authtoken } });
};

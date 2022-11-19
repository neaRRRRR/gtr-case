import axios from 'axios';

let API_URL = 'http://localhost:3333/';
let PROD_API_URL = 'https://ukaan.io/'

const sendRequest = {
    get: (url, data) => handleRequest(url, data, 'GET'),
};

export default sendRequest;

const request = axios.create({
    baseURL: API_URL,
    withCredentials: false,
  });

function handleRequest(url, data, method,) {

  return new Promise((resolve, reject) => {
    request
      .request({
        method,
        url,
        data,
      })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => reject(err));
  });
}



import axios from './axios.js';

function postHouse(house) {
  return axios
    .post(`${axios.defaults.baseUrl}/realestate`, house)
    .then(res => res.data);
}

function putHouse(house) {
  return axios
    .put(`${axios.defaults.baseUrl}/realestate/${house._id}`, house)
    .then(res => res.data);
}

function getHouse(id) {
  return axios
    .get(`${axios.defaults.baseUrl}/realestate/${id}`)
    .then(res => res.data);
}

function getHouses() {
  return axios
    .get(`${axios.defaults.baseUrl}/realestate`)
    .then(res => res.data);
}

function deleteHouse(id) {
  return axios
    .delete(`${axios.defaults.baseUrl}/realestate/${id}`)
    .then(res => res.data);
}

export { postHouse, putHouse, getHouse, getHouses, deleteHouse };

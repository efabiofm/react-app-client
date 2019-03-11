import axios from '../api/axios';

export function getHouses(houses) {
  return {
    type: 'GET_HOUSES',
    payload: { houses }
  }
}

export function removeHouse(id) {
  return {
    type: 'REMOVE_HOUSE',
    payload: { id }
  }
}

export function addHouse(house) {
  return {
    type: 'ADD_HOUSE',
    payload: { house }
  }
}

export function updateHouse(house) {
  return {
    type: 'UPDATE_HOUSE',
    payload: { house }
  };
}

export function toggleSendingRequest() {
  return {
    type: 'SENDING_REQUEST'
  };
}

export function getHousesDB() {
  return function(dispatch) {
    dispatch(toggleSendingRequest());
    return axios
      .get(`${axios.defaults.baseUrl}/realestate`)
      .then(res => dispatch(getHouses(res.data)))
      .then(dispatch(toggleSendingRequest()));
  }
}

export function deleteHouseDB(id) {
  return function(dispatch) {
    dispatch(toggleSendingRequest());
    return axios
      .delete(`${axios.defaults.baseUrl}/realestate/${id}`)
      .then(dispatch(removeHouse(id)))
      .then(dispatch(toggleSendingRequest()));
  }
}

export function postHouseDB(house) {
  return function(dispatch) {
    dispatch(toggleSendingRequest());
    return axios
      .post(`${axios.defaults.baseUrl}/realestate`, house)
      .then(res => dispatch(addHouse(res.data)))
      .then(dispatch(toggleSendingRequest()));
  }
}

export function putHouseDB(house) {
  return function(dispatch) {
    dispatch(toggleSendingRequest());
    return axios
      .put(`${axios.defaults.baseUrl}/realestate/${house._id}`, house)
      .then(dispatch(updateHouse(house)))
      .then(dispatch(toggleSendingRequest()));
  }
}
import cloneDeep from 'lodash/cloneDeep';
import reject from 'lodash/reject';
import findIndex from 'lodash/findIndex';

function housesReducer(state, action) {
  switch(action.type) {
    case 'SENDING_REQUEST':
      return {
        ...state,
        sendingRequest: !state.sendingRequest
      };
    case 'GET_HOUSES':
      return {
        ...state,
        houses: action.payload.houses
      };
    case 'REMOVE_HOUSE':
      let housesMinusOne = cloneDeep(state.houses);
      housesMinusOne = reject(housesMinusOne, { _id: action.payload.id });
      return {
        ...state,
        houses: housesMinusOne
      };
    case 'ADD_HOUSE':
      const housesPlusOne = cloneDeep(state.houses);
      housesPlusOne.push(action.payload.house);
      return {
        ...state,
        houses: housesPlusOne
      };
    case 'UPDATE_HOUSE':
      let housesUpdated = cloneDeep(state.houses);
      const i = findIndex(housesUpdated, { _id: action.payload.house._id });
      housesUpdated[i] = action.payload.house;
      return {
        ...state,
        houses: housesUpdated
      };
    default:
      return state;
  }
}

export default housesReducer;
import React from 'react';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedHouseList, { HouseList } from '../components/HouseList';
import HouseItem from '../components/HouseItem';

it('tests api call', async () => {
  const initialState = {
    houses: [
      {
        _id: 'id',
        title: 'test',
        location: 'test',
        type: 'test',
        price: 0,
        size: 0
      }
    ]
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const wrapper = mount(<Provider store={store}><ConnectedHouseList/></Provider>);
  expect(wrapper.find(ConnectedHouseList).length).toEqual(1); // mounted correctly
  expect(wrapper.find(HouseList).prop('houses')).toEqual(initialState.houses); // props passed correctly
  expect(wrapper.find(HouseItem).find('.h5').text()).toEqual('test'); // items rendered correctly
});

import React from 'react';
import mockAxios from 'axios'; // overrides the actual axios with the mock inside __mocks__
import { shallow } from 'enzyme';
import HouseList from '../components/HouseList';
import HouseItem from '../components/HouseItem';

it('tests api call', async () => {
  const mockResponse = Promise.resolve({
    data: [
      {
        _id: 'id',
        title: 'test',
        location: 'test',
        type: 'test',
        price: 0,
        size: 0
      }
    ]
  });
  mockAxios.get.mockResolvedValue(mockResponse); // overrides respose with one specific for this test
  const list = shallow(<HouseList/>);
  const instance = list.instance();
  await instance.componentDidMount();
  expect(list.state().houses).toEqual([
    {
      _id: 'id',
      title: 'test',
      location: 'test',
      type: 'test',
      price: 0,
      size: 0
    }
  ]);
  // gets child component and checks if user can see the text
  const item = list.find(HouseItem).dive().find('#id');
  expect(item.text()).toEqual('test');
});

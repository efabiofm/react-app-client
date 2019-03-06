import React from "react";
import { shallow } from 'enzyme';
import HouseItem from '../components/HouseItem';

it('renders the item passed by props', () => {
  const value = {
    _id: 'id',
    title: 'test',
    location: 'test',
    type: 'test',
    price: 0,
    size: 0
  }
  const item = shallow(<HouseItem value={value}/>);
  const title = item.find('#id').text();
  expect(title).toEqual('test');
});
import React from "react";
import { shallow } from 'enzyme';
import noop from 'lodash/noop';
import HouseForm from '../components/HouseForm';

it('opens the house form', () => {
  const form = shallow(<HouseForm addHouse={noop}/>);
  // const instance = form.instance(); // allows to access component functions
  const btn = form.find('#btn-modal-opener');
  btn.simulate('click');
  expect(form.state().show).toBeTruthy();
});
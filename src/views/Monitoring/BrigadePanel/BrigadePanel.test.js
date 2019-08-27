import React from './node_modules/react';
import Component from '.';
import { mount } from './node_modules/enzyme'

it('renders without crashing', () => {
  mount(<Component />);
});

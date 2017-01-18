import React from 'react';
import { shallow } from 'enzyme';
import NotePage from '../NotePage';

it('renders without crashing', () => {
  shallow(<NotePage />);
});
import React from 'react';
import { shallow } from 'enzyme';
import NotesPage from '../NotesPage';

it('renders without crashing', () => {
  shallow(<NotesPage />);
});
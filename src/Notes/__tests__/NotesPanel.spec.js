import React from 'react';
import { shallow } from 'enzyme';
import { NotesPanel } from '../NotesPanel';

it('renders without crashing', () => {
  shallow(<NotesPanel />);
});

import React from 'react';
import { shallow } from 'enzyme';
import JobTile from '../components/JobTile';

it('renders without crashing', () => {
  shallow(<JobTile />);
});

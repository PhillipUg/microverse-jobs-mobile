import React from 'react';
import { shallow } from 'enzyme';
import JobList from '../components/JobList';

it('renders without crashing', () => {
  shallow(<JobList />);
});

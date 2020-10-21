import React from 'react';
import { shallow } from 'enzyme';
import JobDetails from '../components/JobDetails';

it('renders without crashing', () => {
  shallow(<JobDetails />);
});

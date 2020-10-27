import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../components/auth/SignUp';

it('renders without crashing', () => {
  shallow(<SignUp />);
});

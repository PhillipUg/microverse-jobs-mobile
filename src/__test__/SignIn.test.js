import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../components/auth/SignIn';

it('renders without crashing', () => {
  shallow(<SignIn />);
});

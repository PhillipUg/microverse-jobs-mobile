import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../components/Favorites';

it('renders without crashing', () => {
  shallow(<Favorites />);
});

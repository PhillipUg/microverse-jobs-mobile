import React from 'react';
import { shallow } from 'enzyme';
import SlideMenu from '../components/SlideMenu';

it('renders without crashing', () => {
  shallow(<SlideMenu />);
});

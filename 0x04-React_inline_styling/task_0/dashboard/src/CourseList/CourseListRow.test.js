// CourseListRow.test.js

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="test" />);
  });

  it('renders one cell with colspan=2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(2);
  });

  it('renders two td elements within a tr when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" />);
    const td = wrapper.find('td');
    expect(td.length).toBe(2);
  });

  it('applies correct styles based on isHeader prop', () => {
    const wrapperHeader = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const wrapperRow = shallow(<CourseListRow isHeader={false} textFirstCell="test" />);
    
    expect(wrapperHeader.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
    expect(wrapperRow.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});

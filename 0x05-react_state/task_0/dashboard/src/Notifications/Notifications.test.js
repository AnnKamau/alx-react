import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawerSpy = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerSpy} />);
    wrapper.find('button').first().simulate('click');
    expect(handleDisplayDrawerSpy).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawerSpy = jest.fn();
    const wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawerSpy} />);
    wrapper.find('button').last().simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalled();
  });
});

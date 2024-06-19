import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('calls logOut and shows alert when Control + h is pressed', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');

    alertSpy.mockRestore();
  });
});

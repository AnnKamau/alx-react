// App.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('logOut function and alert are called when Ctrl+H is pressed', () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  const { unmount } = render(<App logOut={logOutMock} />);

  fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

  expect(alertMock).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalled();

  alertMock.mockRestore();
  unmount();
});

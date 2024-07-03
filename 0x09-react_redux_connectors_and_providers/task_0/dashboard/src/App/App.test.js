// App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App Component', () => {
  // Your existing tests (if any) go here

  describe('mapStateToProps', () => {
    it('should return the correct props object', () => {
      const state = fromJS({
        uiReducer: {
          isUserLoggedIn: true,
        },
      });

      const expectedProps = {
        isLoggedIn: true,
      };

      expect(mapStateToProps(state)).toEqual(expectedProps);
    });
  });
});

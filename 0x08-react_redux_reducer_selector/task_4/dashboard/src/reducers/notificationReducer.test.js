// notificationReducer.test.js
import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {}).toJS()).toEqual({
      notifications: {},
      filter: 'DEFAULT'
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' }
      ]
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
        '2': { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      }
    };

    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        '1': Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
        '2': Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
        '3': Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' })
      })
    });

    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: {
        '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
        '2': { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      }
    };

    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        '1': Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
        '2': Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
        '3': Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' })
      })
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };

    const expectedState = {
      filter: 'URGENT',
      notifications: {
        '1': { id: 1, isRead: false, type: 'default', value: 'New course available' },
        '2': { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      }
    };

    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState);
  });
});

// notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      list: [
        { id: 1, isRead: true, message: 'Message 1' },
        { id: 2, isRead: false, message: 'Message 2' },
        { id: 3, isRead: false, message: 'Message 3' }
      ]
    }
  };

  it('should return the filter type', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual([
      { id: 1, isRead: true, message: 'Message 1' },
      { id: 2, isRead: false, message: 'Message 2' },
      { id: 3, isRead: false, message: 'Message 3' }
    ]);
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toEqual([
      { id: 2, isRead: false, message: 'Message 2' },
      { id: 3, isRead: false, message: 'Message 3' }
    ]);
  });
});

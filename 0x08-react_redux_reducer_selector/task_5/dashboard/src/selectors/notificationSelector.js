// notificationSelector.js

import { createSelector } from 'reselect';

// Selector for the filter type
export const filterTypeSelected = (state) => state.notifications.filter;

// Selector for the notifications
export const getNotifications = createSelector(
  [(state) => state.notifications],
  (notifications) => notifications.list
);

// Selector for the unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.isRead)
);

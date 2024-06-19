// notifications.js
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const userNotifications = [];
  for (let key in notifications) {
    if (notifications[key].author === userId) {
      userNotifications.push(notifications[key]);
    }
  }
  return userNotifications;
}

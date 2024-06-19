// notifications.js
import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../../notifications.json';

// Define a user entity
const user = new schema.Entity("users");

// Define a message entity
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});

// Define a notification entity
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notification]);

// Export normalized data and other entities
export { normalizedData, user, message, notification };
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId);
}

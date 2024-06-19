// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  notifications: {
    // Your notifications panel styles
  },
});

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
    </div>
  );
}

export default Notifications;

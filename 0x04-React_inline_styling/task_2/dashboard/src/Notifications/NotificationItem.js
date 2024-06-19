import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, value, html }) => {
  const liStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

  return (
    <li className={css(liStyle)} dangerouslySetInnerHTML={html ? { __html: html } : undefined}>
      {!html && value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

export default NotificationItem;

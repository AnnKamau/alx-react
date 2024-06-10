import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  // ... other methods and render

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <div>
        <button onClick={handleDisplayDrawer}>Your notifications</button>
        {displayDrawer && (
          <div>
            {/* Notification panel */}
            <button onClick={handleHideDrawer}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

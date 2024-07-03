import React, { Component } from 'react';
import { connect } from 'react-redux';
// import other necessary components and actions

class App extends Component {
  // constructor and other lifecycle methods if necessary

  render() {
    const { displayDrawer } = this.props;

    return (
      <div>
        {displayDrawer ? (
          <NotificationDrawer />
        ) : null}
        {/* Other components */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayDrawer: state.isNotificationDrawerVisible,
    // other state mappings if there are any
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(App);

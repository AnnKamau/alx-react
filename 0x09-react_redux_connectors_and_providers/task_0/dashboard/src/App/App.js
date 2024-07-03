// App.js

import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="App">
        {isLoggedIn ? <p>Welcome, you are logged in!</p> : <p>Please log in.</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);

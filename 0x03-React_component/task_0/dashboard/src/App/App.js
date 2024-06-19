import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Notifications from './Notifications';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;

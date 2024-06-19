// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  margin: {
    margin: '20px', // Adjust as needed
  },
});

function Login() {
  return (
    <div className={css(styles.margin)}>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

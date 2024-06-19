// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  header: {
    // Your header styles
  },
  logo: {
    // Your logo styles
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src="logo.png" alt="logo" className={css(styles.logo)} />
      <h1>Header</h1>
    </header>
  );
}

export default Header;

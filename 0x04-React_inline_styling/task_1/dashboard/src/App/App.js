// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySection from '../BodySection/BodySection';
import Footer from '../Footer/Footer';

const styles = StyleSheet.create({
  body: {
    // Your body styles
  },
  footer: {
    // Your footer styles
  },
});

function App() {
  return (
    <div>
      <div className={css(styles.body)}>
        <BodySection />
      </div>
      <footer className={css(styles.footer)}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

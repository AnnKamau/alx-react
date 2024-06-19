// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  margin: {
    marginBottom: '20px', // Adjust as needed
  },
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.margin)}>
      <BodySection {...props} />
    </div>
  );
}

export default BodySectionWithMarginBottom;

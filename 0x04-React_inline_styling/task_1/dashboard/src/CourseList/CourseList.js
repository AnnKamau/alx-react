// Import Aphrodite
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  list: {
    // Your list styles
  },
});

function CourseList() {
  return (
    <table className={css(styles.list)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
      </tbody>
    </table>
  );
}

export default CourseList;

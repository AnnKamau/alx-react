import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  const thStyle = isHeader ? styles.headerTh : styles.defaultTh;

  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(thStyle)}>{textFirstCell}</th>
            <th className={css(thStyle)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(thStyle)} colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultTh: {
    fontWeight: 'normal',
    textAlign: 'left',
  },
  headerTh: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CourseListRow;

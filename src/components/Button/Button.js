import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ imageUpload }) => (
  <button onClick={imageUpload} className={styles.Button} type="button">
    Load more
  </button>
);

Button.propTypes = {
  imageUpload: PropTypes.func.isRequired,
};
export default Button;

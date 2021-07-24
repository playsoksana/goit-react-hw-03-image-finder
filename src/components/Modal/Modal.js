import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ children, closeModal }) => (
  <div onClick={closeModal} className={styles.Overlay}>
    <div className={styles.Modal}>{children}</div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default Modal;

import PropTypes from 'prop-types';
import styles from './pin-input.module.scss';

export const PinInput = ({ count = 4 }) => {
  return (
    <div className={styles['pin-input']}>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={styles['pin-input__cell']}
          tabIndex={0}
          aria-label={`Цифра ${index + 1}`}
        ></div>
      ))}
    </div>
  );
};

PinInput.propTypes = {
  count: PropTypes.number.isRequired,
};

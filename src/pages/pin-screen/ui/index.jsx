import { PinInput } from '../../../features/pin-input';
import styles from './pin-screen.module.scss';

export const PinScreen = () => {
  return (
    <div className={styles['pin-screen']}>
      <h2 className={styles['pin-screen__title']}>Введите ПИН</h2>
      <div className={styles['pin-screen__input']}>
        <PinInput count={4} />
      </div>
      <p className={styles['pin-screen__hint']}>Введите ПИН</p>
    </div>
  );
};

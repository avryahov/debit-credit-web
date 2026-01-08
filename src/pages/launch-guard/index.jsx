import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAMES } from '../../app/configs/routes';
import { Launcher } from '../../features/launcher';
import styles from './launch-guard.module.scss';

export const LaunchGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES_NAMES.PinScreen, { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles['launch-guard']}>
      <Launcher />
    </div>
  );
};

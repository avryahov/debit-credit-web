import { ROUTES_NAMES } from '../../app/configs/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Launcher } from '../../features/launcher';

export const LaunchGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES_NAMES.PinScreen, { replace: true });
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <Launcher />;
};

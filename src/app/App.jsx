import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Launcher } from '../features/launcher';
import './App.css';

function App() {
  const [showLauncher, setShowLauncher] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLauncher(false);
      setTimeout(() => {
        navigate('/pin', { replace: true });
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className="App">{showLauncher ? <Launcher /> : <Outlet />}</div>;
}

export default App;

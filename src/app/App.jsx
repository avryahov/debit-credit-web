import { useEffect, useState } from 'react';
import { Launcher } from '../features/launcher';
import { PinScreen } from '../pages/pin-screen';
import './App.css';

function App() {
  const [showLauncher, setShowLauncher] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLauncher(false);
    }, 1500); // 1.5 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">{showLauncher ? <Launcher /> : <PinScreen />}</div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Launcher } from '../features/launcher';
import { PinScreen } from '../pages/pin-screen';
import './App.css';

function App() {
  const [showLauncher, setShowLauncher] = useState(true);
  const [showPinScreen, setShowPinScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLauncher(false);
      // Начинаем показывать PIN-экран через 0.5 сек после скрытия лаунчера
      setTimeout(() => setShowPinScreen(true), 500);
    }, 1500); // 1.5 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showLauncher && <Launcher />}
      {showPinScreen && <PinScreen />}
    </div>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Launcher } from '../features/launcher';
import { PinScreen } from '../pages/pin-screen';
import App from './App';

export const ROUTES_NAMES = {
  Root: '/',
  PinScreen: '/pin',
};

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES_NAMES.Root} element={<App />}>
        <Route index element={<Launcher />} />
        <Route path={ROUTES_NAMES.PinScreen} element={<PinScreen />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES_NAMES.Root} />} />
    </Routes>
  </BrowserRouter>
);

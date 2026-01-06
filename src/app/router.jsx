import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LaunchGuard } from '../pages/launch-guard';
import { MainLayout } from '../pages/main-layout';
import { PinScreen } from '../pages/pin-screen';
import App from './App';
import { ROUTES_NAMES } from './configs/routes';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* Перенаправление на /launch */}
      <Route
        path={ROUTES_NAMES.Root}
        element={<Navigate to={ROUTES_NAMES.Launch} replace />}
      />

      {/* Основные страницы */}
      <Route path={ROUTES_NAMES.Launch} element={<LaunchGuard />} />
      <Route path={ROUTES_NAMES.PinScreen} element={<PinScreen />} />
      <Route path={ROUTES_NAMES.MainLayout} element={<App />}>
        <Route index element={<MainLayout />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to={ROUTES_NAMES.Launch} replace />} />
    </Routes>
  </BrowserRouter>
);

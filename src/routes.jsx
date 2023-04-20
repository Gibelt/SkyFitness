import { Routes, Route } from 'react-router-dom';

import PathProtector from 'routes/pathProtector';

import Exercise from 'pages/exercise';
import Main from 'pages/main';
import LoginPage from 'pages/loginPage';
import Profile from 'pages/profile';
import Description from 'pages/description';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/description/*" element={<Description />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/exercise" element={<Exercise />} />

      <Route
        path={ProtectionEnable ? '/:id/*' : '/mock/*'}
        element={<ProtectedAppRoutes />}
      />
    </Routes>
  );
}

// Чтобы отключить защиту на введение в адресную строку установите ProtectionEnable = false
// Или перенесите роут AppRoutes() - за пределы PathProtector
const ProtectionEnable = true;
const ProtectedAppRoutes = () => (
  <PathProtector enable={ProtectionEnable} redirectPath="/">
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="exercise" element={<Exercise />} />
    </Routes>
  </PathProtector>
);

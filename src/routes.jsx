import { Routes, Route } from 'react-router-dom';
import Exercise from './pages/exercise';
import Main from './pages/main/index';
import LoginPage from './pages/loginPage';
import Profile from './pages/profile';
import WorkoutVideoPage from './pages/workoutVideo/workoutVideoPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element='Registration' />
      <Route path="/description" element={<WorkoutVideoPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  );
}

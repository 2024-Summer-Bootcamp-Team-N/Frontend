import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AptPage from './pages/AptPage';
import OfficePage from './pages/OfficePage';
import HousePage from './pages/HousePage';
import RoomPage from './pages/RoomPage';
import StoragePage from './pages/StoragePage';
import ConsultingPage from './pages/ConsultingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/apt" element={<AptPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/house" element={<HousePage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/storage" element={<StoragePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MapProvider } from './components/MapContext'; // MapContext의 경로를 설정합니다.
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AptPage from './pages/AptPage';
import OfficePage from './pages/OfficePage';
import HousePage from './pages/HousePage';
import RoomPage from './pages/RoomPage';
import StoragePage from './pages/StoragePage';
import SignupPage from './pages/SignupPage';
import ConsultingPage from './pages/ConsultingPage';
import ContractPage from './pages/ContractPage';
import InputPage from './pages/InputPage';

function App() {
  return (
    <BrowserRouter>
      <MapProvider>
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
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/input" element={<InputPage />} />
        </Routes>
      </MapProvider>
    </BrowserRouter>
  );
}

export default App;

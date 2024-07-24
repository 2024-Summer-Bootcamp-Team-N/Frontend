import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MapProvider } from './components/MapContext';
import { RentProvider } from './components/RentContext';
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
        <RentProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/apt" element={<AptPage />} />
            <Route path="/office" element={<OfficePage />} />
            <Route path="/house" element={<HousePage />} />
            <Route path="/onetwo" element={<RoomPage />} />
            <Route path="/storage" element={<StoragePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/contract" element={<ContractPage />} />
            <Route path="/input" element={<InputPage />} />
          </Routes>
        </RentProvider>
      </MapProvider>
    </BrowserRouter>
  );
}

export default App;

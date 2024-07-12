import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import ConsultingPage from './pages/ConsultingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

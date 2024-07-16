import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import StoragePage from './pages/StoragePage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/storage" element={<StoragePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

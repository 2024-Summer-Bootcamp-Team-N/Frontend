import React, { createContext, useContext, useState, useEffect } from 'react';

interface MapContextProps {
  latitude: number;
  longitude: number;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
  setCoordinates: (latitude: number, longitude: number) => void; // 새로운 함수 추가
}

const MapContext = createContext<MapContextProps>({
  latitude: 37.5665,
  longitude: 126.978,
  setLatitude: () => {},
  setLongitude: () => {},
  setCoordinates: () => {}, // 기본값 추가
});

export const useMap = () => useContext(MapContext);

export const MapProvider: React.FC = ({ children }) => {
  const [latitude, setLatitude] = useState<number>(() => {
    const savedLatitude = localStorage.getItem('latitude');
    return savedLatitude ? parseFloat(savedLatitude) : 37.5665;
  });
  const [longitude, setLongitude] = useState<number>(() => {
    const savedLongitude = localStorage.getItem('longitude');
    return savedLongitude ? parseFloat(savedLongitude) : 126.978;
  });

  useEffect(() => {
    localStorage.setItem('latitude', latitude.toString());
  }, [latitude]);

  useEffect(() => {
    localStorage.setItem('longitude', longitude.toString());
  }, [longitude]);

  const setCoordinates = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <MapContext.Provider value={{ latitude, longitude, setLatitude, setLongitude, setCoordinates }}>
      {children}
    </MapContext.Provider>
  );
};

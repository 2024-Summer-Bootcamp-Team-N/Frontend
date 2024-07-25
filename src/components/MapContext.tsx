// MapContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface MapContextProps {
  latitude: number;
  longitude: number;
  street: string;
  newRoomInfoCount: number;
  location: string;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
  setStreets: (street: string) => void;
  setNewRoomInfoCounts: (count: number) => void;
  setCoordinates: (latitude: number, longitude: number) => void;
  setLocation: (location: string) => void;
}

const MapContext = createContext<MapContextProps>({
  latitude: 0,
  longitude: 0,
  street: '',
  newRoomInfoCount: 0,
  location: '',
  setLatitude: () => {},
  setLongitude: () => {},
  setStreets: () => {},
  setNewRoomInfoCounts: () => {},
  setCoordinates: () => {},
  setLocation: () => {},
});

export const useMap = () => useContext(MapContext);

export const MapProvider: React.FC = ({ children }) => {
  const [latitude, setLatitude] = useState<number>(() => {
    const savedLatitude = localStorage.getItem('OGlatitude');
    return savedLatitude ? parseFloat(savedLatitude) : 0;
  });
  const [longitude, setLongitude] = useState<number>(() => {
    const savedLongitude = localStorage.getItem('longitude');
    return savedLongitude ? parseFloat(savedLongitude) : 0;
  });
  const [street, setStreet] = useState<string>('');
  const [newRoomInfoCount, setNewRoomInfoCount] = useState<number>(0);
  const [location, setLocation] = useState<string>('');

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

  const setStreets = (street: string) => {
    setStreet(street);
  };

  const setNewRoomInfoCounts = (count: number) => {
    setNewRoomInfoCount(count);
  };

  return (
    <MapContext.Provider
      value={{
        latitude,
        longitude,
        street,
        newRoomInfoCount,
        location,
        setLatitude,
        setLongitude,
        setStreets,
        setNewRoomInfoCounts,
        setCoordinates,
        setLocation,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

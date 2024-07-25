import React, { useEffect } from 'react';

interface MapMarkerProps {
  latitude: number;
  longitude: number;
  map: any; // Kakao Map 객체
}

const MapMarker: React.FC<MapMarkerProps> = ({ latitude, longitude, map }) => {
  useEffect(() => {
    if (map && window.kakao && window.kakao.maps) {
      const position = new window.kakao.maps.LatLng(latitude, longitude);

      new window.kakao.maps.Marker({
        position: position,
        map: map,
      });
    }
  }, [latitude, longitude, map]);

  return null;
};

export default MapMarker;

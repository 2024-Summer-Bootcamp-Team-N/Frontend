import React, { useEffect, useState } from 'react';
import MapPlus from '../assets/img/MapPlus.svg';
import MapMinus from '../assets/img/MapMinus.svg';
import Sidebar from './Sidebar';
import { useMap } from './MapContext';
import MapMarker from './MapMarker';

const Map: React.FC = () => {
  const { latitude, longitude, newRoomInfoCount, location, setCoordinates } = useMap();
  const [map, setMap] = useState<any>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const savedStreet = localStorage.getItem('OGstreet');
  const savedLatitude = localStorage.getItem('OGlatitude');
  const savedLongitude = localStorage.getItem('OGlongitude');
  useEffect(() => {
    const savedLatitude = localStorage.getItem('OGlatitude');
    const savedLongitude = localStorage.getItem('OGlongitude');

    const initialLatitude = savedLatitude ? parseFloat(savedLatitude) : latitude;
    const initialLongitude = savedLongitude ? parseFloat(savedLongitude) : longitude;

    console.log('Initial OGLatitude from localStorage:', initialLatitude);
    console.log('Initial OGLongitude from localStorage:', initialLongitude);

    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(kakaoMapScript);
    //useeffect로 묶을 것
    const onLoadKakaoAPI = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map') as HTMLElement;
          const options = {
            center: new window.kakao.maps.LatLng(initialLatitude, initialLongitude),
            level: 3,
          };

          const newMap = new window.kakao.maps.Map(container, options);
          setMap(newMap);

          console.log('Map Initialized with:', initialLatitude, initialLongitude);

          newMap.setCenter(new window.kakao.maps.LatLng(initialLatitude, initialLongitude));
        });
      } else {
        console.error('Kakao Maps API failed to load.');
      }
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

    return () => {
      kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
      document.head.removeChild(kakaoMapScript);
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (map && isInitialLoad) {
      const savedLatitude = localStorage.getItem('OGlatitude');
      const savedLongitude = localStorage.getItem('OGlongitude');

      const initialLatitude = savedLatitude ? parseFloat(savedLatitude) : latitude;
      const initialLongitude = savedLongitude ? parseFloat(savedLongitude) : longitude;

      const coords = new window.kakao.maps.LatLng(initialLatitude, initialLongitude);
      map.setCenter(coords);

      console.log('Map Center Set to Initial Coordinates:', initialLatitude, initialLongitude);

      setIsInitialLoad(false); // 최초 로딩이 끝났음을 표시
    }
  }, [map, isInitialLoad, latitude, longitude]);

  useEffect(() => {
    if (map && location && !isInitialLoad) {
      // 추가된 조건: isInitialLoad가 false일 때만 실행
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(location, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);
          setCoordinates(result[0].y, result[0].x);

          console.log('Address Search Center Set to:', result[0].y, result[0].x);

          // // 로컬 스토리지에 새로운 좌표를 저장합니다.
          // localStorage.setItem('latitude', result[0].y.toString());
          // localStorage.setItem('longitude', result[0].x.toString());
        }
      });
    }
  }, [location, map, setCoordinates, isInitialLoad]); // isInitialLoad를 의존성 배열에 추가

  // 페이지 언로드 시 로컬 스토리지 값 삭제
  // 페이지 언로드 또는 비활성화 시 로컬 스토리지 값 삭제
  useEffect(() => {
    const handleUnload = (event: Event) => {
      localStorage.removeItem('latitude');
      localStorage.removeItem('longitude');
    };

    window.addEventListener('beforeunload', handleUnload);
    document.addEventListener('visibilitychange', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      document.removeEventListener('visibilitychange', handleUnload);
    };
  }, []);

  return (
    <div id="map" className="relative flex flex-row flex-grow w-full h-full">
      <div className="flex flex-col custom_zoomcontrol z-10 mt-[20px] ml-[20px]">
        <button onClick={() => (window as any).zoomIn()} className="flex">
          <img src={MapPlus} alt="확대" />
        </button>
        <button onClick={() => (window as any).zoomOut()} className="flex">
          <img src={MapMinus} alt="축소" />
        </button>
      </div>
      <div className="flex flex-row justify-center items-center flex-grow w-full h-full z-50 mt-[50px] -ml-[317px]">
        <div className="flex flex-row h-full items-center justify-center">
          <button className="flex flex-row w-max-full h-[40px] rounded-[30px] bg-white border border-[#357fff]">
            <div className="flex w-[40px] h-[40px] items-center justify-center rounded-[30px] bg-[#357fff] border-2 border-[#357fff] -mt-[1px] mr-[2px] -ml-[0px]">
              <p className="flex w-max-full font-bold text-white mx-[3px]">{newRoomInfoCount}</p>
            </div>
            <p className="flex w-max-full items-center top-2 font-bold text-center p-1.5 mr-[4px] -mt-[1px] h-[40px] text-[#357fff]">
              {savedStreet}
            </p>
          </button>
        </div>
        <div className="absolute top-0 right-0 w-[424px] h-full z-10">
          <Sidebar />
        </div>
      </div>
      {map && (
        <MapMarker
          latitude={isInitialLoad ? parseFloat(savedLatitude!) : latitude!}
          longitude={isInitialLoad ? parseFloat(savedLongitude!) : longitude!}
          map={map}
        />
      )}
    </div>
  );
};

export default Map;

import React, { useState, useEffect } from 'react';
import MapPlus from '../assets/img/MapPlus.svg';
import MapMinus from '../assets/img/MapMinus.svg';
import Sidebar from './Sidebar.tsx';
import { useMap } from '../components/MapContext.tsx';

const Map: React.FC = () => {
  const { latitude, longitude } = useMap();
  useEffect(() => {
    // Kakao Maps API script 태그 생성
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    // Kakao Maps API 로드 후 실행될 함수
    const onLoadKakaoAPI = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map') as HTMLElement;
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };

          // 지도 생성
          const map = new window.kakao.maps.Map(container, options);

          // ZoomControl 함수 정의
          const zoomIn = () => {
            map.setLevel(map.getLevel() - 1);
          };

          const zoomOut = () => {
            map.setLevel(map.getLevel() + 1);
          };

          // ZoomControl 버튼 클릭 이벤트 처리
          (window as any).zoomIn = zoomIn;
          (window as any).zoomOut = zoomOut;
        });
      } else {
        console.error('Kakao Maps API failed to load.');
      }
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

    // Cleanup 함수: 컴포넌트 언마운트 시 호출됨
    return () => {
      kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
      document.head.removeChild(kakaoMapScript);
      (window as any).zoomIn = undefined;
      (window as any).zoomOut = undefined;
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div id="map" className="flex flex-row flex-grow w-full h-full">
      {/* ZoomControl */}
      <div className="flex flex-col custom_zoomcontrol z-10 mt-[20px] ml-[20px]">
        <button onClick={() => (window as any).zoomIn()} className="flex">
          <img src={MapPlus} alt="확대" />
        </button>
        <button onClick={() => (window as any).zoomOut()} className="flex">
          <img src={MapMinus} alt="축소" />
        </button>
        {isSidebarOpen && <Sidebar onClose={handleCloseSidebar} />}
        <button
          onClick={handleOpenSidebar}
          className="flex items-center w-[76px] h-[27px] justify-center rounded-[50px] mt-[15px] bg-[#efefef] hover:bg-gray-200"
          style={{
            boxShadow: '0px 2px 5px -1px rgba(50,50,93,0.25), 0px 1px 3px -1px rgba(0,0,0,0.3)',
          }}
        >
          <p className="flex text-[13px] font-bold text-black">매물</p>
        </button>
      </div>
    </div>
  );
};

export default Map;

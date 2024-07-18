import { useEffect } from 'react';
import MapPlus from '../assets/img/MapPlus.svg';
import MapMinus from '../assets/img/MapMinus.svg';

const Map = () => {
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
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
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
      </div>
    </div>
  );
};

export default Map;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapPlus from '../assets/img/MapPlus.svg';
import MapMinus from '../assets/img/MapMinus.svg';
import RegionOption from '../assets/img/RegionOption.svg';
import SellingOption from '../assets/img/SellingOption.svg';
import InactiveOption from '../assets/img/InactiveOption.svg';
import ActiveOption from '../assets/img/ActiveOption.svg';
import Navbar2 from '../components/Navbar2.tsx';
import SellingType from '../components/SellingType.tsx';

const AptPage = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
    <div className="flex flex-col min-h-screen w-full h-full overflow-hidden bg-white">
      <Navbar2 />
      {/* 거주형태 */}
      <div className="flex border-b-[1.5px] border-[#EBEBEB] w-full h-[61px] justify-start items-center font-[NanumSquareRoundB] text-[18px] text-black mt-[72px]">
        <Link to="/apt">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center text-[#357FFF]">
            아파트
            <div className="absolute bottom-0 w-[80%] h-[4px] bg-[#357FFF]"></div>
          </button>
        </Link>
        <Link to="/office">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center">
            오피스텔
            <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]"></div>
          </button>
        </Link>
        <Link to="house">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center">
            빌라 ∙ 주택
            <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]"></div>
          </button>
        </Link>
        <Link to="room">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center">
            원룸 ∙ 투룸
            <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]"></div>
          </button>
        </Link>
      </div>
      {/* options */}
      <div className="flex w-full h-[61px] justify-start items-center font-[NanumSquareRoundB] text-[16px] text-black">
        <button className="relative flex ml-[30px]">
          <div className="absolute flex w-full h-full flex-row justify-end items-center">
            <p className="flex w-[75px] h-[30px] items-center">시/도</p>
            <p className="flex w-[90px] h-[30px] items-center">시/군/구</p>
            <p className="flex w-[75px] h-[30px] items-center mr-[5px]">읍/면/동</p>
          </div>
          <img src={RegionOption} alt="지역 설정" />
        </button>
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[20px]"></span>
        <button className="relative flex mr-[10px]" onClick={handleButtonClick}>
          <img src={SellingOption} alt="거래 유형" />
          <p className="absolute flex w-full h-full ml-[35px] items-center font-[NanumSquareRoundB] text-[16px] text-black">
            월세
          </p>
        </button>
        <SellingType isOpen={isModalOpen} onClose={handleCloseModal} />
        <button className="relative flex mr-[10px]" onClick={handleClick}>
          <img src={SellingOption} alt="옵션" />
          <p className="absolute flex w-full h-full ml-[20px] items-center font-[NanumSquareRoundB] text-[16px] text-black">
            주차대수
          </p>
        </button>
        <button className="relative flex" onClick={handleClick}>
          <img src={SellingOption} alt="옵션" />
          <p className="absolute flex w-full h-full ml-[37px] items-center font-[NanumSquareRoundB] text-[16px] text-black">
            방수
          </p>
        </button>
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[20px]"></span>
        <button className="relative flex mr-[10px]" onClick={handleClick}>
          <img src={isActive ? ActiveOption : InactiveOption} alt="옵션" />
          <p
            className={`absolute flex w-full h-full ml-[35px] items-center font-[NanumSquareRoundB] text-[16px] ${isActive ? 'text-[#357FFF]' : 'text-black'}`}
          >
            단기임대
          </p>
        </button>
      </div>
      {/* 지도 표시 영역 */}
      <div id="map" className="flex flex-row flex-grow w-full h-full">
        {/* ZoomControl */}
        <div className="flex flex-col custom_zoomcontrol z-10 mt-[20px] ml-[20px]">
          <button onClick={() => window.zoomIn()} className="flex">
            <img src={MapPlus} alt="확대" />
          </button>
          <button onClick={() => window.zoomOut()} className="flex">
            <img src={MapMinus} alt="축소" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AptPage;

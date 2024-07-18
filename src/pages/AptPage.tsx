import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RegionOption from '../assets/img/RegionOption.svg';
import SellingOption from '../assets/img/SellingOption.svg';
import InactiveOption from '../assets/img/InactiveOption.svg';
import ActiveOption from '../assets/img/ActiveOption.svg';
import Navbar2 from '../components/Navbar2';
import SellingTypeModal from '../components/SellingTypeModal';
import ParkingNumberModal from '../components/ParkingNumberModal';
import RoomNumberModal from '../components/RoomNumberModal';
import RegionModal from '../components/RegionModal';
import Map from '../components/Map';
import SellingOption2 from '../assets/img/SellingOption2.svg';
import SearchBtn from '../assets/img/SearchBtn.svg';

const AptPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeModal, setActiveModal] = useState<'sellingType' | 'parkingNumber' | 'roomNumber' | 'region' | null>(
    null,
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleButtonClick = (modal: 'sellingType' | 'parkingNumber' | 'roomNumber' | 'region') => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (activeModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeModal]);

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
        <Link to="/house">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center">
            빌라 ∙ 주택
            <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]"></div>
          </button>
        </Link>
        <Link to="/room">
          <button className="relative w-[130px] h-[61px] flex items-center justify-center">
            원룸 ∙ 투룸
            <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]"></div>
          </button>
        </Link>
      </div>
      {/* options */}
      <div className="flex relative w-full h-[61px] justify-start items-center font-[NanumSquareRoundB] text-[16px] text-black">
        <button className="relative flex ml-[30px]" onClick={() => handleButtonClick('region')}>
          <img src={RegionOption} alt="지역 설정" />
          <div className="absolute flex w-full h-full flex-row justify-end items-center">
            <p className="flex w-[75px] h-[30px] items-center">시/도</p>
            <p className="flex w-[90px] h-[30px] items-center">시/군/구</p>
            <p className="flex w-[75px] h-[30px] items-center mr-[5px]">읍/면/동</p>
          </div>
        </button>
        {activeModal === 'region' && <RegionModal ref={modalRef} isOpen={true} onClose={handleCloseModal} />}
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[20px]"></span>
        <button className="relative flex mr-[10px]" onClick={() => handleButtonClick('sellingType')}>
          <img src={activeModal === 'sellingType' ? SellingOption2 : SellingOption} alt="거래 유형" />
          <p
            className={`absolute flex w-full h-full ml-[20px] items-center font-[NanumSquareRoundB] text-[16px] ${
              activeModal === 'sellingType' ? 'text-[#357FFF]' : 'text-black'
            }`}
          >
            거래유형
          </p>
        </button>
        {activeModal === 'sellingType' && <SellingTypeModal ref={modalRef} isOpen={true} onClose={handleCloseModal} />}
        <button className="relative flex mr-[10px]" onClick={() => handleButtonClick('parkingNumber')}>
          <img src={activeModal === 'parkingNumber' ? SellingOption2 : SellingOption} alt="옵션" />
          <p
            className={`absolute flex w-full h-full ml-[20px] items-center font-[NanumSquareRoundB] text-[16px] ${
              activeModal === 'parkingNumber' ? 'text-[#357FFF]' : 'text-black'
            }`}
          >
            주차대수
          </p>
        </button>
        {activeModal === 'parkingNumber' && <ParkingNumberModal isOpen={true} onClose={handleCloseModal} />}
        <button className="relative flex" onClick={() => handleButtonClick('roomNumber')}>
          <img src={activeModal === 'roomNumber' ? SellingOption2 : SellingOption} alt="옵션" />
          <p
            className={`absolute flex w-full h-full ml-[37px] items-center font-[NanumSquareRoundB] text-[16px] ${
              activeModal === 'roomNumber' ? 'text-[#357FFF]' : 'text-black'
            }`}
          >
            방수
          </p>
        </button>
        {activeModal === 'roomNumber' && <RoomNumberModal isOpen={true} onClose={handleCloseModal} />}
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[20px]"></span>
        <button className="relative flex" onClick={handleClick}>
          <img src={isActive ? ActiveOption : InactiveOption} alt="옵션" />
          <p
            className={`absolute flex w-full h-full ml-[35px] items-center font-[NanumSquareRoundB] text-[16px] ${
              isActive ? 'text-[#357FFF]' : 'text-black'
            }`}
          >
            단기임대
          </p>
        </button>
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[20px]"></span>
        <button className="relative flex mr-[10px]">
          <img src={SearchBtn} alt="매물찾기" />
          <p className="absolute flex w-full h-full ml-[35px] items-center font-[NanumSquareRoundB] text-[16px] text-white">
            매물찾기
          </p>
        </button>
      </div>
      {/* 지도 표시 영역 */}
      <Map />
    </div>
  );
};

export default AptPage;

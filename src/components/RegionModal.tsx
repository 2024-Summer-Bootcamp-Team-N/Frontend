import { forwardRef, useState } from 'react';
import MapIcon from '../assets/img/MapIcon.svg';
import Search from '../assets/img/Search.svg';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegionModal = forwardRef<HTMLDivElement, RegionModalProps>(({ isOpen, onClose }, ref) => {
  // 각 입력값을 관리할 상태들
  const [province, setProvince] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="fixed flex flex-col w-[370px] h-[440px] mt-[550px] ml-[100px] bg-white border border-[#dfdfdf] z-10"
    >
      <div className="flex w-[370px] h-[80px] border-b border-[#F5F5F5] justify-center items-center">
        <img src={MapIcon} alt="지도 아이콘" className="mb-[3px]" />
        <p className="font-[NanumSquareEB] text-[19.2px] text-black">주소 입력</p>
      </div>
      <div className="flex flex-col w-[370px] h-[400px]">
        <div className="flex w-[370px] h-[40px] justify-start items-end">
          <p className="text-[15.6px] text-[#1E1E1E] font-[NanumSquareB] ml-[45px]">시/도</p>
        </div>
        <div className="flex w-[370px] h-[60px] justify-center items-center">
          <div className="flex flex-row w-[290px] h-[40px] border border-[#D9D9D9] rounded-[6.76px] justify-start items-center">
            <img src={Search} alt="돋보기 아이콘" className="flex w-[25px] h-[35px] ml-[10px] mt-[2px]" />
            <input
              type="text"
              className="flex w-[250px] h-[30px] ml-[5px] text-[15.6px] text-[#1E1E1E] font-[NanumSquareR]"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              placeholder="시/도를 입력하세요"
            />
          </div>
        </div>
        <div className="flex w-[370px] h-[40px] justify-start items-end">
          <p className="text-[15.6px] text-[#1E1E1E] font-[NanumSquareB] ml-[45px]">시/군/구</p>
        </div>
        <div className="flex w-[370px] h-[60px] justify-center items-center">
          <div className="flex flex-row w-[280px] h-[40px] border border-[#D9D9D9] rounded-[6.76px] justify-start items-center">
            <img src={Search} alt="돋보기 아이콘" className="flex w-[25px] h-[35px] ml-[10px] mt-[2px]" />
            <input
              type="text"
              className="flex w-[260px] h-[30px] ml-[5px] text-[15.6px] text-[#1E1E1E] font-[NanumSquareR]"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="시/군/구를 입력하세요"
            />
          </div>
        </div>
        <div className="flex w-[370px] h-[40px] justify-start items-end">
          <p className="text-[15.6px] text-[#1E1E1E] font-[NanumSquareB] ml-[45px]">읍/면/동</p>
        </div>
        <div className="flex w-[370px] h-[60px] justify-center items-center">
          <div className="flex flex-row w-[290px] h-[40px] border border-[#D9D9D9] rounded-[6.76px] justify-start items-center">
            <img src={Search} alt="돋보기 아이콘" className="flex w-[25px] h-[35px] ml-[10px] mt-[2px]" />
            <input
              type="text"
              className="flex w-[250px] h-[30px] ml-[5px] text-[15.6px] text-[#1E1E1E] font-[NanumSquareR]"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="읍/면/동을 입력하세요"
            />
          </div>
        </div>
        <div className="flex w-[370px] h-[60px] justify-center items-center">
          <button
            className="justify-center items-center w-[56.15px] h-[30.79px] rounded-[18px] bg-[#357fff]"
            onClick={onClose}
          >
            <p className="text-[16px] font-[NanumSquareB] text-white">확인</p>
          </button>
        </div>
      </div>
    </div>
  );
});

export default RegionModal;

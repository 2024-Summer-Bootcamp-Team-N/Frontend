import React, { useState, useEffect } from 'react';

interface SellingTypeProps {
  isOpen: boolean;
  onClose: () => void;
}

const SellingType: React.FC<SellingTypeProps> = ({ isOpen, onClose }) => {
  const [isMonthlyRentActive, setIsMonthlyRentActive] = useState(false);
  const [isDepositRentActive, setIsDepositRentActive] = useState(false);

  const handleMonthlyRentClick = () => {
    setIsMonthlyRentActive(true);
    setIsDepositRentActive(false);
  };

  const handleDepositRentClick = () => {
    setIsMonthlyRentActive(false);
    setIsDepositRentActive(true);
  };

  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(10000);
  const min = 100;
  const max = 10000;
  const step = 100;

  const calculateThumbPosition = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  const minThumb = calculateThumbPosition(minPrice);
  const maxThumb = 100 - calculateThumbPosition(maxPrice);

  useEffect(() => {}, [minPrice, maxPrice]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - step);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + step);
    setMaxPrice(value);
  };

  console.log(minPrice);
  console.log(maxPrice);

  if (!isOpen) return null;

  return (
    <div className="fixed flex flex-col w-[468px] h-[475px] mt-[600px] ml-[200px] bg-white border border-[#dfdfdf] z-10">
      <div className="flex flex-col w-[468px] h-[142.8px] border-b border-[#F3F3F3]">
        <div className="flex w-[468px] h-[71.4px] justify-start items-end">
          <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">거래유형</p>
        </div>
        <div className="flex flex-row w-[468px] h-[71.4px] justify-start items-start">
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center ml-[50.4px] mt-[12px] rounded-[54.34px] ${isMonthlyRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleMonthlyRentClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isMonthlyRentActive ? 'text-white' : 'text-[#979797]'}`}>
              월세
            </p>
          </button>
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${isDepositRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleDepositRentClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isDepositRentActive ? 'text-white' : 'text-[#979797]'}`}>
              전세
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[468px] h-[332.4px]">
        <div className="flex w-[468px] h-[60px] justify-start items-end">
          <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">가격</p>
        </div>
        <div className="flex flex-col w-[468px] h-[112.8px]">
          <div className="flex w-[468px] h-[32.4px] justify-center">
            <p className="w-[96px] h-[24px] text-[15.6px] font-[NanumSquareB] text-left text-black">보증금(전세금)</p>
            <p className="w-[268.8px] h-[24px] text-[15.6px] font-[NanumSquareB] text-right text-[#357fff]">
              {minPrice}만원 - {maxPrice}만원
            </p>
          </div>
          <div className="relative flex flex-row w-[468px] h-[34.8px] justify-center items-center">
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={minPrice}
              onChange={handleMinChange}
              className="absolute z-20 h-2 w-full opacity-0 cursor-pointer pointer-events-auto appearance-none"
            />
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={maxPrice}
              onChange={handleMaxChange}
              className="absolute z-20 h-2 w-full opacity-0 cursor-pointer pointer-events-auto appearance-none"
            />
            <div className="relative z-10 flex w-[333.6px] h-[6px] bg-[#d9d9d9] rounded-md">
              <div
                className="absolute z-20 top-0 bottom-0 bg-[#357fff] rounded-md"
                style={{ left: `${minThumb}%`, right: `${maxThumb}%` }}
              ></div>
              <div
                className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -ml-1"
                style={{ left: `${minThumb}%` }}
              ></div>
              <div
                className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -mr-3"
                style={{ right: `${maxThumb}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col w-[468px] h-[45.6px] justify-center items-start">
            <div className="flex w-[468px] h-[7.2px] justify-center items-center">
              <div className="flex w-[167.5px] h-[16.8px] justify-start">
                <div className="w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
              </div>
              <div className="flex w-[167.5px] h-[16.8px] justify-end">
                <div className="w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
              </div>
            </div>
            <div className="flex flex-row w-[468px] h-[16.8px] justify-center">
              <div className="flex w-[177.5px] h-[16.8px] justify-start">
                <p className="text-[14px] font-[NanumSquareB] text-[#D5D5D5]">최소</p>
              </div>
              <div className="flex w-[177.5px] h-[16.8px] justify-end">
                <p className="text-[14px] font-[NanumSquareB] text-[#D5D5D5]">최대</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[468px] h-[30px] justify-center items-center">
          <span className="w-[360px] h-[1.2px] bg-[#F3F3F3]"></span>
        </div>
        <div className="flex flex-col w-[468px] h-[112.8px]">
          <div className="flex w-[468px] h-[32.4px] justify-center">
            <p className="w-[96px] h-[24px] text-[15.6px] font-[NanumSquareB] text-left text-black">월세</p>
            <p className="w-[268.8px] h-[24px] text-[15.6px] font-[NanumSquareB] text-right text-[#357fff]">무제한</p>
          </div>
          <div className="relative flex flex-row w-[468px] h-[34.8px] justify-center items-center">
            <div className="absolute flex w-[30px] h-[30px] left-[51.6px] rounded-full bg-white border border-[#D5D5D5]" />
            <div className="flex w-[333.6px] h-[6px] bg-[#d9d9d9]">
              <div className="w-[333.6px] h-[6px] bg-[#357fff]" />
            </div>
            <div className="absolute flex w-[30px] h-[30px] justify-end right-[51.6px] rounded-full bg-white border border-[#D5D5D5]" />
          </div>
          <div className="flex flex-col w-[468px] h-[45.6px] justify-center items-start">
            <div className="flex w-[468px] h-[7.2px] justify-center items-center">
              <div className="flex w-[105.6px] h-[16.8px] justify-start">
                <div className="w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
              </div>
              <div className="flex w-[128.4px] h-[16.8px] justify-center">
                <div className="w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
              </div>
              <div className="flex w-[105.6px] h-[16.8px] justify-end">
                <div className="w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
              </div>
            </div>
            <div className="flex flex-row w-[468px] h-[16.8px] justify-center">
              <div className="flex w-[105.6px] h-[16.8px] justify-start">
                <p className="text-[14px] font-[NanumSquareB] text-[#D5D5D5]">최소</p>
              </div>
              <div className="flex w-[147.6px] h-[16.8px] justify-center">
                <p className="text-[14px] font-[NanumSquareB] text-[#D5D5D5]">72만원</p>
              </div>
              <div className="flex w-[105.6px] h-[16.8px] justify-end">
                <p className="text-[14px] font-[NanumSquareB] text-[#D5D5D5]">최대</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingType;

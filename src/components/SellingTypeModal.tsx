import { useState, forwardRef } from 'react';

interface SellingTypeProps {
  isOpen: boolean;
  onClose: () => void;
}

const SellingType = forwardRef<HTMLDivElement, SellingTypeProps>(({ isOpen, onClose }, ref) => {
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

  // Monthly Rent State
  const [minMonthlyRent, setMinMonthlyRent] = useState(0);
  const [maxMonthlyRent, setMaxMonthlyRent] = useState(400);
  const minMonthly = 0;
  const maxMonthly = 400;

  // Deposit Rent State
  const [minDepositRent, setMinDepositRent] = useState(0);
  const [maxDepositRent, setMaxDepositRent] = useState(100000);
  const minDeposit = 0;
  const maxDeposit = 100000;

  const getDepositStep = (value) => {
    if (value >= 10000) {
      return 1000; // 1억원 이상일 때 1000만원 단위
    } else if (value >= 500) {
      return 500; // 500만원부터 1억원까지 500만원 단위
    } else {
      return 100; // 500만원 미만일 때 100만원 단위
    }
  };

  const getMonthlyStep = (value) => {
    if (value >= 200) {
      return 50; // 200만원 이상일 때 50만원 단위
    } else if (value >= 80) {
      return 10; // 80만원 이상일 때 10만원 단위
    } else if (value >= 60) {
      return 5; // 60만원 이상일 때 5만원 단위
    } else if (value >= 50) {
      return 1; // 50만원 이상일 때 1만원 단위
    } else {
      return 5; // 그 외에는 5만원 단위
    }
  };

  const handleMinMonthlyRentChange = (e) => {
    const value = Math.min(Number(e.target.value), maxMonthlyRent - getMonthlyStep(minMonthlyRent));
    setMinMonthlyRent(value);
  };

  const handleMaxMonthlyRentChange = (e) => {
    const value = Math.max(Number(e.target.value), minMonthlyRent + getMonthlyStep(maxMonthlyRent));
    setMaxMonthlyRent(value);
  };

  const handleMinDepositRentChange = (e) => {
    const value = Math.min(Number(e.target.value), maxDepositRent - getDepositStep(minDepositRent));
    setMinDepositRent(value);
  };

  const handleMaxDepositRentChange = (e) => {
    const value = Math.max(Number(e.target.value), minDepositRent + getDepositStep(maxDepositRent));
    setMaxDepositRent(value);
  };

  const minMonthlyThumb = ((minMonthlyRent - minMonthly) / (maxMonthly - minMonthly)) * 100;
  const maxMonthlyThumb = 100 - ((maxMonthlyRent - minMonthly) / (maxMonthly - minMonthly)) * 100;

  const minDepositThumb = ((minDepositRent - minDeposit) / (maxDeposit - minDeposit)) * 100;
  const maxDepositThumb = 100 - ((maxDepositRent - minDeposit) / (maxDeposit - minDeposit)) * 100;

  const formatPrice = (price) => {
    if (price === 0) {
      return ''; // minPrice가 0일 때는 빈 문자열 반환
    }

    if (price === maxMonthly || price === maxDeposit) {
      return '무제한'; // maxPrice가 최대값일 때는 '무제한' 반환
    }

    if (price >= 10000) {
      const billionPart = Math.floor(price / 10000);
      const thousandPart = price % 10000;
      return thousandPart > 0 ? `${billionPart}억 ${thousandPart}만원` : `${billionPart}억`;
    }
    return `${price}만원`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed flex flex-col w-[468px] h-[475px] mt-[600px] ml-[200px] bg-white border border-[#dfdfdf] z-10"
      ref={ref}
    >
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
      {isMonthlyRentActive && (
        <div className="flex flex-col w-[468px] h-[332.4px]">
          <div className="flex w-[468px] h-[60px] justify-start items-end">
            <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">가격</p>
          </div>
          <div className="flex flex-col w-[468px] h-[112.8px]">
            <div className="flex w-[468px] h-[32.4px] justify-center">
              <p className="w-[96px] h-[24px] text-[15.6px] font-[NanumSquareB] text-left text-black">보증금(전세금)</p>
              <p className="w-[268.8px] h-[24px] text-[15.6px] font-[NanumSquareB] text-right text-[#357fff]">
                {maxDepositRent === maxDeposit && minDepositRent === 0
                  ? '무제한'
                  : minDepositRent === 0
                    ? formatPrice(maxDepositRent)
                    : `${formatPrice(minDepositRent)} - ${formatPrice(maxDepositRent)}`}
              </p>
            </div>
            <div className="relative flex flex-row w-[468px] h-[34.8px] justify-center items-center">
              <input
                type="range"
                step={getDepositStep(minDepositRent)}
                min={minDeposit}
                max={maxDeposit}
                value={minDepositRent}
                onChange={handleMinDepositRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <input
                type="range"
                step={getDepositStep(maxDepositRent)}
                min={minDeposit}
                max={maxDeposit}
                value={maxDepositRent}
                onChange={handleMaxDepositRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <div className="relative z-10 flex w-[333.6px] h-[6px] bg-[#d9d9d9] rounded-md">
                <div
                  className="absolute z-20 top-0 bottom-0 bg-[#357fff] rounded-md"
                  style={{ left: `${minDepositThumb}%`, right: `${maxDepositThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -ml-1"
                  style={{ left: `${minDepositThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -mr-3"
                  style={{ right: `${maxDepositThumb}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col w-[468px] h-[45.6px] justify-center items-start">
              <div className="flex flex-row w-[468px] h-[7.2px] justify-center items-center">
                <div className="flex w-[234px] h-[16.8px] justify-start">
                  <div className="ml-[73px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <div className="mr-[67px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
              </div>
              <div className="flex flex-row w-[468px] h-[16.8px] justify-center">
                <div className="flex w-[234px] h-[16.8px]">
                  <p className="ml-[62px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최소</p>
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <p className="mr-[57px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최대</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[468px] h-[112.8px]">
            <div className="flex w-[468px] h-[32.4px] justify-center">
              <p className="w-[96px] h-[24px] text-[15.6px] ml-[20px] font-[NanumSquareB] text-left text-black">월세</p>
              <p className="w-[268.8px] h-[24px] text-[15.6px] font-[NanumSquareB] text-right text-[#357fff]">
                {maxMonthlyRent === maxMonthly && minMonthlyRent === 0
                  ? '무제한'
                  : minMonthlyRent === 0
                    ? formatPrice(maxMonthlyRent)
                    : `${formatPrice(minMonthlyRent)} - ${formatPrice(maxMonthlyRent)}`}
              </p>
            </div>
            <div className="relative flex flex-row w-[468px] h-[34.8px] justify-center items-center">
              <input
                type="range"
                step={getMonthlyStep(minMonthlyRent)}
                min={minMonthly}
                max={maxMonthly}
                value={minMonthlyRent}
                onChange={handleMinMonthlyRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <input
                type="range"
                step={getMonthlyStep(maxMonthlyRent)}
                min={minMonthly}
                max={maxMonthly}
                value={maxMonthlyRent}
                onChange={handleMaxMonthlyRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <div className="relative z-10 flex w-[333.6px] h-[6px] bg-[#d9d9d9] rounded-md">
                <div
                  className="absolute z-20 top-0 bottom-0 bg-[#357fff] rounded-md"
                  style={{ left: `${minMonthlyThumb}%`, right: `${maxMonthlyThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -ml-1"
                  style={{ left: `${minMonthlyThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -mr-3"
                  style={{ right: `${maxMonthlyThumb}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col w-[468px] h-[45.6px] justify-center items-start">
              <div className="flex flex-row w-[468px] h-[7.2px] justify-center items-center">
                <div className="flex w-[234px] h-[16.8px] justify-start">
                  <div className="ml-[73px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <div className="mr-[67px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
              </div>
              <div className="flex flex-row w-[468px] h-[16.8px] justify-center">
                <div className="flex w-[234px] h-[16.8px]">
                  <p className="ml-[62px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최소</p>
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <p className="mr-[57px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최대</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDepositRentActive && (
        <div className="flex flex-col w-[468px] h-[332.4px]">
          <div className="flex w-[468px] h-[60px] justify-start items-end">
            <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">가격</p>
          </div>
          <div className="flex flex-col w-[468px] h-[112.8px]">
            <div className="flex w-[468px] h-[32.4px] justify-center">
              <p className="w-[96px] h-[24px] text-[15.6px] font-[NanumSquareB] text-left text-black">보증금(전세금)</p>
              <p className="w-[268.8px] h-[24px] text-[15.6px] font-[NanumSquareB] text-right text-[#357fff]">
                {maxDepositRent === maxDeposit && minDepositRent === 0
                  ? '무제한'
                  : minDepositRent === 0
                    ? formatPrice(maxDepositRent)
                    : `${formatPrice(minDepositRent)} - ${formatPrice(maxDepositRent)}`}
              </p>
            </div>
            <div className="relative flex flex-row w-[468px] h-[34.8px] justify-center items-center">
              <input
                type="range"
                step={getDepositStep(minDepositRent)}
                min={minDeposit}
                max={maxDeposit}
                value={minDepositRent}
                onChange={handleMinDepositRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <input
                type="range"
                step={getDepositStep(maxDepositRent)}
                min={minDeposit}
                max={maxDeposit}
                value={maxDepositRent}
                onChange={handleMaxDepositRentChange}
                className="absolute z-20 w-[333.6px]  h-2 opacity-0 appearance-none cursor-pointer pointer-events-none custom-slider-thumb"
              />
              <div className="relative z-10 flex w-[333.6px] h-[6px] bg-[#d9d9d9] rounded-md">
                <div
                  className="absolute z-20 top-0 bottom-0 bg-[#357fff] rounded-md"
                  style={{ left: `${minDepositThumb}%`, right: `${maxDepositThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -ml-1"
                  style={{ left: `${minDepositThumb}%` }}
                ></div>
                <div
                  className="absolute z-30 w-[25px] h-[25px] bg-white rounded-full border border-[#D5D5D5] -mt-2 -mr-3"
                  style={{ right: `${maxDepositThumb}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col w-[468px] h-[45.6px] justify-center items-start">
              <div className="flex flex-row w-[468px] h-[7.2px] justify-center items-center">
                <div className="flex w-[234px] h-[16.8px] justify-start">
                  <div className="ml-[73px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <div className="mr-[67px] w-[1.8px] h-[7.2px] bg-[#d9d9d9]" />
                </div>
              </div>
              <div className="flex flex-row w-[468px] h-[16.8px] justify-center">
                <div className="flex w-[234px] h-[16.8px]">
                  <p className="ml-[62px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최소</p>
                </div>
                <div className="flex w-[234px] h-[16.8px] justify-end">
                  <p className="mr-[57px] text-[14px] font-[NanumSquareB] text-[#9E9E9E]">최대</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default SellingType;

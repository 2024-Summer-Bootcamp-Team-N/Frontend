import { useState, useEffect, useRef } from 'react';

const ParkingNumber = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (option: string) => {
    if (selectedOption === option) {
      // 이미 선택된 버튼을 클릭한 경우 선택 해제
      setSelectedOption(null);
    } else {
      // 새로운 버튼을 선택한 경우 선택 상태 업데이트
      setSelectedOption(option);
    }
  };

  const handleCloseModal = () => {
    setSelectedOption(null);
    onClose();
  };

  // 모달 바깥 영역 클릭 시 모달 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div
        ref={modalRef}
        className="fixed flex flex-col w-[450px] h-[150px] mt-[280px] ml-[300px] bg-white border border-[#dfdfdf] z-10"
      >
        <div className="flex w-[450px] h-[71.4px] justify-start items-end">
          <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">주차대수</p>
        </div>
        <div className="flex flex-row w-[450px] h-[80px] justify-start items-start">
          <button
            className={`flex w-[67.3px] h-[36.95px] justify-center items-center ml-[50.4px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'none' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('none')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>상관없음</p>
          </button>
          <button
            className={`flex w-[110px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'oneOrMore' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('oneOrMore')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>세대당 1대 이상</p>
          </button>
          <button
            className={`flex w-[110px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'twoOrMore' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('twoOrMore')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>세대당 2대 이상</p>
          </button>
        </div>
      </div>
    )
  );
};

export default ParkingNumber;

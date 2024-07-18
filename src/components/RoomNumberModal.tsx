import { useState, useEffect, useRef } from 'react';

const RoomNumber = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (option: string) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
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
        className="fixed flex flex-col w-[510spx] h-[150px] mt-[280px] ml-[400px] bg-white border border-[#dfdfdf] z-10"
      >
        <div className="flex w-[510px] h-[71.4px] justify-start items-end">
          <p className="ml-[50.4px] mb-[6px] items-center text-[19.2px] font-[NanumSquareEB] text-black">방수</p>
        </div>
        <div className="flex flex-row w-[468px] h-[80px] justify-start items-start">
          <button
            className={`flex w-[100px] h-[36.95px] justify-center items-center ml-[40px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'none' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('none')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>상관없음</p>
          </button>
          <button
            className={`flex w-[70px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'one' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('one')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>1개</p>
          </button>
          <button
            className={`flex w-[70px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'two' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('two')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>2개</p>
          </button>
          <button
            className={`flex w-[70px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'three' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('three')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>3개</p>
          </button>
          <button
            className={`flex w-[80px] h-[36.95px] justify-center items-center ml-[24px] mt-[12px] rounded-[54.34px] ${
              selectedOption === 'four' ? 'bg-[#357FFF] text-white' : 'bg-[#F5F5F5] text-[#979797]'
            }`}
            onClick={() => handleButtonClick('four')}
          >
            <p className={`text-[14px] font-[NanumSquareB]`}>4개 이상</p>
          </button>
        </div>
      </div>
    )
  );
};

export default RoomNumber;

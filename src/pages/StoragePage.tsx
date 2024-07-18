import React, { useState } from 'react';
import Navleft from "../assets/img/navigate_before.svg";
import Navright from "../assets/img/navigate_next.svg";
import Navbar2 from "../components/Navbar2";

const StoragePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const boxes = [
    { id: 1, color: 'bg-red-500', label: 'Box 1' },
    { id: 2, color: 'bg-green-500', label: 'Box 2' },
    { id: 3, color: 'bg-blue-500', label: 'Box 3' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % boxes.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + boxes.length) % boxes.length);
  };

  const getBoxClass = (index: number) => {
    return `w-[402px] h-[530px] ${boxes[index].color} rounded-[27.42px] flex items-center justify-center text-white ${index === currentIndex ? '' : 'blur-sm'}`;
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Navbar2 />
      <div className="w-screen h-[630px] flex justify-center items-center gap-2">
        <div className={getBoxClass((currentIndex - 1 + boxes.length) % boxes.length)}>
          {boxes[(currentIndex - 1 + boxes.length) % boxes.length].label}
        </div>
        <button onClick={handlePrevious} className="px-1">
          <img src={Navleft} alt="left" className="flex w-[90px] h-[90px] object-cover" />
        </button>
        <div className={getBoxClass(currentIndex)}>
          {boxes[currentIndex].label}
        </div>
        <button onClick={handleNext} className="px-1">
          <img src={Navright} alt="right" className="flex w-[90px] h-[90px] object-cover" />
        </button>
        <div className={getBoxClass((currentIndex + 1) % boxes.length)}>
          {boxes[(currentIndex + 1) % boxes.length].label}
        </div>
      </div>

      <div className="w-screen h-[80px] flex justify-center items-center">
        <div className="w-[350px] h-[77px] bg-[#357FFF] rounded-[27.42px] flex items-center justify-center text-white text-[NanumSquareRoundEB]">
          2024 - 07 - 06 오전 02:30:30 {/* 작성 시간 */}
        </div>
      </div>
    </div>
  );
};

export default StoragePage;

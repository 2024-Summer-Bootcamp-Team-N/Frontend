import React, { useState, useEffect } from 'react';
import Navleft from '../assets/img/NavigateBefore.svg';
import Navright from '../assets/img/NavigateNext.svg';
import Navbar2 from '../components/Navbar2';

// Mock function to simulate fetching box data from a database
const fetchBoxes = async () => {
  return [
    { id: 1, color: 'bg-red-500', label: 'Box 1', createdAt: '2024-07-17 오전 02:30:30' },
    //{ id: 2, color: 'bg-green-500', label: 'Box 2', createdAt: '2024-07-18 오후 03:45:00' },
    //{ id: 3, color: 'bg-blue-500', label: 'Box 3', createdAt: '2024-07-19 오전 11:20:15' },
  ];
};

const StoragePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Start from the first index
  const [boxes, setBoxes] = useState<{ id: number, color: string, label: string, createdAt: string }[]>([]);

  useEffect(() => {
    // Fetch the box data when the component mounts
    const loadBoxes = async () => {
      const fetchedBoxes = await fetchBoxes();
      setBoxes(fetchedBoxes);
    };
    loadBoxes();
  }, []);

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
      {boxes.length > 0 ? (
        <>
          <div className="w-screen h-[630px] flex justify-center items-center gap-2">
            {boxes.length > 1 && (
              <div className={getBoxClass((currentIndex - 1 + boxes.length) % boxes.length)}>
                {boxes[(currentIndex - 1 + boxes.length) % boxes.length].label}
              </div>
            )}
            {boxes.length > 1 && (
              <button onClick={handlePrevious} className="px-1">
                <img src={Navleft} alt="left" className="flex w-[90px] h-[90px] object-cover" />
              </button>
            )}
            <div className={getBoxClass(currentIndex)}>{boxes[currentIndex].label}</div>
            {boxes.length > 1 && (
              <button onClick={handleNext} className="px-1">
                <img src={Navright} alt="right" className="flex w-[90px] h-[90px] object-cover" />
              </button>
            )}
            {boxes.length > 1 && (
              <div className={getBoxClass((currentIndex + 1) % boxes.length)}>
                {boxes[(currentIndex + 1) % boxes.length].label}
              </div>
            )}
          </div>
          <div className="w-screen h-[80px] flex justify-center items-center">
            <div className="w-[350px] h-[77px] bg-[#357FFF] rounded-[27.42px] flex items-center justify-center text-white text-[NanumSquareRoundEB]">
              {boxes[currentIndex].createdAt} {/* 작성 시간 */}
            </div>
          </div>
        </>
      ) : (
        <div className="text-white">No boxes available</div>
      )}
    </div>
  );
};

export default StoragePage;

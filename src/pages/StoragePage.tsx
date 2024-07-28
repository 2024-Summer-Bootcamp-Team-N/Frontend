import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navleft from '../assets/img/NavigateBefore.svg';
import Navright from '../assets/img/NavigateNext.svg';
import Navbar2 from '../components/Navbar2';

interface Box {
  id: number;
  color: string;
  createdAt: string;
  imageUrl: string;
}

const StoragePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [boxes, setBoxes] = useState<Box[]>([]);

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('Refresh token is missing');
        }

        const response = await axios.get('http://localhost:8000/api/v1/contracts/s3-list/', {
          headers: {
            Authorization: `${refreshToken}`, 
          },
        });
  
        const imageData = response.data;
        console.log(imageData);
  
        const newBoxes: Box[] = imageData.map((item: any, index: number) => ({
          id: index + 1,
          color: 'bg-gray-500',
          createdAt: item.createdDate || new Date().toLocaleString(),
          imageUrl: item.url,
        }));
  
        setBoxes(newBoxes);
      } catch (error) {
        console.error('이미지 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };
  
    fetchBoxes();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % boxes.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + boxes.length) % boxes.length);
  };

  const getBoxClass = (index: number) => {
    return `w-[402px] h-[530px] ${boxes[index].color} rounded-[27.42px] flex flex-col items-center justify-center text-white ${index === currentIndex ? '' : 'blur-sm'}`;
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Navbar2 />
      {boxes.length > 0 ? (
        <>
          <div className="w-screen h-[630px] flex justify-center items-center gap-2">
            {boxes.length > 1 && (
              <div className={getBoxClass((currentIndex - 1 + boxes.length) % boxes.length)}>
                <img src={boxes[(currentIndex - 1 + boxes.length) % boxes.length].imageUrl} alt="Contract" className="w-full h-full object-cover rounded-t-[27.42px]" />
              </div>
            )}
            {boxes.length > 1 && (
              <button onClick={handlePrevious} className="px-1">
                <img src={Navleft} alt="left" className="flex w-[90px] h-[90px] object-cover" />
              </button>
            )}
            <div className={getBoxClass(currentIndex)}>
              <div className="w-full h-full overflow-hidden shadow-xl cursor-pointer transform transition duration-300 hover:scale-[1.03]">
                <Link to = {"/contract"}>
                  <button>
                    <img 
                      src={boxes[currentIndex].imageUrl} 
                      alt="Contract"
                      className="w-full h-full object-cover object-top"
                    />
                  </button> 
                </Link>
              </div>
            </div>
            {boxes.length > 1 && (
              <button onClick={handleNext} className="px-1">
                <img src={Navright} alt="right" className="flex w-[90px] h-[90px] object-cover" />
              </button>
            )}
            {boxes.length > 1 && (
              <div className={getBoxClass((currentIndex + 1) % boxes.length)}>
                <img src={boxes[(currentIndex + 1) % boxes.length].imageUrl} alt="Contract" className="w-full h-full object-cover rounded-t-[27.42px]" />
              </div>
            )}
          </div>
          <div className="w-screen h-[80px] flex justify-center items-center">
            <div className="w-[350px] h-[77px] bg-[#357FFF] rounded-[27.42px] flex items-center justify-center text-white text-[NanumSquareRoundEB]">
              {boxes[currentIndex].createdAt}
            </div>
          </div>
        </>
      ) : (
        <div className="text-black">저장된 계약서가 없습니다</div>
      )}
    </div>
  );
};

export default StoragePage;

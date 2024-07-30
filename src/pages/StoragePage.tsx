import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navleft from '../assets/img/NavigateBefore.svg';
import Navright from '../assets/img/NavigateNext.svg';
import Navbar2 from '../components/Navbar2';
import DeleteIcon from '../assets/img/DeleteIcon.svg'

interface Box {
  id: number;
  color: string;
  createdAt: string;
  imageUrl: string;
  name: string;
}

const StoragePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [direction, setDirection] = useState<string>('');

  useEffect(() => {
    fetchBoxes();
  }, []);

  const fetchBoxes = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('Refresh token is missing');
      }

      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/contracts/s3-list/`, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });

      const imageData = response.data;
      console.log(imageData);

      const newBoxes: Box[] = imageData.map((item: any, index: number) => ({
        id: index + 1,
        color: 'bg-white',
        createdAt: item.createdDate || new Date().toLocaleString(),
        imageUrl: item.url,
        name: item.name,
      }));

      setBoxes(newBoxes);
    } catch (error) {
      console.error('이미지 데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('Refresh token is missing');
      }

      const currentBox = boxes[currentIndex];
      await axios.delete(`${import.meta.env.VITE_API_KEY}/contracts/s3-delete/`, {
        headers: {
          Authorization: refreshToken,
          'Content-Type': 'application/json',
        },
        data: {
          name: currentBox.name,
        },
      });

      // Remove the deleted box from the state
      setBoxes(boxes.filter((_, index) => index !== currentIndex));
      
      // Adjust currentIndex if necessary
      if (currentIndex >= boxes.length - 1) {
        setCurrentIndex(boxes.length - 2);
      }
    } catch (error) {
      console.error('이미지 삭제 중 오류가 발생했습니다:', error);
    }
  };

  const handleNext = () => {
    setDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % boxes.length);
      setDirection('');
    }, 300);
  };

  const handlePrevious = () => {
    setDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex - 1 + boxes.length) % boxes.length);
      setDirection('');
    }, 300);
  };

  const getBoxStyle = (index: number) => {
    const baseStyle = "w-[402px] h-[530px] absolute transition-all duration-300 ease-in-out";
    const centerPosition = "left-1/2 transform -translate-x-1/2";
    const leftPosition = "left-1/4 transform -translate-x-1/2";
    const rightPosition = "right-1/4 transform translate-x-1/2";

    if (index === currentIndex) {
      return `${baseStyle} ${centerPosition} z-20 ` ;
    } else if (index === (currentIndex - 1 + boxes.length) % boxes.length) {
      return `${baseStyle} ${leftPosition} z-10 opacity-50 scale-90 pr-[30px]`;
    } else if (index === (currentIndex + 1) % boxes.length) {
      return `${baseStyle} ${rightPosition} z-10 opacity-50 scale-90 pl-[30px]`;
    } else {
      return `${baseStyle} hidden`;
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Navbar2 />
      {boxes.length > 0 ? (
        <>
          <div className="w-screen h-[630px] flex justify-center items-center relative overflow-hidden">
            {boxes.length > 1 && (
              <button onClick={handlePrevious} className="absolute left-4 z-30">
                <img src={Navleft} alt="left" className="w-[90px] h-[90px] object-cover" />
              </button>
            )}

            {boxes.map((box, index) => (
              <div key={box.id} className={getBoxStyle(index)}>
                <div className="w-full h-full overflow-hidden shadow-xl cursor-pointer transform transition duration-300 hover:scale-[1.03] rounded-[27.42px]">
                  <Link to="/contract">
                    <button>
                      <img 
                        src={box.imageUrl} 
                        alt="Contract"
                        className="w-full h-full object-cover object-top rounded-[27.42px]"
                      />
                    </button> 
                  </Link>
                </div>
              </div>
            ))}

            {boxes.length > 1 && (
              <button onClick={handleNext} className="absolute right-4 z-30">
                <img src={Navright} alt="right" className="w-[90px] h-[90px] object-cover" />
              </button>
            )}
          </div>

          <div className="w-screen h-[80px] flex justify-center items-center">
            <div className="w-[300px] h-[55px] bg-[#357FFF] rounded-[27.42px] flex items-center justify-center text-white text-[NanumSquareRoundEB] shadow-2xl">
              {boxes[currentIndex].createdAt}
            </div>
            <button 
                className="flex items-center rounded-[62.2px] hover:shadow-inner ml-5" 
                onClick={handleDelete}
              >
                <img src={DeleteIcon} alt="삭제" className="flex w-[53px] h-[53px] object-cover" />
              </button>
          </div>
        </>
      ) : (
        <div className="text-black font-[NanumSquareRoundB] text-[1.5vw]">저장된 계약서가 없습니다</div>
      )}
    </div>
  );
};

export default StoragePage;

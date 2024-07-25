import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar2 from '../components/Navbar2';
import Navleft from '../assets/img/NavigateBefore.svg';
import Navright from '../assets/img/NavigateNext.svg';
interface Box {
  id: number;
  imageUrl: string;
  createdAt: string;
  label: string;
}
const StoragePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchBoxes();
  }, []);
  const fetchBoxes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/contracts/s3-list/`, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });
      const imageData = response.data;
      const newBoxes: Box[] = imageData.map((item: any, index: number) => ({
        id: index + 1,
        imageUrl: item.url,
        createdAt: item.created_at || new Date().toLocaleString(),
        label: item.file_name || `Box ${index + 1}`,
      }));
      setBoxes(newBoxes);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching image data:', error);
      setError('Failed to fetch images. Please try again later.');
      setIsLoading(false);
    }
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxes.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
  };
  const getBoxClass = (index: number) => {
    return `w-[402px] h-[530px] bg-gray-500 rounded-[27.42px] flex flex-col items-center justify-center text-white ${
      index === currentIndex ? '' : 'blur-sm'
    }`;
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Navbar2 />
      {isLoading ? (
        <div className="text-black">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : boxes.length > 0 ? (
        <>
          <div className="w-screen h-[630px] flex justify-center items-center gap-2">
            {boxes.length > 1 && (
              <div className={getBoxClass((currentIndex - 1 + boxes.length) % boxes.length)}>
                <img
                  src={boxes[(currentIndex - 1 + boxes.length) % boxes.length].imageUrl}
                  alt="Contract"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
            {boxes.length > 1 && (
              <button onClick={handlePrevious} className="px-1">
                <img src={Navleft} alt="left" className="flex w-[90px] h-[90px] object-cover" />
              </button>
            )}
            <div className={getBoxClass(currentIndex)}>
              <div className="w-full h-full overflow-hidden shadow-xl cursor-pointer transform transition duration-300 hover:scale-[1.03]">
                <Link to={`/contract`}>
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
                <img
                  src={boxes[(currentIndex + 1) % boxes.length].imageUrl}
                  alt="Contract"
                  className="w-full h-full object-cover object-top"
                />
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
        <div className="text-black">No boxes available</div>
      )}
    </div>
  );
};
export default StoragePage;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar2 from './Sidebar2';
import HouseImage from '../assets/img/HouseImage.png';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isSidebar2Open, setIsSidebar2Open] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);

  const handleOpenSidebar2 = () => {
    setIsSidebar2Open(true);
  };

  const handleCloseSidebar2 = () => {
    setIsSidebar2Open(false);
    setActiveButtonIndex(null); // Reset the active button index when Sidebar2 is closed
  };

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };

  return (
    <>
      <div className="flex flex-col fixed bottom-0 right-0 w-[424px] h-[840px] bg-white border-[1.5px] border-[#EBEBEB]">
        {/* <button onClick={onClose} className="absolute right-4 top-1 opacity-100 hover:bg-[#357fff]/[0.2]">
          <svg
            width={42}
            height={42}
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[41.22px] h-[42px]"
            preserveAspectRatio="none"
          >
            <path
              d="M27.2223 14.7778L14.7778 27.2223M14.7778 14.7778L27.2223 27.2223"
              stroke="#494949 "
              strokeWidth="2.59259"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button> */}

        <div className="flex flex-col w-full h-full overflow-y-auto">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`flex flex-row justify-center items-center border-b-[1.5px] border-[#EBEBEB] w-full h-full min-h-[25%] max-h-[25%] ${
                activeButtonIndex === index ? 'bg-[#357fff]/[0.11] text-[#357fff]' : ''
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <img src={HouseImage} alt="추가예정" className="w-[166px] h-[166px] border-[2px] flex object-cover" />
              <div className="flex-col ml-[15px]">
                <button
                  className="w-[140.97px] h-[29px] flex text-xl font-nanumSquareRoundB mb-[17px] text-left text-black hover:text-gray-600"
                  onClick={handleOpenSidebar2}
                >
                  전세 4억 8000
                </button>
                <p className="flex flex-col w-full text-sm text-left font-nanumSquareRoundR text-black">
                  <span className="flex text-sm text-left text-black mb-[3px]">쓰리룸</span>
                  <span className="flex text-sm text-left text-black mb-[3px]">2층, 53.28m, 관리비 6만</span>
                  <span className="flex text-sm text-left text-black mb-[3px]">신축첫입주/ 3룸 화2 / 통베란다</span>
                </p>
                <div className="flex flex-row justify-end">
                  <Link to="/consulting">
                    <button
                      className="flex items-center w-[76px] h-[27px] justify-center rounded-[50px] mt-[15px] bg-[#efefef] hover:bg-gray-200"
                      style={{
                        boxShadow: '0px 2px 5px -1px rgba(50,50,93,0.25), 0px 1px 3px -1px rgba(0,0,0,0.3)',
                      }}
                    >
                      <p className="flex text-[13px] font-bold text-black">상담하기</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isSidebar2Open && <Sidebar2 onClose={handleCloseSidebar2} />}
    </>
  );
};

export default Sidebar;

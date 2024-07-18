import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContractPaper from '../components/ContractPaper';
import Navbar2 from '../components/Navbar2';
import PaperIcon from '../assets/img/PaperIcon.svg';
import DeleteIcon from '../assets/img/DeleteIcon.svg';
import DownloadIcon from '../assets/img/DownloadIcon.svg';
import ShareIcon from '../assets/img/ShareIcon.svg';

const ContractPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setActiveButtonIndex(0);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex left-0 top-0 w-full h-[72px]">
        <Navbar2 />
      </div>
      <div className={`flex flex-row grow ${isModalOpen ? 'blur-sm' : ''}`}>
        <div className="flex flex-col w-[40%] h-full ">
          <div className="flex justify-end items-center w-full h-[45%] ">
            <div className="flex flex-col w-[488px] h-[340px] mr-[70px] font-nanumSquareRoundB text-[#49454f] overflow-y-auto">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <button
                  key={index}
                  className={`flex flex-row items-center w-full min-h-[25%] ${
                    activeButtonIndex === index
                      ? 'bg-[#494949]/[0.11] text-[#357fff]'
                      : 'hover:text-[#357fff] hover:bg-[#357fff]/[0.11]'
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  <img src={PaperIcon} alt="계약서로고" className="flex w-[32.88px] h-[32px] ml-[30px] mr-[10px]" />
                  <span className="flex ml-[25px]">
                    <p className="flex">보증금: 5억 / 월세: 200만원 </p>
                  </span>
                  <span className="flex ml-[80px]">
                    <p className="flex ">
                      2024-07-17
                      <br />
                      17:20
                    </p>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-start w-full h-[55%] ">
            <div
              className="flex flex-col justify-center items-center w-[600px] h-[442px] font-nanumSquareRoundB rounded-xl bg-[#fbfbfb] mr-[15px]"
              style={{ boxShadow: '0px 5px 15px 0 rgba(0,0,0,0.35)' }}
            >
              <div className="flex justify-center items-center w-[30%] h-[10%] rounded-[62.5px] bg-[#e4e6e8]">
                매물정보 요약
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[60%] h-full ">
          <div className="flex w-full h-[85%] justify-center items-center overflow-hidden">
            <div
              className="flex ml-[60px] mr-[170px] w-full h-[700px] overflow-y-auto rounded-[27.42px] cursor-pointer"
              style={{ boxShadow: '0px 6.8px 20.5px 0 rgba(0,0,0,0.35)' }}
              onClick={toggleModal}
            >
              <ContractPaper />
            </div>
          </div>
          <div className="flex w-full h-[15%] justify-center items-start ">
            <div className="flex mr-[4%]">
              <Link to="">
                <button className="flex rounded-[62.2px]  mr-[70px]">
                  <img src={ShareIcon} alt="공유" className="flex w-[53px] h-[53px] object-cover " />
                </button>
              </Link>
              <button className="flex rounded-[62.2px]  mr-[70px]">
                <img src={DeleteIcon} alt="삭제" className="flex w-[53px] h-[53px] object-cover " />
              </button>
              <Link to="/Storage">
                <button className="flex rounded-[62.2px]  mr-[70px]">
                  <img src={DownloadIcon} alt="다운로드" className="flex w-[53px] h-[53px] object-cover" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="flex w-[1214px] h-[80%]  rounded-[27.42px] overflow-y-auto"
            style={{ boxShadow: '0px 6.8px 20.5px 0 rgba(0,0,0,0.35)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContractPaper />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractPage;

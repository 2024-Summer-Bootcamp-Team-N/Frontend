import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContractPaper from '../components/ContractPaper';
import Navbar2 from '../components/Navbar2';
import PaperIcon from '../assets/img/PaperIcon.svg';
import DeleteIcon from '../assets/img/DeleteIcon.svg';
import DownloadIcon from '../assets/img/DownloadIcon.svg';
import ShareIcon from '../assets/img/ShareIcon.svg';
import html2canvas from 'html2canvas';
import axios from 'axios';

const ContractPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const contractPaperRef = useRef(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const generateFileName = () => {
    const currentTime = new Date().toISOString().replace(/[:.]/g, '-');
    return `contract_${currentTime}.png`;
  };

  const handleDownloadAndUpload = async () => {
    if (contractPaperRef.current && isContentLoaded) {
      const element = contractPaperRef.current;
      const originalStyle = element.style.cssText;
      const originalHeight = element.style.height;
      const originalOverflow = element.style.overflow;
  
      try {
        // 스타일 변경
        element.style.width = 'auto';
        element.style.height = 'auto';
        element.style.overflow = 'visible';
  
        // 스크롤을 맨 위로 이동
        element.scrollTop = 0;
  
        const canvas = await html2canvas(element, {
          scrollY: -window.scrollY,
          height: element.scrollHeight,
          windowHeight: element.scrollHeight
        });
  
        // 원래 스타일로 복원
        element.style.cssText = originalStyle;
        element.style.height = originalHeight;
        element.style.overflow = originalOverflow;
  
        // 이미지 다운로드
        const pngData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const fileName = generateFileName();
        link.href = pngData;
        link.download = fileName;
        link.click();
  
        const dataUrl = canvas.toDataURL('image/png');
        // S3 업로드
        const base64Data = dataUrl.split(',')[1];
        const jsonData = {
          image_data: base64Data,
          file_name: fileName,
          content_type: 'image/png'
        };
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.post(
          'http://localhost:8000/api/v1/contracts/s3-upload/',
          jsonData,
          {
            headers: {
              'accept': 'application/json',
              Authorization: `${refreshToken}`, 
              'Content-Type': 'application/json'
            }
          }
        );
  
        if (response.status === 200) {
          console.log('Contract image downloaded and uploaded successfully');
          // 성공 메시지 표시
        } else {
          throw new Error('Failed to upload contract image');
        }
      } catch (error) {
        console.error('Error during download or upload:', error);
        if (axios.isAxiosError(error)) {
          console.error('Server response:', error.response?.data);
          console.error('Status code:', error.response?.status);
        }
        // 에러 메시지 표시
      } finally {
        // 스타일 복원 (오류 발생 시에도 실행)
        element.style.cssText = originalStyle;
        element.style.height = originalHeight;
        element.style.overflow = originalOverflow;
      }
    }
  };

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
            <div className="flex flex-col w-[90%] h-[80%] mr-[5%] font-nanumSquareRoundB text-[#49454f] overflow-y-auto">
              {[1].map((_, index) => (
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
                    <p className="flex">보증금: 1억 1000만원 / 월세: 없음 </p>
                  </span>
                  <span className="flex ml-[80px]">
                    <p className="flex ">
                      2024-07-25
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
              className="flex flex-col justify-center items-center w-[90%] h-[90%] font-nanumSquareRoundB rounded-xl bg-[#fbfbfb] mr-[15px]"
              style={{ boxShadow: '0px 5px 15px 0 rgba(0,0,0,0.35)' }}
            >
              <div className="flex justify-center items-center w-[30%] h-[10%] rounded-[62.5px] bg-[#e4e6e8]">
                매물정보 요약
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[65%] h-full ">
          <div className="flex w-full h-[85%] justify-center items-center overflow-hidden">
            <div
              ref={contractPaperRef}
              className="flex ml-[60px] mr-[170px] w-full max-w-[800px] h-[600px] overflow-y-auto overflow-x-hidden rounded-[27.42px] cursor-pointer transform transition duration-300 hover:scale-[1.03]"
              style={{ boxShadow: '0px 6.8px 20.5px 0 rgba(0,0,0,0.35)' }}
              onClick={toggleModal}
            >
              <ContractPaper 
                ref={contractPaperRef} 
                onContentLoaded={() => setIsContentLoaded(true)} 
              />
            </div>
          </div>
          <div className="flex w-full h-[15%] justify-center items-start ">
            <div className="flex mr-[4%]">
              <Link to="">
                <button className="flex rounded-[62.2px]  mr-[70px] hover:shadow-inner ]">
                  <img src={ShareIcon} alt="공유" className="flex w-[53px] h-[53px] object-cover " />
                </button>
              </Link>
              <button className="flex rounded-[62.2px]  mr-[70px] hover:shadow-inner">
                <img src={DeleteIcon} alt="삭제" className="flex w-[53px] h-[53px] object-cover " />
              </button>
              <Link to="/Storage">
                <button className="flex rounded-[62.2px] mr-[70px] hover:shadow-inner" onClick={handleDownloadAndUpload}>
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
            className="flex w-[1214px] h-[80%] rounded-[27.42px] overflow-y-auto"
            style={{ boxShadow: '0px 6.8px 20.5px 0 rgba(0,0,0,0.35)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContractPaper onContentLoaded={() => {}} /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractPage;
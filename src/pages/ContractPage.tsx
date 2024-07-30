import { useState, useEffect, useRef, useCallback } from 'react';
import ContractPaper from '../components/ContractPaper';
import Navbar2 from '../components/Navbar2';
import PaperIcon from '../assets/img/PaperIcon.svg';
import DownloadIcon from '../assets/img/DownloadIcon.svg';
import UploadIcon from '../assets/img/UploadIcon.svg';
import html2canvas from 'html2canvas';
import axios from 'axios';

const ContractPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [roomDetail, setRoomDetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const contractPaperRef = useRef(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [contractList, setContractList] = useState<Array<{ name: string; url: string; createdDate: string }>>([]);
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [downloadMessage, setDownloadMessage] = useState<string>('');
  const [detailInfo, setDetailInfo] = useState<DetailInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [roomId, setRoomId] = useState<number | null>(null);

  useEffect(() => {
    const roomId = localStorage.getItem('roomId');
    if (roomId) {
      setRoomId(parseInt(roomId, 10));
    }
  }, []);

  const fetchDetailInfo = useCallback(async () => {
    if (!roomId) return;

    try {
      setIsLoading(true);
      const refreshToken = localStorage.getItem('refreshToken');

      const detailInfoResponse = await axios.get(`${import.meta.env.VITE_API_KEY}/options/crawling/${roomId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${refreshToken}`,
        },
      });

      setDetailInfo(detailInfoResponse.data.room_detail_info);
      setError(null);
    } catch (error) {
      setError('API 요청 중 오류가 발생했습니다.');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId) {
      fetchDetailInfo();
    }
  }, [fetchDetailInfo, roomId]);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/contracts/s3-list/`, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });
      
      // 날짜를 기준으로 내림차순 정렬 (최신순)
      const sortedContracts = response.data.sort((a, b) => {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
      
      setContractList(sortedContracts);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };

  const generateFileName = () => {
    const currentTime = new Date().toISOString().replace(/[:.]/g, '-');
    return `contract_${currentTime}.png`;
  };

  const handleDownload = async () => {
    if (contractPaperRef.current && isContentLoaded) {
      const element = contractPaperRef.current;
      const originalStyle = element.style.cssText;
      const originalHeight = element.style.height;
      const originalOverflow = element.style.overflow;

      try {
        element.style.width = 'auto';
        element.style.height = 'auto';
        element.style.overflow = 'visible';
        element.scrollTop = 0;

        const canvas = await html2canvas(element, {
          scrollY: -window.scrollY,
          height: element.scrollHeight,
          windowHeight: element.scrollHeight,
        });

        const pngData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const fileName = generateFileName();
        link.href = pngData;
        link.download = fileName;
        link.click();

        console.log('Contract image downloaded successfully');
        setDownloadMessage('다운로드되었습니다');
        setTimeout(() => setDownloadMessage(''), 3000); // 3초 후 메시지 제거
      } catch (error) {
        console.error('Error during download:', error);
        setDownloadMessage('다운로드 실패');
        setTimeout(() => setDownloadMessage(''), 3000);
      } finally {
        element.style.cssText = originalStyle;
        element.style.height = originalHeight;
        element.style.overflow = originalOverflow;
      }
    }
  };

  const handleUpload = async () => {
    if (contractPaperRef.current && isContentLoaded) {
      const element = contractPaperRef.current;
      const originalStyle = element.style.cssText;
      const originalHeight = element.style.height;
      const originalOverflow = element.style.overflow;

      try {
        element.style.width = 'auto';
        element.style.height = 'auto';
        element.style.overflow = 'visible';
        element.scrollTop = 0;

        const canvas = await html2canvas(element, {
          scrollY: -window.scrollY,
          height: element.scrollHeight,
          windowHeight: element.scrollHeight,
        });

        const dataUrl = canvas.toDataURL('image/png');
        const base64Data = dataUrl.split(',')[1];
        const fileName = generateFileName();
        const jsonData = {
          image_data: base64Data,
          file_name: fileName,
          content_type: 'image/png',
        };
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.post(`${import.meta.env.VITE_API_KEY}/contracts/s3-upload/`, jsonData, {
          headers: {
            accept: 'application/json',
            Authorization: `${refreshToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          console.log('Contract image uploaded successfully');
          setUploadMessage('업로드되었습니다');
          setTimeout(() => setUploadMessage(''), 3000); // 3초 후 메시지 제거
        } else {
          throw new Error('Failed to upload contract image');
        }
      } catch (error) {
        console.error('Error during upload:', error);
        setUploadMessage('업로드되었습니다');
        setTimeout(() => setUploadMessage(''), 3000);
      } finally {
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    return formatter.format(date);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex left-0 top-0 w-full h-[72px]">
        <Navbar2 />
      </div>
      <div className={`flex flex-row grow ${isModalOpen ? 'blur-sm' : ''}`}>
        <div className="flex flex-col w-[40%] h-full ">
          <div className="flex justify-end items-center w-full h-[45%] ">
          <div className="flex flex-col w-[90%] h-[80%] mr-[2.5%] font-nanumSquareRoundB text-[#49454f] overflow-y-auto">
            {contractList.map((contract, index) => (
              <button
                key={index}
                className={`flex flex-row items-center justify-between w-full min-h-[25%] ${
                  activeButtonIndex === index
                    ? 'bg-[#494949]/[0.11] text-[#357fff]'
                    : 'hover:text-[#357fff] hover:bg-[#357fff]/[0.11]'
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <img src={PaperIcon} alt="계약서로고" className="flex-shrink-0 w-[32.88px] h-[32px] ml-[30px]" />
                <span className="flex-grow flex justify-center items-center">
                  <p className="text-center">{contract.createdDate ? formatDate(contract.createdDate) : '날짜 정보를 가져올 수 없습니다.'}</p>
                </span>
                <div className="flex-shrink-0 w-[32.88px] mr-[30px]"></div> {/* 오른쪽 여백을 위한 빈 div */}
              </button>
            ))}
          </div>
          </div>
          <div className="flex justify-end items-start w-full h-[55%] ">
          <div className="flex flex-col w-[90%] h-[90%] font-nanumSquareRoundB rounded-xl bg-[#fbfbfb] mr-[15px] overflow-hidden"
            style={{ boxShadow: '0px 5px 15px 0 rgba(0,0,0,0.35)' }}>
            <div className="flex justify-center items-center w-full py-4">
              <div className="w-[30%] text-center rounded-[62.5px] bg-[#e4e6e8] py-2">
                매물정보 요약
              </div>
            </div>
            {isLoading ? (
              <p>로딩 중...</p>
            ) : error ? (
              <p>{error}</p>
            ) : detailInfo ? (
              <div className="flex-grow overflow-y-auto px-4 pb-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {[
                        { label: "소재지", value: detailInfo.location },
                        { label: "전용/공급면적", value: detailInfo.exclusive_overall_area },
                        { label: "관리비", value: detailInfo.maintenance_fee },
                        { label: "방종류", value: detailInfo.room_type },
                        { label: "방 수/욕실 수", value: detailInfo.num_rooms_bathrooms },
                        { label: "해당층/건물층", value: detailInfo.floor_building_floors },
                        { label: "방향", value: detailInfo.direction },
                        { label: "주차가능여부", value: detailInfo.parking_availability },
                        { label: "난방종류", value: detailInfo.heating_type },
                        { label: "입주가능일", value: detailInfo.move_in_date }
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b border-gray-200 font-[NanumSquareRoundEB] text-gray-700 w-1/3 bg-gray-100">
                            {item.label}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200 text-gray-800 bg-white">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p>정보가 없습니다.</p>
            )}
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
              <ContractPaper ref={contractPaperRef} onContentLoaded={() => setIsContentLoaded(true)} />
            </div>
          </div>
          <div className="flex w-full h-[15%] justify-center items-start ">
            <div className="flex mr-[4%]">
              <div className="flex flex-col items-center mr-[70px]">
                <button
                  className="flex flex-col items-center rounded-[62.2px] hover:shadow-inner"
                  onClick={handleUpload}
                >
                  <img src={UploadIcon} alt="업로드" className="flex w-[53px] h-[53px] object-cover" />
                  <span className="mt-2 text-sm font-nanumSquareRoundB">업로드</span>
                </button>
                {uploadMessage && (
                  <span className="mt-2 text-sm text-green-600">{uploadMessage}</span>
                )}
              </div>
              <div className="flex flex-col items-center mr-[70px]">
                <button
                  className="flex flex-col items-center rounded-[62.2px] hover:shadow-inner"
                  onClick={handleDownload}
                >
                  <img src={DownloadIcon} alt="다운로드" className="flex w-[53px] h-[53px] object-cover" />
                  <span className="mt-2 text-sm font-nanumSquareRoundB">다운로드</span>
                </button>
                {downloadMessage && (
                  <span className="mt-2 text-sm text-green-600">{downloadMessage}</span>
                )}
              </div>
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

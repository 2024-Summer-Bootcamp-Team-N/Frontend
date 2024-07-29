import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar2 from './Sidebar2';
import HouseImage from '../assets/img/HouseImage.png';
import { useMap } from './MapContext';
import { useRentContext } from './RentContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Info {
  id: number;
  price: string;
  room_info: string;
  link: string;
  maintenance_fee?: string;
}

const Sidebar: React.FC = () => {
  const [isSidebar2Open, setIsSidebar2Open] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
  const [infoList, setInfoList] = useState<Info[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setNewRoomInfoCounts } = useMap();
  const { isMonthlyRentActive, isDepositRentActive } = useRentContext(); // Access RentContext
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfoList = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const infoResponse = await axios.get(`${import.meta.env.VITE_API_KEY}/options/crawling/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${refreshToken}`,
          },
        });

        console.log('매물 정보 API 응답:', infoResponse.data);

        if (Array.isArray(infoResponse.data.new_room_info_list)) {
          const parsedInfoList = infoResponse.data.new_room_info_list.map((info: Info) => {
            const match = info.room_info.match(/관리비\s*(\S+)/);
            let maintenance_fee = match ? match[1] : '정보 없음';

            if (maintenance_fee === '확인') {
              maintenance_fee = '확인 불가';
            }

            const room_info = info.room_info
              .replace(/,?\s*관리비\s*확인\s*불가/, '')
              .replace(/,?\s*관리비\s*\S+/, '')
              .trim();

            return {
              ...info,
              maintenance_fee,
              room_info,
            };
          });
          setInfoList(parsedInfoList);
          setNewRoomInfoCounts(infoResponse.data.new_room_info_count);
          setError(null); // 성공 시 에러 상태 초기화
        } else {
          console.error('Expected an array but got:', infoResponse.data.new_room_info_list);
          setError('올바른 데이터 형식이 아닙니다.');
        }
      } catch (error) {
        setError('매물 정보를 불러오는 데 실패했습니다.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInfoList();
  }, [setNewRoomInfoCounts]);

  const handleOpenSidebar2 = (info: Info) => {
    setSelectedInfo(info);
    setIsSidebar2Open(true);
  };

  const handleCloseSidebar2 = () => {
    setIsSidebar2Open(false);
    setSelectedInfo(null);
  };

  const handleConsultingClick = () => {
    if (isMonthlyRentActive) {
      navigate('/monthlyconsulting');
    } else if (isDepositRentActive) {
      navigate('/depositconsulting');
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex flex-row items-center border-b-[1.5px] border-[#EBEBEB] w-full h-full min-h-[18.7%] max-h-[18.7%] p-4"
            >
              <Skeleton height={166} width={166} className="mr-4" />
              <div className="relative flex-col ml-4">
                <Skeleton width={140.97} height={29} className="absolute mb-[17px] left-0 -top-[20px]" />
                <Skeleton width={120} height={18} className="absolute mb-[3px] left-0" />
                <Skeleton width={120} height={18} className="absolute mb-[3px] left-0" />
                <Skeleton width={76} height={27} className="absolute mt-[15px] left-0" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-full">
          <p className="text-black">{error}</p>
        </div>
      );
    }

    return infoList.map((info) => (
      <div
        key={info.id}
        className="flex flex-row justify-center items-center border-b-[1.5px] border-[#EBEBEB] w-full h-full min-h-[25%] max-h-[25%] cursor-pointer hover:bg-gray-100"
        onClick={() => handleOpenSidebar2(info)}
      >
        <img
          src={HouseImage}
          alt="매물 사진"
          className="w-[166px] h-[166px] ml-[20px] border-[2px] flex object-cover"
        />
        <div className="flex-col ml-[30px] flex-grow">
          <div className="w-[140.97px] h-[29px] flex text-xl font-nanumSquareRoundB mb-[17px] text-left text-black hover:text-gray-600">
            {info.price}
          </div>
          <p className="flex flex-col w-full text-sm text-left font-nanumSquareRoundR text-black">
            <span className="flex text-sm text-left text-black mb-[3px]">{info.room_info}</span>
            <span className="flex text-sm text-left text-gray-600 mb-[3px]">관리비: {info.maintenance_fee}</span>
            <a href={info.link} className="text-blue-500 hover:underline">
              자세히 보기
            </a>
          </p>
          <div className="flex justify-start">
            <button
              onClick={handleConsultingClick}
              className="flex items-center w-[76px] h-[27px] justify-center rounded-[50px] mt-[15px] bg-[#efefef] hover:bg-gray-200"
              style={{
                boxShadow: '0px 2px 5px -1px rgba(50,50,93,0.25), 0px 1px 3px -1px rgba(0,0,0,0.3)',
              }}
            >
              <p className="flex text-[13px] font-bold text-black">상담하기</p>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col fixed top-0 right-0 w-[424px] h-full z-50">
        <div className="flex h-[194px] flex-none" />
        <div className="flex flex-col flex-grow w-full bg-white border-[1px] border-[#EBEBEB] overflow-y-auto">
          {renderContent()}
        </div>
      </div>
      {isSidebar2Open && selectedInfo && <Sidebar2 onClose={handleCloseSidebar2} roomId={selectedInfo.id} />}
    </>
  );
};

export default Sidebar;

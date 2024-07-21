import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar2 from './Sidebar2';
import HouseImage from '../assets/img/HouseImage.png';

interface SidebarProps {
  onClose: () => void;
}

interface Info {
  id: number;
  price: string;
  room_info: string;
  link: string;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isSidebar2Open, setIsSidebar2Open] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<Info | null>(null);
  const [infoList, setInfoList] = useState<Info[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfoList = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');

        // API 요청
        const infoResponse = await axios.get('/api/v1/options/crawling', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`, // 토큰 형식을 확인하세요
          },
        });

        console.log('매물 정보 API 응답:', infoResponse);

        // API 응답의 데이터가 배열인지 확인하고 설정
        if (Array.isArray(infoResponse.data)) {
          setInfoList(infoResponse.data);
        } else {
          setError('올바른 데이터 형식이 아닙니다.');
        }
      } catch (error) {
        setError('API 요청 중 오류가 발생했습니다.');
        console.error(error);
      }
    };

    fetchInfoList();
  }, []);

  const handleOpenSidebar2 = (info: Info) => {
    setSelectedInfo(info);
    setIsSidebar2Open(true);
  };

  const handleCloseSidebar2 = () => {
    setIsSidebar2Open(false);
    setSelectedInfo(null);
  };

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="flex flex-col fixed top-0 right-0 w-[424px] h-full mt-[194px] bg-white border-[1.5px] border-[#EBEBEB]">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {infoList.map((info) => (
            <div
              key={info.id}
              className="flex flex-row justify-center items-center border-b-[1.5px] border-[#EBEBEB] w-full h-full min-h-[25%] max-h-[25%]"
              onClick={() => handleOpenSidebar2(info)}
            >
              <img src={HouseImage} alt="매물 사진" className="w-[166px] h-[166px] border-[2px] flex object-cover" />
              <div className="flex-col ml-[15px]">
                <div className="w-[140.97px] h-[29px] flex text-xl font-nanumSquareRoundB mb-[17px] text-left text-black hover:text-gray-600">
                  {info.price}
                </div>
                <p className="flex flex-col w-full text-sm text-left font-nanumSquareRoundR text-black">
                  <span className="flex text-sm text-left text-black mb-[3px]">{info.room_info}</span>
                  <a href={info.link} className="text-blue-500 hover:underline">
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isSidebar2Open && selectedInfo && <Sidebar2 onClose={handleCloseSidebar2} roomId={selectedInfo.id} />}
    </>
  );
};

export default Sidebar;

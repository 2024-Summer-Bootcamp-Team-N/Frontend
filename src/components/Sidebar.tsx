import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar2 from './Sidebar2';
import HouseImage from '../assets/img/HouseImage.png';

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInfoList = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const infoResponse = await axios.get('http://localhost:8000/api/v1/options/crawling/', {
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
        } else {
          console.error('Expected an array but got:', infoResponse.data.new_room_info_list);
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
      <div className="flex flex-col fixed top-0 right-0 w-[424px] h-full mt-[194px] bg-white border-[1.5px] border-[#EBEBEB] z-50">
        <div className="flex flex-col w-full h-full overflow-y-auto">
          {infoList.map((info) => (
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
              <div className="flex-col ml-[30px]">
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
                  <Link
                    to="/consulting"
                    className="flex items-center w-[76px] h-[27px] justify-center rounded-[50px] mt-[15px] bg-[#efefef] hover:bg-gray-200"
                    style={{
                      boxShadow: '0px 2px 5px -1px rgba(50,50,93,0.25), 0px 1px 3px -1px rgba(0,0,0,0.3)',
                    }}
                  >
                    <p className="flex text-[13px] font-bold text-black">상담하기</p>
                  </Link>
                </div>
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

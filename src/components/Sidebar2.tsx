import { useEffect, useState } from 'react';
import axios from 'axios';
import Inside from '../assets/img/Inside.svg';
import { useMap } from './MapContext';

interface Sidebar2Props {
  onClose: () => void;
  roomId: number;
}

interface DetailInfo {
  id: number;
  location: string;
  exclusive_overall_area: string;
  maintenance_fee: string;
  room_type: string;
  num_rooms_bathrooms: string;
  floor_building_floors: string;
  direction: string;
  parking_availability: string;
  total_parking_spaces: string;
  heating_type: string;
  building_use: string;
  approval_date: string;
  initial_registration_date: string;
  image_url: string;
  move_in_date: string;
  room: number;
}

const Sidebar2 = ({ onClose, roomId }: Sidebar2Props) => {
  const [detailInfo, setDetailInfo] = useState<DetailInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setLocation } = useMap();
  // const { setSelectedRoom } = useMap();

  useEffect(() => {
    let isMounted = true; // 이 컴포넌트가 마운트된 상태인지 확인하는 플래그

    const fetchDetailInfo = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const detailInfoResponse = await axios.get(`${import.meta.env.VITE_API_KEY}/options/crawling/${roomId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${refreshToken}`,
          },
        });

        console.log('매물 상세정보 API 응답:', detailInfoResponse);

        if (isMounted) {
          // 컴포넌트가 마운트된 상태에서만 상태 업데이트
          setDetailInfo(detailInfoResponse.data.room_detail_info);
          setLocation(detailInfoResponse.data.room_detail_info.location); // location 값 설정

          // setSelectedRoom({
          //   type: detailInfoResponse.data.room_detail_info.room_type,
          //   price: detailInfoResponse.data.room_detail_info.price,
          //   area: detailInfoResponse.data.room_detail_info.exclusive_overall_area,
          // });
        }
      } catch (error) {
        if (isMounted) {
          setError('Failed to fetch data');
        }
        console.log(error);
      }
    };

    fetchDetailInfo();

    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.sidebar2-modal') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      isMounted = false; // 컴포넌트 언마운트 시 플래그 변경
      document.removeEventListener('mousedown', handleOutsideClick);
      // 컴포넌트 언마운트 시 로컬 스토리지에서 좌표 값 삭제
      localStorage.removeItem('latitude');
      localStorage.removeItem('longitude');
    };
  }, [onClose, roomId, setLocation]);

  if (error) return <div>{error}</div>;

  if (!detailInfo) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col sidebar2-modal fixed top-0 right-[424px] mt-[194px] w-[424px] h-[886px] bg-white border-[1.5px] border-[#EBEBEB] overflow-y-auto">
      <div className="flex w-auto h-auto items-center bg-[#e0e0e0]">
        <img
          src={detailInfo.image_url || Inside}
          alt="매물 사진"
          className="flex flex-col items-center w-full h-full"
        />
        <button onClick={onClose} className="absolute top-1 opacity-70">
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
              stroke="#494949"
              strokeWidth="2.59259"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-100 z-50"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="flex flex-row justify-start w-full h-[54px] bg-white border border-[#ebebeb]">
          <div className="flex flex-col ml-[13px] h-full">
            <p className="w-[109px] h-full text-[15px] font-bold text-center mt-[14px] text-black">매물정보</p>
            <svg
              width={65}
              height={4}
              viewBox="0 0 65 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="ml-[22px] flex justify-center"
            >
              <path d="M0 2H34.7674H65" stroke="#357FFF" strokeWidth={3} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <table className="table-auto border-collapse bg-white text-[14px] font-nanumSquareRoundB w-full">
          <tbody>
            <tr className="border-t border-b">
              <td className="border-t text-left bg-[#FAFAFA] text-[#848484] p-[7px]">소재지</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                {detailInfo.location}
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">전용/공급면적</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                {detailInfo.exclusive_overall_area}
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">관리비</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                {detailInfo.maintenance_fee}
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방종류</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.room_type}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방 수/욕실 수</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.num_rooms_bathrooms}</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">해당층/건물층</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.floor_building_floors}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방향</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.direction}</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">주차가능여부</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.parking_availability}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">총주차대수</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.total_parking_spaces}</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">난방종류</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.heating_type}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">건축물용도</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.building_use}</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">입주가능일</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.move_in_date}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">호실</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.room}</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">사용승인일</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.approval_date}</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">최초등록일</td>
              <td className="text-left text-[#393939] p-[7px]">{detailInfo.initial_registration_date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar2;

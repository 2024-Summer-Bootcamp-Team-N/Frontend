import { useEffect } from 'react';
import Graph1 from '../assets/img/Graph1.svg';
import Graph2 from '../assets/img/Graph2.svg';
import Avatar from '../assets/img/Avatar.svg';
interface Sidebar2Props {
  onClose: () => void;
}

const Sidebar2 = ({ onClose }: Sidebar2Props) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.sidebar2-modal') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="flex flex-col sidebar2-modal fixed bottom-0 right-[424px] w-[424px] h-[886px] bg-white border-[1.5px] border-[#EBEBEB] overflow-y-auto">
      <div className="flex w-full h-full items-center  bg-[#e0e0e0]">
        <img src={Avatar} alt="매물 사진" className="flex flex-col items-center w-full h-full border-[2px]" />
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
              <path d="M0 2H34.7674H65" stroke="#357FFF" stroke-width={3} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <table className="table-auto border-collapse bg-white text-[14px] font-nanumSquareRoundB w-full">
          <tbody>
            <tr className="border-t border-b ">
              <td className="border-t text-left bg-[#FAFAFA] text-[#848484] p-[7px]">소재지</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                서울시 강남구 삼성동
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">전용/공급면적</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                29.72㎡/131.42㎡
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">관리비</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                8만원
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방종류</td>
              <td className="text-left text-[#393939] p-[7px]">투룸</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방 수/욕실 수</td>
              <td className="text-left text-[#393939] p-[7px]">4/2개</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">해당층/건물층</td>
              <td className="text-left text-[#393939] p-[7px]">2/3층</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">방향</td>
              <td className="text-left text-[#393939] p-[7px]">동</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">주차가능여부</td>
              <td className="text-left text-[#393939] p-[7px]">불가능</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">총주차대수</td>
              <td className="text-left text-[#393939] p-[7px]">-</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">난방종류</td>
              <td className="text-left text-[#393939] p-[7px]">개별난방</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">건축물용도</td>
              <td className="text-left text-[#393939] p-[7px]">공동주택</td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">입주가능일</td>
              <td colSpan={3} className="text-left text-[#393939] p-[7px]">
                2024.08.12
              </td>
            </tr>
            <tr className="border-b">
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">사용승인일</td>
              <td className="text-left text-[#393939] p-[7px]">2019.12.11</td>
              <td className="text-left bg-[#FAFAFA] text-[#848484] p-[7px]">최초등록일</td>
              <td className="text-left text-[#393939] p-[7px]">2024.07.03</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={Graph1} className="flex w-full" alt="그래프" />
      <img src={Graph2} className="flex w-full" alt="그래프" />
    </div>
  );
};

export default Sidebar2;

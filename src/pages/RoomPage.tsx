import { useLocation } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Map from '../components/Map';
import SelectedIcon from '../assets/img/SelectedIcon.svg';
import SelectedIcon2 from '../assets/img/SelectedIcon2.svg';

const RoomPage = () => {
  const location = useLocation();
  const { state } = location;

  const storedTransactionType = localStorage.getItem('transactionType');

  const transactionType = storedTransactionType;

  console.log('State:', state);
  console.log('거래유형:', transactionType);

  return (
    <div className="flex flex-col min-h-screen w-full h-full overflow-hidden bg-white">
      <Navbar2 />
      {/* 거주형태 */}
      <div className="flex border-b-[1.5px] border-[#EBEBEB] w-full h-[61px] justify-start items-center font-[NanumSquareRoundB] text-[18px] text-black mt-[72px]">
        <div className="relative w-[130px] h-[61px] flex items-center justify-center">아파트</div>
        <div className="relative w-[130px] h-[61px] flex items-center justify-center">
          오피스텔
          <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]" />
        </div>
        <div className="relative w-[130px] h-[61px] flex items-center justify-center">
          빌라 ∙ 주택
          <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]" />
        </div>
        <div className="relative w-[130px] h-[61px] flex items-center justify-center text-[#357FFF]">
          원룸 ∙ 투룸
          <div className="absolute left-0 w-[2px] h-[30%] bg-[#E0E0E0]" />
          <div className="absolute bottom-0 w-[80%] h-[4px] bg-[#357FFF]" />
        </div>
      </div>
      {/* options */}
      <div className="flex relative w-full h-[61px] justify-start items-center font-[NanumSquareRoundB] text-[16px] text-black border-b-[1px] border-[#EBEBEB]">
        <div className="flex w-[100px] h-[35px] ml-[30px] mr-[10px] justify-center items-center rounded-[30px] bg-white border border-[#357fff]">
          <p className="flex font-[NanumSquareRoundB] text-[16px] text-[#357fff]">{transactionType}</p>
        </div>
        <span className="border-l-2 border-[#E0E0E0] h-[19px] mx-[10px]" />
        <div
          className={`flex flex-row justify-start items-center w-[100px] h-[35px] mx-[10px] rounded-lg ${
            state?.isShortLease ? 'bg-[#E3F3FF]' : 'bg-white border border-[#B0B0B0]'
          }`}
        >
          <img src={state?.isShortLease ? SelectedIcon2 : SelectedIcon} alt="Selected Icon" className="flex ml-[7px]" />
          <p
            className={`flex ml-[5px] font-[NanumSquareRoundB] text-[16px] ${
              state?.isShortLease ? 'text-[#357FFF]' : 'text-[#919191]'
            }`}
          >
            단기임대
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center w-[100px] h-[35px] mx-[10px] rounded-lg ${
            state?.canParking ? 'bg-[#E3F3FF]' : 'bg-white border border-[#B0B0B0]'
          }`}
        >
          <img src={state?.canParking ? SelectedIcon2 : SelectedIcon} alt="Selected Icon" className="flex ml-[7px]" />
          <p
            className={`flex ml-[5px] font-[NanumSquareRoundB] text-[16px] ${
              state?.canParking ? 'text-[#357FFF]' : 'text-[#919191]'
            }`}
          >
            주차가능
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center w-[110px] h-[35px] mx-[10px] rounded-lg ${
            state?.hasElevator ? 'bg-[#E3F3FF]' : 'bg-white border border-[#B0B0B0]'
          }`}
        >
          <img src={state?.hasElevator ? SelectedIcon2 : SelectedIcon} alt="Selected Icon" className="flex ml-[7px]" />
          <p
            className={`flex ml-[5px] font-[NanumSquareRoundB] text-[16px] ${
              state?.hasElevator ? 'text-[#357FFF]' : 'text-[#919191]'
            }`}
          >
            엘리베이터
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center w-[100px] h-[35px] mx-[10px] rounded-lg ${
            state?.isDivision ? 'bg-[#E3F3FF]' : 'bg-white border border-[#B0B0B0]'
          }`}
        >
          <img src={state?.isDivision ? SelectedIcon2 : SelectedIcon} alt="Selected Icon" className="flex ml-[7px]" />
          <p
            className={`flex ml-[10px] font-[NanumSquareRoundB] text-[16px] ${
              state?.isDivision ? 'text-[#357FFF]' : 'text-[#919191]'
            }`}
          >
            분리형
          </p>
        </div>
        <div
          className={`flex flex-row justify-start items-center w-[100px] h-[35px] ml-[10px] rounded-lg ${
            state?.isDuplex ? 'bg-[#E3F3FF]' : 'bg-white border border-[#B0B0B0]'
          }`}
        >
          <img src={state?.isDuplex ? SelectedIcon2 : SelectedIcon} alt="Selected Icon" className="flex ml-[7px]" />
          <p
            className={`flex ml-[15px] font-[NanumSquareRoundB] text-[16px] ${
              state?.isDuplex ? 'text-[#357FFF]' : 'text-[#919191]'
            }`}
          >
            복층
          </p>
        </div>
      </div>
      {/* 지도 표시 영역 */}
      <Map />
    </div>
  );
};

export default RoomPage;

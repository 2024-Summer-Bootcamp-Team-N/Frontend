import React, { useRef } from 'react';
import Avatar from '../assets/img/Avatar.svg';
import Navbar2 from '../components/Navbar2.tsx';
import { Link } from 'react-router-dom';
import AirplaneBtn from '../assets/img/AirplaneBtn.svg';
import Arrow from '../assets/img/Arrow.svg';

const DepositConsultingPage: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (text: string) => {
    if (textareaRef.current) {
      textareaRef.current.value = text;
    }
    if (sendButtonRef.current) {
      sendButtonRef.current.click();
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-[72px] justify-start">
        <Navbar2 />
      </div>
      <div className="flex flex-grow bg-[#FEFEFE] ">
        {/* Left Container */}
        <div className="flex flex-col justify-center min-w-[23%] bg-[#FAFAFA] h-full border border-gray p-4">
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-end justify-start w-[250px] h-[30px] pb-[20px] ml-[20px]">
              <p className="text-[22px] font-[NanumSquareEB] text-black">💡 이런 질문을 해보세요!</p>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('계약 시 주의사항')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">계약 시 주의사항</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('세금 및 기타 내용')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">세금 및 기타 내용</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-start">
                <button
                  className="flex relative w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                  onClick={() => handleButtonClick('이사 및 정착 팁')}
                >
                  <p className="absolute text-[18px] font-[NanumSquareB] text-black">이사 및 정착 팁</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-end justify-start w-[250px] h-[100px] pb-[20px] ml-[20px]">
              <p className="text-[22px] font-[NanumSquareEB] text-black">🚨 전세사기</p>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('등기부 확인하기')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">등기부 확인하기</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('전세와 매매 비교')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">전세와 매매 비교</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('다세대 주택이란')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">다세대 주택이란</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('다가구 주택이란')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">다가구 주택이란</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('집주인 정보 확인')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">집주인 정보 확인</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                    onClick={() => handleButtonClick('대리인 확인하기')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">대리인 확인하기</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-start">
                <button
                  className="flex relative w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#f0f0f0]"
                  onClick={() => handleButtonClick('가짜 계약 주의사항')}
                >
                  <p className="absolute text-[18px] font-[NanumSquareB] text-black">가짜 계약 주의사항</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start w-[77%] ml-[100px] mr-[200px]">
          {/* Chat Container */}
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full p-4 space-y-4 overflow-y-auto flex-grow">
              {/* Chat Bubble */}
              <img src={Avatar} alt="Logo" className="flex justify-start p-4" />
              <div className="flex flex-col w-full items-start">
                <p className="flex w-full ml-[10px] font-nanumSquareRoundR text-[#8e8d94]">집피티</p>
                <div className="flex max-w-[40%] py-3 px-4 bg-[#F5F5F5] rounded-2xl">
                  <p className="text-lg font-nanumSquareRoundR text-black">
                    해당 지역은 전월세전환율이 ~입니다. 월세가 전세보다 상대적으로 불리한 조건일수도 있어요. 전세도
                    고려해보시면 좋을듯요 or 월세로 입주하는건 좋은 선택인 것 같아요.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full p-4 space-y-4 overflow-y-auto flex-grow">
              <div className="flex max-w-[40%] py-3 px-4 bg-[#357FFF] rounded-2xl">
                <p className="text-lg font-nanumSquareRoundR text-white">시그니엘.</p>
              </div>
            </div>
            <div className="flex flex-row w-full p-4 space-y-4 overflow-y-auto flex-grow">
              <img src={Avatar} alt="Logo" className="flex justify-start p-4" />
              <div className="flex flex-col w-full items-start">
                <p className="flex w-full ml-[10px] font-nanumSquareRoundR text-[#8e8d94]">집피티</p>
                <div className="flex max-w-[40%] py-3 px-4 bg-[#F5F5F5] rounded-2xl">
                  <p className="text-lg font-nanumSquareRoundR text-black">
                    해당 지역은 전월세전환율이 ~입니다. 월세가 전세보다 상대적으로 불리한 조건일수도 있어요. 전세도
                    고려해보시면 좋을듯요 or 월세로 입주하는건 좋은 선택인 것 같아요.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full p-4 space-y-4 overflow-y-auto flex-grow">
              <div className="flex max-w-[40%] py-3 px-4 bg-[#357FFF] rounded-2xl">
                <p className="text-lg font-nanumSquareRoundR text-white">시그니엘.</p>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full p-4 space-y-4 overflow-y-auto flex-grow">
              <img src={Avatar} alt="AI" className="flex  items-center justify-start p-4" />
              <div className="flex flex-col w-full items-start">
                <p className="flex w-full ml-[10px] font-nanumSquareRoundR text-[#8e8d94]">집피티</p>
                <div className="flex max-w-[40%] py-3 px-4 bg-[#F5F5F5] rounded-2xl">
                  <p className="text-lg font-nanumSquareRoundR text-black">10억.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-row justify-center items-center h-grow w-full p-4 ml-[25px]">
            <div className="flex min-w-[45%] max-w-[45%] h-[43px] border border-gray-300 rounded-2xl font-nanumSquareRoundR ">
              <textarea
                ref={textareaRef}
                wrap="soft"
                placeholder="질문을 입력해보세요."
                className="flex justify-center min-w-[93%] max-w-[93%] resize-none outline-none overflow-y rounded-2xl p-2 ml-[10px]"
              />
              <div className="flex flex-col justify-center">
                <button ref={sendButtonRef} className="flex justify-center items-center">
                  <img src={AirplaneBtn} className="flex p-1 mr-5 my-1.5" />
                </button>
              </div>
            </div>
            <div className="flex flex-row">
              <Link to="/contract">
                <button className="flex flex-row ml-2 p-2 bg-[#FEFEFE] text-[#555] font-nanumSquareRoundEB rounded-lg">
                  <div className="flex flex-col">
                    계약하기
                    <svg width={66} height={3} viewBox="0 0 58 3" preserveAspectRatio="none">
                      <path d="M-0.00390625 1.5H58.0047" stroke="#555" stroke-width="1.5" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <img src={Arrow} className="flex my-1.5 ml-0.5" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositConsultingPage;

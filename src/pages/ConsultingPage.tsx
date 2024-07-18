import React from 'react';
import Avatar from '../assets/img/Avatar.svg';
import Navbar2 from '../components/Navbar2.tsx';
import Questions from '../assets/img/Questions.svg';
import { Link } from 'react-router-dom';
const ConsultingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-[72px] justify-start">
        <Navbar2 />
      </div>
      <div className="flex flex-grow bg-[#FEFEFE] ">
        {/* Left Container */}
        <div className="flex flex-col items-center justify-center min-w-[23%] bg-[#FAFAFA] h-full border border-gray d-1 p-4">
          <div className="flex flex-col rounded-3xl bg-[#F0F0F0] w-[91%] mx-4 p-10 space-y-2">
            <div className="flex flex-row w-full justify-center items-center mb-4 p-2 flex-grow">
              <div className="flex flex-row h-[50px] bg-[#E4E6E8] p-3 rounded-3xl">
                <p className="flex text-lg text-xl font-nanumSquareRoundEB mb-4">매물정보 요약</p>
              </div>
            </div>
            <div className="flex -mx-4">
              <button className="bg-[#D9D9D9] w-full p-2 font-nanumSquareRoundR rounded-2xl">
                근방 편의시설 간단요약
              </button>
            </div>
            <div className="flex  justify-center -mx-4">
              <button className="bg-[#D9D9D9] w-full p-2 font-nanumSquareRoundR rounded-2xl">근처 교통시설 정보</button>
            </div>
            <div className="flex justify-center -mx-4">
              <button className="bg-[#D9D9D9] w-full p-2 font-nanumSquareRoundR rounded-2xl">기타</button>
            </div>
            <div className="flex justify-center -mx-4">
              <button className="bg-[#D9D9D9] w-full p-2 font-nanumSquareRoundR rounded-2xl">등등</button>
            </div>
          </div>
          <div className="relative group">
            <button className="mt-4 font-nanumSquareRoundR">💡 이런 질문을 해보세요!</button>
            {Questions && (
              <div className="relative invisible group-hover:visible group-hover:flex">
                <img
                  className="h-auto transition-transform duration-300 ease-in-out"
                  alt="호버질문"
                  src={Questions}
                  style={{ width: '300px', height: 'auto' }} // 이미지 크기를 조절할 수 있습니다.
                />
              </div>
            )}
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
                wrap="soft"
                placeholder="질문을 입력해보세요."
                className="flex justify-center min-w-[93%] max-w-[93%] resize-none outline-none overflow-y rounded-2xl p-2 "
              />
              <div className="flex flex-col justify-center">
                <button className="flex justify-center items-center">
                  <svg
                    width={29}
                    height={26}
                    viewBox="0 0 29 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex p-1 mx-2 my-1.5"
                    preserveAspectRatio="none"
                  >
                    <rect width={29} height="25.89" fill="white" />
                    <path
                      d="M26.5837 2.15771L13.292 14.024M26.5837 2.15771L18.1253 23.7327L13.292 14.024M26.5837 2.15771L2.41699 9.70896L13.292 14.024"
                      stroke="#555555"
                      stroke-width="2.86361"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
                    <svg
                      className="flex my-1.5 ml-0.5"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M12.175 7L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9L0 9L0 7L12.175 7Z"
                        fill="#555555"
                      />
                    </svg>
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

export default ConsultingPage;

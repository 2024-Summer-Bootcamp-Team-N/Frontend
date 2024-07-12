import React, { useState } from 'react';
import Avatar from '../assets/img/Avatar.svg';
import LogoBlue from '../assets/img/LogoBlue.svg';
interface Message {
  text: string;
  user: boolean;
}

const Consulting = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');
    }
  };

  return (
    <div className="w-[1920px] h-[1080px] relative overflow-hidden bg-[#fefefe]">
      <svg
        width={500}
        height={1008}
        viewBox="0 0 500 1008"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-33px] top-[71px]"
        preserveAspectRatio="none"
      >
        <path
          d="M-31.5 10C-31.5 4.75332 -27.2467 0.5 -22 0.5H490C495.247 0.5 499.5 4.75329 499.5 10V998C499.5 1003.25 495.247 1007.5 490 1007.5H-22C-27.2467 1007.5 -31.5 1003.25 -31.5 998V10Z"
          fill="#FAFAFA"
          stroke="#EBEBEB"
        />
      </svg>
      <div className="w-[752px] h-[52px]">
        <div className="w-[752px] h-[52px] absolute left-[820.5px] top-[925.5px] rounded-[50px] bg-white border border-[#d9d9d9]" />
        <svg
          width={29}
          height={26}
          viewBox="0 0 29 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[29px] h-[25.89px] absolute left-[1523px] top-[942px]"
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
        <p className="absolute left-[849px] top-[941px] text-xl text-left text-[#8d8d8d]">질문을 입력해보세요.</p>
      </div>
      <div className="flex flex-col justify-start items-start w-[508px] h-[82px] absolute left-[1314px] top-[608px] gap-[3.2234041690826416px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[19.340425491333008px]">
          <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#8e8d94]">Your name</p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
          </div>
          <div className="flex justify-start items-start flex-grow relative gap-[5.1717448234558105px] py-[14.505318641662598px] bg-[#357fff] border-[0.81px] border-[#357fff]">
            <p className="flex-grow w-[460.42px] text-[22px] text-left text-white">시그니엘 아니면 안될 것 같아.</p>
          </div>
          <div className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <svg
              width={30}
              height={19}
              viewBox="0 0 30 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow"
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6007 9.2201C19.9551 6.74973 20.7253 3.91354 20.7253 0.897461H1.07264V18.2343H3.38839C6.97969 18.2343 10.3159 17.1424 13.0833 15.2724C16.4254 16.7233 22.0861 18.2123 29 17.4461C27.1899 16.9733 20.208 14.1363 20.4666 8.46246C20.0486 8.8128 19.3908 9.05653 18.6007 9.2201Z"
                fill="#357FFF"
              />
              <path
                d="M20.7253 0.897461V0.494535H21.1282V0.897461H20.7253ZM18.6007 9.2201L18.6824 9.61466L17.8279 9.79156L18.2474 9.02639L18.6007 9.2201ZM1.07264 0.897461H0.669712V0.494535H1.07264V0.897461ZM1.07264 18.2343V18.6373H0.669712V18.2343H1.07264ZM13.0833 15.2724L12.8577 14.9385L13.0409 14.8147L13.2437 14.9028L13.0833 15.2724ZM29 17.4461L29.1018 17.0563L29.0444 17.8466L29 17.4461ZM20.4666 8.46246L20.2078 8.15364L20.9109 7.56442L20.8691 8.4808L20.4666 8.46246ZM21.1282 0.897461C21.1282 3.98294 20.3401 6.88556 18.954 9.41381L18.2474 9.02639C19.5701 6.6139 20.3223 3.84414 20.3223 0.897461H21.1282ZM1.07264 0.494535H20.7253V1.30039H1.07264V0.494535ZM0.669712 18.2343V0.897461H1.47556V18.2343H0.669712ZM3.38839 18.6373H1.07264V17.8314H3.38839V18.6373ZM13.3089 15.6062C10.477 17.5198 7.06259 18.6373 3.38839 18.6373V17.8314C6.89678 17.8314 10.1549 16.7649 12.8577 14.9385L13.3089 15.6062ZM29.0444 17.8466C22.0508 18.6216 16.3196 17.1166 12.9228 15.642L13.2437 14.9028C16.5312 16.33 22.1214 17.803 28.9556 17.0456L29.0444 17.8466ZM20.8691 8.4808C20.7485 11.1281 22.3114 13.144 24.2017 14.5842C26.0913 16.0238 28.2385 16.8308 29.1018 17.0563L28.8982 17.836C27.9514 17.5886 25.7026 16.7407 23.7134 15.2252C21.7249 13.7103 19.9262 11.4707 20.0641 8.44411L20.8691 8.4808ZM18.519 8.82554C19.2892 8.66608 19.8673 8.43898 20.2078 8.15364L20.7254 8.77128C20.2298 9.18661 19.4923 9.44699 18.6824 9.61466L18.519 8.82554Z"
                fill="#357FFF"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[508px] h-[82px] absolute left-[1314px] top-[326px] gap-[3.2234041690826416px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[19.340425491333008px]">
          <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#8e8d94]">Your name</p>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
          </div>
          <div className="flex justify-start items-start flex-grow relative gap-[5.1717448234558105px] py-[14.505318641662598px] bg-[#357fff] border-[0.81px] border-[#357fff]">
            <p className="flex-grow w-[460.42px] text-[22px] text-left text-white">시그니엘.</p>
          </div>
          <div className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
            <div className="flex-grow w-[19.65px] rounded-tl-[51.72px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <div className="flex-grow w-[19.65px] bg-[#357fff] border-[0.81px] border-[#357fff]" />
            <svg
              width={30}
              height={19}
              viewBox="0 0 30 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow"
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6007 9.2201C19.9551 6.74973 20.7253 3.91354 20.7253 0.897461H1.07264V18.2343H3.38839C6.97969 18.2343 10.3159 17.1424 13.0833 15.2724C16.4254 16.7233 22.0861 18.2123 29 17.4461C27.1899 16.9733 20.208 14.1363 20.4666 8.46246C20.0486 8.8128 19.3908 9.05653 18.6007 9.2201Z"
                fill="#357FFF"
              />
              <path
                d="M20.7253 0.897461V0.494535H21.1282V0.897461H20.7253ZM18.6007 9.2201L18.6824 9.61466L17.8279 9.79156L18.2474 9.02639L18.6007 9.2201ZM1.07264 0.897461H0.669712V0.494535H1.07264V0.897461ZM1.07264 18.2343V18.6373H0.669712V18.2343H1.07264ZM13.0833 15.2724L12.8577 14.9385L13.0409 14.8147L13.2437 14.9028L13.0833 15.2724ZM29 17.4461L29.1018 17.0563L29.0444 17.8466L29 17.4461ZM20.4666 8.46246L20.2078 8.15364L20.9109 7.56442L20.8691 8.4808L20.4666 8.46246ZM21.1282 0.897461C21.1282 3.98294 20.3401 6.88556 18.954 9.41381L18.2474 9.02639C19.5701 6.6139 20.3223 3.84414 20.3223 0.897461H21.1282ZM1.07264 0.494535H20.7253V1.30039H1.07264V0.494535ZM0.669712 18.2343V0.897461H1.47556V18.2343H0.669712ZM3.38839 18.6373H1.07264V17.8314H3.38839V18.6373ZM13.3089 15.6062C10.477 17.5198 7.06259 18.6373 3.38839 18.6373V17.8314C6.89678 17.8314 10.1549 16.7649 12.8577 14.9385L13.3089 15.6062ZM29.0444 17.8466C22.0508 18.6216 16.3196 17.1166 12.9228 15.642L13.2437 14.9028C16.5312 16.33 22.1214 17.803 28.9556 17.0456L29.0444 17.8466ZM20.8691 8.4808C20.7485 11.1281 22.3114 13.144 24.2017 14.5842C26.0913 16.0238 28.2385 16.8308 29.1018 17.0563L28.8982 17.836C27.9514 17.5886 25.7026 16.7407 23.7134 15.2252C21.7249 13.7103 19.9262 11.4707 20.0641 8.44411L20.8691 8.4808ZM18.519 8.82554C19.2892 8.66608 19.8673 8.43898 20.2078 8.15364L20.7254 8.77128C20.2298 9.18661 19.4923 9.44699 18.6824 9.61466L18.519 8.82554Z"
                fill="#357FFF"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[657.39px] h-[351px]">
        <div className="flex flex-col justify-start items-start w-[550.79px] h-[133px] absolute left-[676.6px] top-[701px] gap-[6.686026573181152px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[37.88748550415039px]">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#8e8d94]">고창석</p>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <svg
                width={40}
                height={27}
                viewBox="0 0 40 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0855 12.978C13.1481 9.45268 12.0461 5.40337 12.0461 1.09668H39.222V25.8021H36.7515C31.5781 25.8021 26.776 24.2119 22.8075 21.4937C18.2128 23.5883 10.2994 25.7863 0.603516 24.679C3.10655 24.0052 12.7611 19.9625 12.4035 11.8771C12.9995 12.3918 13.9477 12.745 15.0855 12.978Z"
                  fill="#EAEAEA"
                />
                <path
                  d="M12.0461 1.09668V0.539511H11.489V1.09668H12.0461ZM15.0855 12.978L14.9737 13.5239L16.1541 13.7656L15.5738 12.7097L15.0855 12.978ZM39.222 1.09668H39.7791V0.539511H39.222V1.09668ZM39.222 25.8021V26.3592H39.7791V25.8021H39.222ZM22.8075 21.4937L23.1224 21.034L22.8627 20.8561L22.5764 20.9867L22.8075 21.4937ZM0.603516 24.679L0.458689 24.141L0.540298 25.2326L0.603516 24.679ZM12.4035 11.8771L12.7677 11.4554L11.7898 10.6109L11.8469 11.9017L12.4035 11.8771ZM11.489 1.09668C11.489 5.49954 12.6158 9.64088 14.5972 13.2464L15.5738 12.7097C13.6805 9.26448 12.6033 5.3072 12.6033 1.09668H11.489ZM39.222 0.539511H12.0461V1.65385H39.222V0.539511ZM39.7791 25.8021V1.09668H38.6648V25.8021H39.7791ZM36.7515 26.3592H39.222V25.2449H36.7515V26.3592ZM22.4926 21.9533C26.5509 24.7331 31.4622 26.3592 36.7515 26.3592V25.2449C31.694 25.2449 27.0011 23.6907 23.1224 21.034L22.4926 21.9533ZM0.540298 25.2326C10.3513 26.353 18.3663 24.1307 23.0386 22.0006L22.5764 20.9867C18.0593 23.046 10.2474 25.2195 0.666733 24.1254L0.540298 25.2326ZM11.8469 11.9017C12.0145 15.6902 9.84406 18.5685 7.23219 20.6192C4.61919 22.6707 1.65085 23.8201 0.458689 24.141L0.748343 25.217C2.05921 24.8641 5.16968 23.6553 7.92033 21.4956C10.6721 19.3351 13.1502 16.1494 12.9602 11.8525L11.8469 11.9017ZM15.1973 12.4322C14.0873 12.2048 13.2537 11.8752 12.7677 11.4554L12.0394 12.2988C12.7452 12.9083 13.8082 13.2851 14.9737 13.5239L15.1973 12.4322Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>
            <div className="flex justify-start items-start flex-grow relative gap-[7.151533126831055px] py-[20.058080673217773px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]">
              <p className="flex-grow w-[484.99px] text-[22px] text-left text-black">10억.</p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
            </div>
          </div>
        </div>
        <div className="w-[88.52px] h-[94.66px] absolute left-[570px] top-[483px] overflow-hidden rounded-[94.66px] bg-black/10">
          <img
            src={Avatar}
            alt="AI"
            className="w-[125.97px] h-[125.97px] absolute left-[-17.86px] top-[4.71px] object-cover"
          />
        </div>
      </div>
      <div className="w-[657.39px] h-[436.66px]">
        <div className="flex flex-col justify-start items-start w-[550.79px] h-[133px] absolute left-[676.6px] top-[421px] gap-[6.686026573181152px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[37.88748550415039px]">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] font-nanumSquareRoundR text-left text-[#8e8d94]">
              고창석
            </p>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <svg
                width={41}
                height={60}
                viewBox="0 0 41 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0841 33.074C13.0589 32.5946 13.0461 32.1119 13.0461 31.6263V1.09668H40.222V58.8021C32.8623 58.8021 26.1859 55.8765 21.2923 51.1248C16.5755 55.1047 9.7129 58.342 1.60352 56.1789C3.78587 54.8067 11.4047 47.4528 13.0841 33.074Z"
                  fill="#EAEAEA"
                />
                <path
                  d="M13.0841 33.074L13.6375 33.1386L13.6429 33.0918L13.6405 33.0448L13.0841 33.074ZM13.0461 1.09668V0.539511H12.489V1.09668H13.0461ZM40.222 1.09668H40.7791V0.539511H40.222V1.09668ZM40.222 58.8021V59.3592H40.7791V58.8021H40.222ZM21.2923 51.1248L21.6805 50.7251L21.3186 50.3737L20.933 50.699L21.2923 51.1248ZM1.60352 56.1789L1.30695 55.7072L0.224609 56.3877L1.45992 56.7172L1.60352 56.1789ZM12.489 31.6263C12.489 32.1217 12.502 32.6141 12.5276 33.1032L13.6405 33.0448C13.6158 32.5751 13.6033 32.1022 13.6033 31.6263H12.489ZM12.489 1.09668V31.6263H13.6033V1.09668H12.489ZM40.222 0.539511H13.0461V1.65385H40.222V0.539511ZM40.7791 58.8021V1.09668H39.6648V58.8021H40.7791ZM20.9042 51.5246C25.8975 56.3731 32.7116 59.3592 40.222 59.3592V58.2449C33.013 58.2449 26.4742 55.3799 21.6805 50.7251L20.9042 51.5246ZM1.45992 56.7172C9.80675 58.9436 16.8526 55.5998 21.6516 51.5507L20.933 50.699C16.2983 54.6095 9.61906 57.7403 1.74711 55.6405L1.45992 56.7172ZM12.5306 33.0093C10.8706 47.2229 3.34452 54.426 1.30695 55.7072L1.90009 56.6505C4.22722 55.1874 11.9388 47.6827 13.6375 33.1386L12.5306 33.0093Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>
            <div className="flex justify-start items-start flex-grow relative gap-[7.151533126831055px] py-[20.058080673217773px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]">
              <p className="flex-grow w-[484.99px] text-[22px] text-left text-black">
                {' '}
                해당 지역은 전월세전환율이 ~입니다, 월세가 전세보다 상대적으로 불리한 조건일수도 있어요, 전세도
                고려해보시면 좋을듯요 or 월세로 입주하는건 좋은 선택인 것 같아요.{' '}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
            </div>
          </div>
        </div>
        <div className="w-[88.52px] h-[94.66px] absolute left-[570px] top-[763px] overflow-hidden rounded-[94.66px] bg-black/10">
          <img
            src={Avatar}
            alt="AI"
            className="w-[125.97px] h-[125.97px] absolute left-[-17.86px] top-[4.71px] object-cover"
          />
        </div>
      </div>
      <div className="w-[663px] h-[156.66px]">
        <div className="flex flex-col justify-start items-start w-[550.79px] h-[133px] absolute left-[682.21px] top-[141px] gap-[6.686026573181152px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[37.88748550415039px]">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] text-left text-[#8e8d94]">고창석</p>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
            <div className="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <svg
                width={42}
                height={60}
                viewBox="0 0 42 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow"
                preserveAspectRatio="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.6949 33.074C13.6697 32.5946 13.657 32.1119 13.657 31.6263V1.09668H40.8328V58.8021C33.4731 58.8021 26.7967 55.8765 21.9032 51.1248C17.1863 55.1047 10.3237 58.342 2.21436 56.1789C4.39671 54.8067 12.0155 47.4528 13.6949 33.074Z"
                  fill="#EAEAEA"
                />
                <path
                  d="M13.6949 33.074L14.2483 33.1386L14.2538 33.0918L14.2513 33.0448L13.6949 33.074ZM13.657 1.09668V0.539511H13.0998V1.09668H13.657ZM40.8328 1.09668H41.39V0.539511H40.8328V1.09668ZM40.8328 58.8021V59.3592H41.39V58.8021H40.8328ZM21.9032 51.1248L22.2913 50.7251L21.9294 50.3737L21.5439 50.699L21.9032 51.1248ZM2.21436 56.1789L1.91779 55.7072L0.835449 56.3877L2.07076 56.7172L2.21436 56.1789ZM13.0998 31.6263C13.0998 32.1217 13.1128 32.6141 13.1385 33.1032L14.2513 33.0448C14.2266 32.5751 14.2142 32.1022 14.2142 31.6263H13.0998ZM13.0998 1.09668V31.6263H14.2142V1.09668H13.0998ZM40.8328 0.539511H13.657V1.65385H40.8328V0.539511ZM41.39 58.8021V1.09668H40.2756V58.8021H41.39ZM21.515 51.5246C26.5084 56.3731 33.3224 59.3592 40.8328 59.3592V58.2449C33.6238 58.2449 27.0851 55.3799 22.2913 50.7251L21.515 51.5246ZM2.07076 56.7172C10.4176 58.9436 17.4635 55.5998 22.2625 51.5507L21.5439 50.699C16.9092 54.6095 10.2299 57.7403 2.35795 55.6405L2.07076 56.7172ZM13.1415 33.0093C11.4814 47.2229 3.95536 54.426 1.91779 55.7072L2.51093 56.6505C4.83806 55.1874 12.5496 47.6827 14.2483 33.1386L13.1415 33.0093Z"
                  fill="#EAEAEA"
                />
              </svg>
            </div>
            <div className="flex justify-start items-start flex-grow relative gap-[7.151533126831055px] py-[20.058080673217773px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]">
              <p className="flex-grow w-[484.99px] text-[22px] text-left text-black">
                {' '}
                해당 지역은 전월세전환율이 ~입니다, 월세가 전세보다 상대적으로 불리한 조건일수도 있어요, 전세도
                고려해보시면 좋을듯요 or 월세로 입주하는건 좋은 선택인 것 같아요.{' '}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
              <div className="flex-grow w-[27.18px] rounded-tl-[71.52px] bg-[#eaeaea] border-[1.11px] border-[#eaeaea]" />
            </div>
          </div>
        </div>
        <div className="w-[88.52px] h-[94.66px] absolute left-[570px] top-[203px] overflow-hidden rounded-[94.66px] bg-black/10">
          <img
            src={Avatar}
            alt="AI"
            className="w-[125.97px] h-[125.97px] absolute left-[-17.86px] top-[4.71px] object-cover"
          />
        </div>
      </div>
      <p className="absolute left-[66px] top-[801px] text-[29px] font-bold text-left text-black">💡</p>
      <p className="absolute left-[102px] top-[805px] text-[22px] font-bold text-left text-black">
        이런 질문을 해보세요!
      </p>
      <svg
        width={1920}
        height={72}
        viewBox="0 0 1920 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1920px] h-[72px]"
        preserveAspectRatio="none"
      >
        <rect width={1920} height={72} fill="white" />
      </svg>
      <div className="w-[107px] h-[41px]">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[1701px] top-[961px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M12.175 7L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9L0 9L0 7L12.175 7Z" fill="#555555" />
        </svg>
        <p className="w-[107px] h-[41px] absolute left-[1615px] top-[932px] text-[17.057849884033203px] font-bold text-left text-[#555]">
          계약하기{' '}
        </p>
        <svg
          width={58}
          height={3}
          viewBox="0 0 58 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[1616.25px] top-[963.75px]"
          preserveAspectRatio="none"
        >
          <path d="M-0.00390625 1.5H58.0047" stroke="#555555" stroke-width="1.5" />
        </svg>
      </div>
      <div className="w-[419px] h-[495px] absolute left-10 top-[279px] overflow-hidden rounded-[30px] bg-[#f0f0f0]">
        <div className="w-[391px] h-[59px] absolute left-[13px] top-[391px] rounded-[50px] bg-[#d9d9d9]" />
        <div className="w-[391px] h-[59px] absolute left-[13px] top-[295px] rounded-[50px] bg-[#d9d9d9]" />
        <div className="w-[391px] h-[59.13px]">
          <div className="w-[391px] h-[59.13px] absolute left-[13.5px] top-[199.46px] rounded-[50px] bg-[#d9d9d9]" />
        </div>
        <div className="w-[391px] h-[59px]">
          <div className="w-[391px] h-[59px] absolute left-[13.5px] top-[103.5px] rounded-[50px] bg-[#d9d9d9]" />
          <p className="absolute left-28 top-[106px] text-lg text-center text-black">편의시설관련뉴스제목~?</p>
        </div>
        <div className="w-[146px] h-[51px]">
          <p className="w-[89px] h-[22.37px] absolute left-[165px] top-[45.32px] text-[22px] font-bold text-left text-black">
            관련 기사
          </p>
          <div className="w-[146px] h-[51px] absolute left-[137px] top-[31px] rounded-[62.5px] bg-[#022047]/5" />
        </div>
      </div>
      <svg
        width={1919}
        height={1}
        viewBox="0 0 1919 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[0.5px] top-[71.5px]"
        preserveAspectRatio="none"
      >
        <path d="M0.5 0.5H1920" stroke="#EBEBEB" />
      </svg>
      <div className="w-[1791.9px] h-[39.86px]">
        <p className="w-[125px] h-[27px] absolute left-[1523px] top-[21px] text-xl font-bold text-center text-[#49454f]">
          계약서 보관함
        </p>
        <p className="w-[99.9px] h-[27.33px] absolute left-[1722px] top-[20.06px] text-xl font-bold text-center text-[#49454f]">
          로그아웃
        </p>
        <img
          src={LogoBlue}
          alt="로고"
          className="w-[348px] h-[39.86px] absolute left-[29.5px] top-[16.14px] object-cover"
        />
        <svg
          width={2}
          height={23}
          viewBox="0 0 2 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[1684.25px] top-[22.72px]"
          preserveAspectRatio="none"
        >
          <path d="M1 0.472168V22.1111" stroke="#E0E0E0" stroke-width="1.5" />
        </svg>
      </div>
    </div>
  );
};

export default Consulting;

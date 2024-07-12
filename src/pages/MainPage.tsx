<<<<<<<<< Temporary merge branch 1
import { useEffect } from 'react';
import Main from '../assets/img/Main.svg';
import Main1 from '../assets/img/Main1.svg';
import Main2 from '../assets/img/Main2.svg';
import Main3 from '../assets/img/Main3.svg';
import LogoWhite from '../assets/img/LogoWhite.svg';
import SearchBtnTop from '../assets/img/SearchBtnTop.svg';
import SearchBtnBottom from '../assets/img/SearchBtnBottom.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      easing: 'ease-out', // 애니메이션의 easing 함수
      once: true, // 한 번만 애니메이션이 실행되도록
    });
  }, []);

  return (
    <div className="w-[1920px] h-[4663px] relative overflow-hidden bg-white">
      <img src={Main} className="w-[1920px] h-[1917.21px] absolute left-0 top-[-390px] object-cover" alt="Main" />
      <Link to="/login">
        <button className="w-[199px] h-[78px] absolute left-[860px] top-[819px] opacity-75 rounded-[62.5px] bg-white cursor-pointer relative">
          <img src={SearchBtnTop} alt="내 집 찾기 버튼" className="w-full h-full object-cover absolute top-0 left-0" />
          <div className="flex justify-start items-center w-[104px] absolute left-[60px] top-[22px]">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-NanumSquareRoundB text-center text-[#000c1e]/80">
              내 집 찾기
            </p>
          </div>
        </button>
      </Link>
      <img
        src={LogoWhite}
        className="w-[671px] h-[68.14px] absolute left-[622.72px] top-[457.72px] object-cover"
        alt="Logo"
      />
      <div className="w-[2485.57px] h-[2637.6px]" />
      <p className="absolute left-[767px] top-[358px] text-[40px] font-NanumSquareRoundEB text-center text-white">
        당신만의 AI 공인중개사
      </p>
      <p className="absolute left-[50%] top-[599px] transform -translate-x-1/2 text-2xl font-NanumSquareRoundB text-center text-white">
        <span className="mb-6 block">AI 공인중개사가 준비한 실제 매물로 계약경험을 쌓고,</span>
        <span className="mb-6 block">필요한 지식까지 완벽히 습득하세요.</span>
        <span className="block">당신의 첫 시작을 든든하게 함께합니다.</span>
      </p>
      <div className="w-[100px] h-[100px] absolute left-[1266px] top-[951px] overflow-hidden" />
      <div className="w-[1921px] h-[568px] absolute left-[-4px] top-[1583px] bg-[#f8f9fa]" />
      <div className="w-[1921px] h-[568px] absolute left-[-2px] top-[2540px] bg-[#c5d9fe]/40" />
      <div className="w-[1921px] h-[568px] absolute left-[-8px] top-[3498px] bg-[#f5e5dd]/40" />
      <div className="w-[1919px] h-[1919px]">
        <div className="w-[763px] h-[351px]">
          <p className="w-[629px] h-[83px] absolute left-[166px] top-[1750px] text-5xl font-bold text-left text-black">
            당신의 집은 어디에 있나요?
          </p>
          <p className="w-[763px] h-[219px] absolute left-[166px] top-[1851px] text-[32px] font-NanumSquareR text-left text-black">
            <span className="w-[763px] h-[219px] text-[32px] text-left text-black">
              지도에 표시된 실제 매물들로 당신의 집을 찾아보세요!
            </span>
            <br />
            <span className="w-[763px] h-[219px] text-[32px] text-left text-black">
              계약에 필요한 다양한 지식과 절차들.
            </span>
            <br />
            <span className="w-[763px] h-[219px] text-[32px] text-left text-black">한번에 이용해 볼 수 있어요! </span>
          </p>
          <img
            src={Main1}
            className="w-[940px] h-[568px] absolute left-[979px] top-[1583px] object-cover"
            alt="Main1"
            data-aos="fade-left" // AOS 애니메이션 속성 추가
            data-aos-delay="100" // 지연 시간 설정 (밀리초)
          />
        </div>
        <div className="w-[1750px] h-[568px]">
          <p className="w-[629px] h-[83px] absolute left-[1044px] top-[2717px] text-5xl font-bold text-left text-black">
            모르는게 당연해요!
          </p>
          <p className="w-[705px] h-[219px] absolute left-[1044px] top-[2818px] text-[32px] font-NanumSquareR text-left text-black">
            처음이라 막연하게만 느껴졌던 부동산 관련 지식들,
            <br />
            AI상담사에게 물어봐요!
          </p>
          <img
            src={Main2}
            className="w-[940px] h-[568px] absolute left-[-2.5px] top-[2540.5px] object-cover"
            alt="Main2"
            data-aos="fade-left" // AOS 애니메이션 속성 추가
            data-aos-delay="300" // 지연 시간 설정 (밀리초)
          />
        </div>
        <div className="w-[1785px] h-[568px]">
          <p className="w-[588px] h-[83px] absolute left-[135px] top-[3668px] text-5xl font-bold text-left text-black">
            당신의 첫 계약
          </p>
          <p className="w-[821px] absolute left-[135px] top-[3788px] text-[32px] font-NanumSquareR text-left text-black">
            기존 서비스에서는 지원하지 않았던 계약서 작성 시뮬레이션,
            <br />
            AI 공인중개사와 함께라면 가능합니다.
          </p>
          <img
            src={Main3}
            className="w-[940px] h-[568px] absolute left-[979.5px] top-[3498.5px] object-cover"
            alt="Main3"
            data-aos="fade-left" // AOS 애니메이션 속성 추가
            data-aos-delay="500" // 지연 시간 설정 (밀리초)
          />
        </div>
      </div>
      <Link to="/login">
        <button className="w-[199px] h-[78px] absolute left-[861px] top-[4367px] opacity-80 rounded-[62.5px] bg-[#ebebeb] cursor-pointer">
          <img src={SearchBtnBottom} alt="내 집 찾기 버튼" className="w-full h-full object-cover" />
          <div className="flex justify-start items-center w-[104px] absolute left-[60px] top-[22px]">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-NanumSquareRoundB text-center text-[#000c1e]/80">
              내 집 찾기
            </p>
          </div>
        </button>
      </Link>
    </div>
  );
=========
const MainPage = () => {
  return <div></div>;
>>>>>>>>> Temporary merge branch 2
};

export default MainPage;

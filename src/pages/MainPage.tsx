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
import Navbar from '../components/Navbar.tsx';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      easing: 'ease-out', // 애니메이션의 easing 함수
      once: true, // 한 번만 애니메이션이 실행되도록
    });
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center w-full h-full bg-white mt-[72px]">
        <div
          className="flex flex-col justify-center w-full h-[1000px] font-[NanumSquareRoundB] bg-cover bg-center -mt-[10px] overflow-hidden"
          style={{ backgroundImage: `url(${Main})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
          <div className=" flex flex-col h-full items-center justify-center -mt-[120px]">
            <p className="text-[40px] font-[NanumSquareRoundB] text-white mb-16">당신만의 AI 공인중개사</p>
            <img src={LogoWhite} className="w-[671px] h-[68px] mb-8" alt="Logo" />
            <p className="text-[24px] font-[NanumSquareRoundB] text-white text-center mt-[25px] mb-[20px]">
              AI 공인중개사가 준비한 실제 매물로 계약경험을 쌓고,
            </p>
            <p className="text-[24px] font-[NanumSquareRoundB] text-white text-center mb-[20px]">
              필요한 지식까지 완벽히 습득하세요.
            </p>
            <p className="text-[24px] font-[NanumSquareRoundB] text-white text-center mb-[20px]">
              당신의 첫 시작을 든든하게 함께합니다.
            </p>
            <Link to="/login" className="mt-12">
              <div className="flex w-[199px] h-[78px] -mt-[34px]">
                <button className="w-[199px] h-[78px]  rounded-full  bg-[#ebebeb] bg-opacity-65 flex-row items-center justify-center mt-[20px]">
                  <img
                    src={SearchBtnTop}
                    alt="내 집 찾기 버튼"
                    className="absolute w-[199px] h-[78px] object-cover rounded-full opacity-65 -mt-[23px]"
                  />
                  <p className="flex text-[24px] font-[NanumSquareRoundB] text-[#3d3b3a] ml-[65px] ">내 집 찾기</p>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full bg-[#f8f9fa]  mt-[300px]  items-center">
            <div className="flex-1 text-left ml-[166px] font-[NanumSquareR] md:pr-8">
              <p className="text-[48px] font-[NanumSquareEB] mb-[80px] ">당신의 집은 어디에 있나요?</p>
              <p className="text-[26px] mb-[10px]">지도에 표시된 실제 매물들로 당신의 집을 찾아보세요!</p>
              <p className="text-[26px] mb-[10px]">계약에 필요한 다양한 지식과 절차들.</p>
              <p className="text-[26px] mb-[10px]">한번에 이용해 볼 수 있어요!</p>
            </div>
            <img
              src={Main1}
              className="flex-1 w-[50%] object-cover"
              alt="Main1"
              data-aos="fade-left"
              data-aos-delay="100"
            />
          </div>
          <div className="flex flex-col md:flex-row w-full bg-[#c5d9fe]/40  items-center mt-[300px]">
            <img
              src={Main2}
              className="flex-1 w-[50%] h-auto object-cover mb-8 md:mb-0"
              alt="Main2"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <div className="flex-1 md:pl-8 text-left ml-[166px] font-nanumSquareR">
              <p className="text-[48px] font-[NanumSquareEB] mb-[80px]">모르는게 당연해요!</p>
              <p className="text-[28px] mb-[15px]">처음이라 막연하게만 느껴졌던 부동산 관련 지식들,</p>
              <p className="text-[28px] mb-[15px]">AI상담사에게 물어봐요!</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full bg-[#f5e5dd]/40   items-center mt-[300px] mb-[300px]">
            <div className="flex-1 md:pr-8 ml-[166px] font-nanumSquareR text-left">
              <p className="text-[48px] font-[NanumSquareEB] mb-[80px]">당신의 첫 계약</p>
              <p className="text-[28px] mb-[15px]">기존 서비스에서는 지원하지 않았던 계약서 작성 시뮬레이션,</p>
              <p className="text-[28px] mb-[15px]">AI 공인중개사와 함께라면 가능합니다.</p>
            </div>
            <img
              src={Main3}
              className="flex-1 w-[50%] h-auto mt-8 md:mt-0 object-cover"
              alt="Main3"
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </div>
          <div className="relative mb-[300px]">
            <Link to="/login" className="mt-16">
              <button className="w-[199px] h-[78px]  rounded-full  bg-[#ebebeb] flex-row items-center justify-center mt-[20px]">
                <img
                  src={SearchBtnBottom}
                  alt="내 집 찾기 버튼"
                  className="absolute w-[199px] h-[78px] object-cover rounded-full opacity-75 -mt-[23px]"
                />
                <p className="flex text-[24px] font-[NanumSquareRoundB] text-[#3d3b3a] ml-[65px] ">내 집 찾기</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

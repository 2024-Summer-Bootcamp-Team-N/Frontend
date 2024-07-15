import { Link } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';

const Navbar = () => {
  return (
    <div className="flex w-full h-[72px] bg-white fixed top-0 left-0 z-50 items-center p-1.5">
      <Link to="/">
        <img src={LogoBlue} alt="Logo" className="mt-0.5 mr-5" />
      </Link>
      <div className="flex-grow "></div>
      <div className="flex items-center gap-4">
        <Link to="/map" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
          내 집 찾기
        </Link>
        <span className="border-l border-[#E0E0E0] h-[19px]"></span>
        <Link to="/login" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
          로그인
        </Link>
        <span className="border-l border-[#E0E0E0] h-[19px]"></span>
        <Link to="/signup" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
import { Link } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';
import '../index.css'; 

const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-white fixed top-0 left-0 z-50 flex items-center p-4">
      <img src={LogoBlue} alt="Logo" className="navbar-logo" style={{ marginTop: '1px', marginRight: '20px' }} />
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <Link to="/map" className="hover:underline text-[#49454F] font-NanumSquareRoundB">내 집 찾기</Link>
        <span className="border-l border-[#E0E0E0] h-[19px]"></span>
        <Link to="/login" className="hover:underline text-[#49454F] font-NanumSquareRoundR">로그인</Link>
        <span className="border-l border-[#E0E0E0] h-[19px]"></span>
        <Link to="/signup" className="hover:underline text-[#49454F] font-NanumSquareRoundB">회원가입</Link>
      </div>
    </div>
  );
};

export default Navbar;

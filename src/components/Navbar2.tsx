import { Link } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';

const Navbar2 = () => {
  return (
    <div className="flex flex-row w-full h-[72px] bg-white fixed top-0 left-0 z-50 flex border-b-[1.5px] border-[#EBEBEB] items-center p-1.5 font-NanumSquareRoundB">
      <div className="flex justify-between w-full px-4">
        <div className="flex">
          <Link to="/">
            <img src={LogoBlue} alt="Logo" className=" " />
          </Link>
        </div>
        <div className="flex justify-center left-[-0.5px] mr-[50px] items-center gap-8">
          <Link to="/storage" className="hover:underline text-xl font-nanumSquareRoundB text-[#49454F]">
            계약서 보관함
          </Link>
          <span className="border-l-2 border-[#E0E0E0] h-[19px]"></span>
          <Link to="/" className="hover:underline text-xl font-nanumSquareRoundB text-[#49454F]">
            로그아웃
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

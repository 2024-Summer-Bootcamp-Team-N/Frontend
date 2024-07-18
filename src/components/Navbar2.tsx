import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';
import axios from 'axios';

const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    setIsLoggedIn(!!refreshToken);
  }, []);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        console.error('Refresh token not found in localStorage');
        return;
      }

      const response = await axios.delete('http://localhost:8000/api/v1/users/logout', {
        headers: {
          'Accept': 'application/json',
          'Authorization': refreshToken,  // Authorization 헤더에 리프레시 토큰 추가 (Bearer 제외)
        },
      });

      if (response.status === 205 || response.status === 204) { // 205 또는 204 응답 처리
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);
        navigate('/');
        window.location.reload();
      } else {
        const errorMessage = response.data.error || '로그아웃 실패';
        console.error(errorMessage);
        // 사용자에게 에러 메시지 표시 (Toast, Alert 등 활용)
      }
    } catch (error) {
      console.error('로그아웃 요청 에러:', error);
      // 사용자에게 일반적인 에러 메시지 표시
    }
  };

  return (
      <div className="flex flex-row w-full h-[72px] bg-white fixed top-0 left-0 z-50 flex border-b-[2px] border-[#EBEBEB] items-center p-1.5 font-NanumSquareRoundB">
        <div className="flex justify-between w-full px-4">
          <div className="flex">
            <Link to="/">
              <img src={LogoBlue} alt="Logo" className="" />
            </Link>
          </div>
          <div className="flex justify-center left-[-0.5px] mr-[50px] items-center gap-8">
            <Link to="/storage" className="hover:underline text-xl font-nanumSquareRoundB text-[#49454F]">
              계약서 보관함
            </Link>
            <span className="border-l-2 border-[#E0E0E0] h-[19px]"></span>
            {/* 로그인 상태에 따라 버튼 또는 링크 렌더링 */}
            {isLoggedIn ? (
                <button onClick={handleLogout} className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
                  로그아웃
                </button>
            ) : (
                <Link to="/login" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
                  로그인
                </Link>
            )}
          </div>
        </div>
      </div>
  );
};

export default Navbar2;

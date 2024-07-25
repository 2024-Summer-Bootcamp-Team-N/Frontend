import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';
import axios from 'axios';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    setIsLoggedIn(!!refreshToken);
  }, []);

  const handleMapClick = () => {
    if (isLoggedIn) {
      navigate('/input'); // 로그인된 경우 /map 페이지로 이동
    } else {
      navigate('/login'); // 로그인되지 않은 경우 /login 페이지로 이동
    }
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        console.error('Refresh token not found in localStorage');
        return;
      }

      const response = await axios.delete(`${import.meta.env.VITE_API_KEY}/users/logout`, {
        headers: {
          Accept: 'application/json',
          Authorization: refreshToken,
        },
      });

      if (response.status === 205 || response.status === 204) {
        localStorage.removeItem('refreshToken');
        setIsLoggedIn(false);
        window.location.reload();
        navigate('/');
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
    <div className="flex flex-row w-full h-[72px] bg-white fixed top-0 left-0 z-50 items-center p-1.5">
      <Link to="/">
        <img src={LogoBlue} alt="Logo" className="mt-0.5 mr-5" />
      </Link>
      <div className="flex-grow "></div>
      <div className="flex justify-center left-[-0.5px] mr-[50px] items-center gap-8">
        {/* 내 집 찾기 버튼 */}
        <button
          onClick={handleMapClick} // 클릭 시 handleMapClick 함수 실행
          className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]"
        >
          내 집 찾기
        </button>

        <span className="border-l border-[#E0E0E0] h-[19px]"></span>

        {/* 로그인/로그아웃 버튼 부분 - 변경 없음 */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
            로그아웃
          </button>
        ) : (
          <Link to="/login" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
            로그인
          </Link>
        )}

        {/* 회원가입 링크 부분 - 변경 없음 */}
        {!isLoggedIn && (
          <>
            <span className="border-l border-[#E0E0E0] h-[19px]"></span>
            <Link to="/signup" className="hover:underline text-xl text-[#49454F] font-[NanumSquareRoundB]">
              회원가입
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

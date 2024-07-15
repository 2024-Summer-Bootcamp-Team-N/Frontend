import { useState, useEffect } from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Main from '../assets/img/Main.svg'; // 배경 이미지 import
import LogoWhite from '../assets/img/LogoWhite.svg'; // 로고 이미지 import
import Navbar from '../components/Navbar.tsx';

function LoginPage() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true); // 페이지 로드 시 로그인 모달 표시

  useEffect(() => {
    setShowLoginModal(true); // 페이지 로드 시 로그인 모달 표시
  }, []);

  const handleSignupClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };
  return (
    <div
      className="w-[1920px] h-[1080px] overflow-hidden bg-white font-nanumSquareR bg-cover bg-center"
      style={{ backgroundImage: `url(${Main})`, backgroundSize: 'auto' }}
    >
      <Navbar />
      {/* 로고 이미지 설정 */}
      <div className="absolute top-20 left-0 right-0 flex justify-center items-center p-4">
        <img src={LogoWhite} alt="Logo" className="w-[671px] h-[auto]" />
        {/* 회원가입 및 로그인 버튼 */}
      </div>
      {/* 모달 창 */}
      {showSignupModal && <Signup onClose={() => setShowSignupModal(false)} />}
      {showLoginModal && <Login onSignupClick={handleSignupClick} onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}

export default LoginPage;

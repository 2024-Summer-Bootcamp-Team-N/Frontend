import { useState, useEffect } from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Main from '../assets/img/Main.svg'; // 배경 이미지 import
import Navbar from '../components/Navbar.tsx';

function SignupPage() {
  const [showSignupModal, setShowSignupModal] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false); // 페이지 로드 시 로그인 모달 표시

  useEffect(() => {
    setShowSignupModal(true); // 페이지 로드 시 로그인 모달 표시
  }, []);

  const handleSignupClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };
  return (
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-[72px] justify-center">
          <Navbar />
        </div>
        <div
          className="flex flex-col w-full h-full font-nanumSquareR bg-cover bg-center"
          style={{ backgroundImage: `url(${Main})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
          <div className="flex justify-center items-center">
            {showSignupModal && <Signup onClose={() => setShowSignupModal(false)} />}
            {showLoginModal && <Login onSignupClick={handleSignupClick} onClose={() => setShowLoginModal(false)} />}
          </div>
        </div>
      </div>
  );
}

export default SignupPage;

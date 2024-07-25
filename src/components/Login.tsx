import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/img/LogoWhite.svg';

interface LoginProps {
  onSignupClick: () => void;
  onClose: () => void;
}

function Login({ onSignupClick, onClose }: LoginProps) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('backend:8000/api/v1/users/login', { auth_id: id, password });

      if (response.status === 200) {
        const { refresh_token: refreshToken } = response.data;

        localStorage.setItem('refreshToken', refreshToken);

        // Axios interceptor 설정 (모든 요청에 Authorization 헤더 자동 추가)
        axios.interceptors.request.use(
          (config) => {
            if (refreshToken) {
              config.headers.Authorization = refreshToken;
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          },
        );

        setError('');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('로그인에 실패했습니다.');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError('아이디 또는 비밀번호가 일치하지 않습니다.');
      } else {
        setError('로그인에 실패했습니다.');
        console.error('로그인 오류:', error);
      }
    }
  };

  const handleSignup = () => {
    onClose();
    onSignupClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      handleLogin();
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex mb-[80%]">
        <img src={LogoWhite} alt="Logo" className="flex object-cover w-[650px] h-[auto] " />
      </div>
      <div
        className="absolute justify-center items-center mt-[110px] w-[410px] h-[375px] bg-white rounded-lg opacity-95 font-nanumSquareRoundR"
        onClick={(e) => e.stopPropagation()}
        style={{
          filter: 'drop-shadow(0px 2px 5px rgba(50,50,93,0.25)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))',
        }}
      >
        <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-8 gap-2">
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              ID
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="text-base text-left text-[#202629] w-full h-[30px]"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              Password
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="password"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex justify-start items-center w-[362px] mx-auto mt-6 gap-4">
          <div
            className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 p-3 h-[40px] rounded-lg bg-[#00a1e7] border border-[#00a1e7]"
            onClick={handleLogin}
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-neutral-100">로그인</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[362px] mx-auto mt-4 gap-4">
          <p className="text-sm text-gray-600">
            아직 계정이 없으신가요?{' '}
            <span className="text-blue-500 cursor-pointer" onClick={handleSignup}>
              회원가입
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

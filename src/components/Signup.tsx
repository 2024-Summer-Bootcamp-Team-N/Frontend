import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/img/LogoWhite.svg';
import axios from 'axios';
interface SignupProps {
  onClose: () => void;
}
interface Errors {
  id?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
}
function Signup({ onClose }: SignupProps) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Errors = {};
    const idRegex = /^[a-zA-Z0-9]+$/;
    const nameRegex = /^[가-힣]+$/;

    if (!idRegex.test(id)) {
      newErrors.id = '아이디는 영어와 숫자로만 입력해야 합니다.';
    }
    if (!nameRegex.test(name)) {
      newErrors.name = '이름은 한글로만 입력해야 합니다.';
    }
    if (password.length < 4) {
      newErrors.password = '비밀번호는 4글자 이상이어야 합니다.';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (validate()) {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/v1/users/signup',
          {
            auth_id: id,
            name,
            password,
            confirm_password: confirmPassword,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        console.log(response.data); // 서버에서 반환한 응답 데이터

        onClose();
        navigate('/apt'); // 회원가입 후 이동할 페이지 경로
      } catch (error) {
        if (error.response) {
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          console.error('Error response headers:', error.response.headers);
          // 서버에서 반환한 에러 메시지를 사용자에게 표시
          setErrors({ ...errors, server: error.response.data });
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
      }
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex mb-[80%]">
        <img src={LogoWhite} alt="Logo" className="flex object-cover w-[650px] h-[auto] " />
      </div>
      <div
        className="absolute justify-center items-center mt-[140px] w-[456px] h-[auto] bg-white rounded-lg opacity-95 font-nanumSquareRoundR"
        onClick={(e) => e.stopPropagation()}
        style={{
          filter: 'drop-shadow(0px 2px 5px rgba(50,50,93,0.25)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))',
        }}
      >
        <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-8 gap-2">
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4[px] gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              ID
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[41px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-full"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          {Errors.id && <p className="text-red-500 text-sm">{Errors.id}</p>}
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4[px] gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              Name
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[41px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-full"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {Errors.name && <p className="text-red-500 text-sm">{Errors.name}</p>}
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4[px] gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              Password
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[41px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="password"
                className="w-full text-base text-left text-[#202629] h-full"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {Errors.password && <p className="text-red-500 text-sm">{Errors.password}</p>}
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[41px] rounded-lg bg-white border border-[#d9d9d9] mt-[4px]">
            <input
              type="password"
              className="w-full text-base text-left text-[#202629] h-full"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {Errors.confirmPassword && <p className="text-red-500 text-sm">{Errors.confirmPassword}</p>}
        </div>

        <div className="flex justify-start items-center w-[362px] mx-auto mt-6 gap-4">
          <div
            className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 p-3 h-[40px] mb-[40px] rounded-lg bg-[#00a1e7] border border-[#00a1e7]"
            onClick={handleSignup}
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-neutral-100">회원가입</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

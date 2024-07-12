import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSignup = () => {
    if (validate()) {
      onClose();
      navigate('/map'); // MapPage로 이동
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0">
      <div
        className="relative w-[456px] h-[auto] bg-white rounded-lg opacity-95 font-nanumSquareRoundR"
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
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[41px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-full"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            {Errors.id && <p className="text-red-500 text-sm">{Errors.id}</p>}
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
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
            {Errors.name && <p className="text-red-500 text-sm">{Errors.name}</p>}
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
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
            {Errors.password && <p className="text-red-500 text-sm">{Errors.password}</p>}
          </div>
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

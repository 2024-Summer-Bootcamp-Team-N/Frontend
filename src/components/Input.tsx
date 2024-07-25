import { useState } from 'react';
import axios from 'axios';
import { useMap } from '../components/MapContext';
import { useRentContext } from '../components/RentContext';
import LogoWhite from '../assets/img/LogoWhite.svg';

const Input = ({ onNext }) => {
  const { isMonthlyRentActive, setIsMonthlyRentActive, isDepositRentActive, setIsDepositRentActive } = useRentContext();

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [town, setTown] = useState('');
  const [rentAmount, setRentAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [depositRentAmount, setDepositRentAmount] = useState('');
  const [error, setError] = useState('');
  const { setCoordinates } = useMap();

  const handleMonthlyRentClick = () => {
    setIsMonthlyRentActive(true);
    setIsDepositRentActive(false);
    setDepositAmount('');
    setRentAmount('');
  };

  const handleDepositRentClick = () => {
    setIsMonthlyRentActive(false);
    setIsDepositRentActive(true);
    setDepositRentAmount('');
  };

  const handleNext = async () => {
    if (!city || !district || !town || (!isMonthlyRentActive && !isDepositRentActive)) {
      setError('모든 필드를 입력해주세요.');
    } else if (isMonthlyRentActive && (!rentAmount || !depositAmount)) {
      setError('월세와 보증금을 입력해주세요.');
    } else if (isDepositRentActive && !depositRentAmount) {
      setError('전세금을 입력해주세요.');
    } else {
      setError('');

      const addressData = {
        province: city,
        district: district,
        street: town,
      };

      const typesData = {
        LEASE: isDepositRentActive,
        MONTHLY_RENT: isMonthlyRentActive,
        depositRangeMax: isDepositRentActive ? depositRentAmount : depositAmount,
        priceRangeMax: isMonthlyRentActive ? rentAmount : '0',
      };

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        // 주소 API 요청
        const addressResponse = await axios.post(`${import.meta.env.VITE_API_KEY}/entry/regions`, addressData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${refreshToken}`,
          },
        });
        const { latitude, longitude } = addressResponse.data.data;
        setCoordinates(parseFloat(latitude), parseFloat(longitude));
        console.log('주소 API 응답:', addressResponse);

        // 월세/전세 API 요청
        const typesResponse = await axios.post(`${import.meta.env.VITE_API_KEY}/entry/types`, typesData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${refreshToken}`,
          },
        });

        console.log('월세/전세 API 응답:', typesResponse);
        onNext();
      } catch (err) {
        setError('API 요청 중 오류가 발생했습니다.');
        console.error(err);
      }
    }
  };

  const handleKoreanInput = (setter) => (e) => {
    const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
    if (koreanRegex.test(e.target.value) || e.target.value === '') {
      setter(e.target.value);
    }
  };

  const handleRentInput = (e) => {
    const koreanAndNumberRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]*$/;
    if (koreanAndNumberRegex.test(e.target.value) || e.target.value === '') {
      setRentAmount(e.target.value);
    }
  };

  const handleDepositInput = (e) => {
    const koreanAndNumberRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]*$/;
    if (koreanAndNumberRegex.test(e.target.value) || e.target.value === '') {
      setDepositAmount(e.target.value);
    }
  };

  const handleDepositRentInput = (e) => {
    const koreanAndNumberRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]*$/;
    if (koreanAndNumberRegex.test(e.target.value) || e.target.value === '') {
      setDepositRentAmount(e.target.value);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex mb-[80%]">
        <img src={LogoWhite} alt="Logo" className="flex object-cover w-[650px] h-[auto]" />
      </div>
      <div
        className="absolute justify-center items-center mt-[110px] w-[410px] h-[550px] bg-white rounded-lg opacity-95 font-nanumSquareRoundR"
        onClick={(e) => e.stopPropagation()}
        style={{
          filter: 'drop-shadow(0px 2px 5px rgba(50,50,93,0.25)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))',
        }}
      >
        <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-8 gap-2">
          <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB]">
            <p className="flex text-center">주소 및 거래유형 입력</p>
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              시/도
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="시/도"
                value={city}
                onChange={handleKoreanInput(setCity)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              시/군/구
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="시/군/구"
                value={district}
                onChange={handleKoreanInput(setDistrict)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              읍/면/동
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="읍/면/동"
                value={town}
                onChange={handleKoreanInput(setTown)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center mt-[10px] items-start">
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isMonthlyRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleMonthlyRentClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isMonthlyRentActive ? 'text-white' : 'text-[#979797]'}`}>
              월세
            </p>
          </button>
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isDepositRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleDepositRentClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isDepositRentActive ? 'text-white' : 'text-[#979797]'}`}>
              전세
            </p>
          </button>
        </div>
        {isMonthlyRentActive && (
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              월세
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="월세"
                value={rentAmount}
                onChange={handleRentInput}
              />
            </div>
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              보증금
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="보증금"
                value={depositAmount}
                onChange={handleDepositInput}
              />
            </div>
          </div>
        )}

        {isDepositRentActive && (
          <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-4 gap-2">
            <label className="self-stretch flex-grow-0 flex-shrink-0 w-[362px] text-base font-bold text-left text-[#1e1e1e]">
              전세금
            </label>
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-4 py-3 h-[40px] rounded-lg bg-white border border-[#d9d9d9]">
              <input
                type="text"
                className="w-full text-base text-left text-[#202629] h-[30px]"
                placeholder="전세금"
                value={depositRentAmount}
                onChange={handleDepositRentInput}
              />
            </div>
          </div>
        )}

        <div className="flex justify-start items-center w-[362px] mx-auto mt-6 gap-4">
          <div
            className="flex justify-center items-center flex-grow relative overflow-hidden gap-2 p-3 h-[40px] rounded-lg bg-[#00a1e7] border border-[#00a1e7] cursor-pointer"
            onClick={handleNext}
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-neutral-100">다음</p>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Input;

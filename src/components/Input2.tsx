import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/img/LogoWhite.svg';
import axios from 'axios';

const Input2 = () => {
  const navigate = useNavigate();
  const [activeButtons, setActiveButtons] = useState({
    residenceType: '',
    parking: '',
    rooms: '',
    additionalOptions: [],
  });

  const residenceTypes = ['아파트', '오피스텔', '주택빌라', '원룸투룸'];
  const parkingOptions = ['상관없음', '세대당 1대 이상', '세대당 2대 이상'];
  const roomOptions = ['상관X', '1개', '2개', '3개', '4개이상'];
  const additionalOptions = {
    아파트: ['단기임대'],
    오피스텔: ['단기임대', '주차가능', '엘레베이터'],
    주택빌라: ['단기임대', '주차가능'],
    원룸투룸: ['단기임대', '주차가능', '엘레베이터', '분리형', '복층'],
  };

  const handleButtonClick = (category, value) => {
    setActiveButtons((prev) => ({
      ...prev,
      [category]:
        category === 'additionalOptions'
          ? prev[category].includes(value)
            ? prev[category].filter((item) => item !== value)
            : [...prev[category], value]
          : value,
    }));
  };

  const renderButtons = (options, category) => (
    <div className="flex flex-row w-full justify-center mt-[10px] items-start">
      {options.map((option) => (
        <button
          key={option}
          className={`flex w-auto h-[36.95px] justify-center items-center rounded-[54.34px] mx-[5px]
            ${
              activeButtons[category] === option ||
              (Array.isArray(activeButtons[category]) && activeButtons[category].includes(option))
                ? 'bg-[#357FFF] text-white'
                : 'bg-[#F5F5F5] text-[#979797]'
            }`}
          onClick={() => handleButtonClick(category, option)}
        >
          <p className="text-[18px] font-[NanumSquareB] px-[10px]">{option}</p>
        </button>
      ))}
    </div>
  );

  const handleSubmit = async () => {
    const requestBody = {
      apartment: activeButtons.residenceType === '아파트',
      officetel: activeButtons.residenceType === '오피스텔',
      house: activeButtons.residenceType === '주택빌라',
      onetwo: activeButtons.residenceType === '원룸투룸'
    };

    try {
      const refreshToken = localStorage.getItem('refreshToken');

      const response = await axios.post('http://localhost:8000/api/v1/entry/residences', requestBody, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });
      console.log('API 응답:', response.data);
      navigate('/apt');
    } catch (error) {
      console.error('API 오류:', error);
      // 오류 처리 로직 추가
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <img src={LogoWhite} alt="Logo" className="flex object-cover w-[650px] h-[auto] mb-[80%]" />
      <div className="absolute justify-center items-center mt-[110px] w-[670px] h-[550px] bg-white rounded-lg opacity-95 font-nanumSquareRoundR">
        <div className="flex flex-col justify-start items-center w-[362px] mx-auto mt-8 gap-2">
          <p className="text-center font-[nanumSquareRoundEB]">거주형태 선택</p>
          {renderButtons(residenceTypes, 'residenceType')}
          {activeButtons.residenceType && activeButtons.residenceType !== '원룸투룸' && (
            <>
              <p className="text-center font-[nanumSquareRoundEB] mt-8">주차대수 선택</p>
              {renderButtons(parkingOptions, 'parking')}
              <p className="text-center font-[nanumSquareRoundEB] mt-8">방 개수 선택</p>
              {renderButtons(roomOptions, 'rooms')}
            </>
          )}
          {activeButtons.residenceType && (
            <>
              <p className="text-center font-[nanumSquareRoundEB] mt-8">추가옵션선택</p>
              {renderButtons(additionalOptions[activeButtons.residenceType], 'additionalOptions')}
            </>
          )}
        </div>
        <button 
          onClick={handleSubmit} 
          className="flex justify-center items-center w-[362px] mx-auto mt-6"
        >
          <div className="flex justify-center items-center w-full p-3 h-[40px] rounded-lg bg-[#00A1E7] border border-[#00A1E7] text-neutral-100">
            확인
          </div>
        </button>
      </div>
    </div>
  );
};

export default Input2;
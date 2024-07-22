import { useState } from 'react';
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
    오피스텔: ['단기임대', '주차가능', '엘리베이터'],
    주택빌라: ['단기임대', '주차가능'],
    원룸투룸: ['단기임대', '주차가능', '엘리베이터', '분리형', '복층'],
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
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      // 첫 번째 API 호출: 거주형태 선택
      const residenceTypeBody = {
        apartment: activeButtons.residenceType === '아파트',
        officetel: activeButtons.residenceType === '오피스텔',
        house: activeButtons.residenceType === '주택빌라',
        onetwo: activeButtons.residenceType === '원룸투룸',
      };

      const residenceResponse = await axios.post('http://localhost:8000/api/v1/entry/residences', residenceTypeBody, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });

      console.log('거주형태 API 응답:', residenceResponse.data);

      if (activeButtons.residenceType === '아파트') {
        const aptDetailsBody = {
          canParking: activeButtons.additionalOptions.includes('주차가능'),
          hasElevator: true,
          parkingNumRangeMin:
            activeButtons.parking === '세대당 1대 이상' ? 1 : activeButtons.parking === '세대당 2대 이상' ? 2 : 0,
          roomCount:
            activeButtons.rooms === '상관X' ? 0 : activeButtons.rooms === '4개이상' ? 4 : parseInt(activeButtons.rooms),
          isShortLease: activeButtons.additionalOptions.includes('단기임대'),
        };

        const aptDetailsResponse = await axios.post(
          'http://localhost:8000/api/v1/entry/residences/apt',
          aptDetailsBody,
          {
            headers: {
              Authorization: `${refreshToken}`,
            },
          },
        );

        console.log('아파트 상세 API 응답:', aptDetailsResponse.data);

        // 응답 데이터를 저장하고 다음 페이지로 이동
        navigate('/house', {
          state: {
            residenceResponse: residenceResponse.data,
            aptDetailsResponse: aptDetailsResponse.data,
          },
        });
      } else if (activeButtons.residenceType === '주택빌라') {
        const houseDetailsBody = {
          canParking: activeButtons.additionalOptions.includes('주차가능'),
          hasElevator: false,
          parkingNumRangeMin: 0,
          roomCount:
            activeButtons.rooms === '상관X' ? 0 : activeButtons.rooms === '4개이상' ? 4 : parseInt(activeButtons.rooms),
          isDivision: false,
          isShortLease: activeButtons.additionalOptions.includes('단기임대'),
          isDuplex: false,
        };

        const houseDetailsResponse = await axios.post(
          'http://localhost:8000/api/v1/entry/residences/house',
          houseDetailsBody,
          {
            headers: {
              Authorization: `${refreshToken}`,
            },
          },
        );

        console.log('주택빌라 상세 API 응답:', houseDetailsResponse.data);

        // 응답 데이터를 저장하고 다음 페이지로 이동
        navigate('/house', {
          state: {
            residenceResponse: residenceResponse.data,
            houseDetailsResponse: houseDetailsResponse.data,
          },
        });
      } else if (activeButtons.residenceType === '오피스텔') {
        const officetelRequestBody = {
          officetel: true,
          parkingNumRangeMin: 0,
          roomCount:
            activeButtons.rooms === '상관X' ? 0 : activeButtons.rooms === '4개이상' ? 4 : parseInt(activeButtons.rooms),
          parking: activeButtons.parking,
          rooms: activeButtons.rooms,
          isShortLease: activeButtons.additionalOptions.includes('단기임대'),
          canParking: activeButtons.additionalOptions.includes('주차가능'),
          isElevator: activeButtons.additionalOptions.includes('엘리베이터'),
        };

        const response = await axios.post(
          'http://localhost:8000/api/v1/entry/residences/officetel',
          officetelRequestBody,
          {
            headers: {
              Authorization: `${refreshToken}`,
            },
          },
        );
        console.log('오피스텔 옵션:', response.data);

        // 응답 데이터를 저장하고 다음 페이지로 이동
        navigate('/office', {
          state: {
            officetelResponse: response.data,
          },
        });
      } else if (activeButtons.residenceType === '원룸투룸') {
        const onetwoRequestBody = {
          isShortLease: activeButtons.additionalOptions.includes('단기임대'),
          canParking: activeButtons.additionalOptions.includes('주차가능'),
          hasElevator: activeButtons.additionalOptions.includes('엘리베이터'),
          isDivision: activeButtons.additionalOptions.includes('분리형'),
          isDuplex: activeButtons.additionalOptions.includes('복층'),
        };

        const onetwoResponse = await axios.post(
          'http://localhost:8000/api/v1/entry/residences/onetwo',
          onetwoRequestBody,
          {
            headers: {
              Authorization: `${refreshToken}`,
            },
          },
        );

        console.log('원룸투룸 옵션:', onetwoResponse.data);

        // 응답 데이터를 저장하고 다음 페이지로 이동
        navigate('/room', {
          state: {
            residenceResponse: residenceResponse.data,
            onetwoResponse: onetwoResponse.data,
          },
        });
      }
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
          {activeButtons.residenceType &&
            activeButtons.residenceType !== '원룸투룸' &&
            activeButtons.residenceType !== '주택빌라' && (
              <>
                <p className="text-center font-[nanumSquareRoundEB] mt-8">주차대수 선택</p>
                {renderButtons(parkingOptions, 'parking')}
              </>
            )}
          {activeButtons.residenceType && activeButtons.residenceType !== '원룸투룸' && (
            <>
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
        <button onClick={handleSubmit} className="flex justify-center items-center w-[362px] mx-auto mt-6">
          <div className="flex justify-center items-center w-full p-3 h-[40px] rounded-lg bg-[#00A1E7] border border-[#00A1E7] text-neutral-100">
            확인
          </div>
        </button>
      </div>
    </div>
  );
};

export default Input2;

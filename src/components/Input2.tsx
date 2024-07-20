import LogoWhite from '../assets/img/LogoWhite.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Input2 = () => {
  const [isAptBtnActive, setIsAptBtnActive] = useState(false);
  const [isOfficeBtnActive, setIsOfficeBtnActive] = useState(false);
  const [isHouseBtnActive, setIsHouseBtnActive] = useState(false);
  const [isOneTwoBtnActive, setIsOneTwoBtnActive] = useState(false);
  const [isAllBtnActive, setIsAllBtnActive] = useState(false);
  const [isOneMoreBtnActive, setIsOneMoreBtnActive] = useState(false);
  const [isTwoMoreBtnActive, setIsTwoMoreBtnActive] = useState(false);
  const [isAll2BtnActive, setIsAll2BtnActive] = useState(false);
  const [isOneRoomBtnActive, setIsOneRoomBtnActive] = useState(false);
  const [isTwoRoomBtnActive, setIsTwoRoomBtnActive] = useState(false);
  const [isThreeRoomBtnActive, setIsThreeRoomBtnActive] = useState(false);
  const [isFourMoreRoomBtnActive, setIsFourMoreRoomBtnActive] = useState(false);
  const [isShortRentActive, setIsShortRentActive] = useState(false);
  const [isCanParkingActive, setIsCanParkingActive] = useState(false);
  const [isElevatorActive, setIsElevatorActive] = useState(false);
  const [isSeparateActive, setIsSeparateActive] = useState(false);
  const [isDuplexActive, setIsDuplexActive] = useState(false);

  const handleDuplexClick = () => {
    setIsDuplexActive((prevState) => !prevState);
  };

  const handleSeparateClick = () => {
    setIsSeparateActive((prevState) => !prevState);
  };

  const handleElevatorClick = () => {
    setIsElevatorActive((prevState) => !prevState);
  };
  const handleCanParkingClick = () => {
    setIsCanParkingActive((prevState) => !prevState);
  };
  const handleShortRentClick = () => {
    setIsShortRentActive((prevState) => !prevState);
  };

  const handleAll2BtnClick = () => {
    setIsAll2BtnActive(true);
    setIsOneRoomBtnActive(false);
    setIsTwoRoomBtnActive(false);
    setIsThreeRoomBtnActive(false);
    setIsFourMoreRoomBtnActive(false);
  };

  const handleOneRoomBtnClick = () => {
    setIsAll2BtnActive(false);
    setIsOneRoomBtnActive(true);
    setIsTwoRoomBtnActive(false);
    setIsThreeRoomBtnActive(false);
    setIsFourMoreRoomBtnActive(false);
  };

  const handleTwoRoomBtnClick = () => {
    setIsAll2BtnActive(false);
    setIsOneRoomBtnActive(false);
    setIsTwoRoomBtnActive(true);
    setIsThreeRoomBtnActive(false);
    setIsFourMoreRoomBtnActive(false);
  };

  const handleThreeRoomBtnClick = () => {
    setIsAll2BtnActive(false);
    setIsOneRoomBtnActive(false);
    setIsTwoRoomBtnActive(false);
    setIsThreeRoomBtnActive(true);
    setIsFourMoreRoomBtnActive(false);
  };

  const handleFourMoreRoomBtnClick = () => {
    setIsAll2BtnActive(false);
    setIsOneRoomBtnActive(false);
    setIsTwoRoomBtnActive(false);
    setIsThreeRoomBtnActive(false);
    setIsFourMoreRoomBtnActive(true);
  };

  const handleTwoMoreBtnClick = () => {
    setIsAllBtnActive(false);
    setIsOneMoreBtnActive(false);
    setIsTwoMoreBtnActive(true);
  };

  const handleAllBtnClick = () => {
    setIsAllBtnActive(true);
    setIsOneMoreBtnActive(false);
    setIsTwoMoreBtnActive(false);
  };

  const handleOneMoreBtnClick = () => {
    setIsOneMoreBtnActive(true);
    setIsAllBtnActive(false);
    setIsTwoMoreBtnActive(false);
  };

  const handleOneTwoBtnClick = () => {
    setIsAptBtnActive(false);
    setIsOfficeBtnActive(false);
    setIsHouseBtnActive(false);
    setIsOneTwoBtnActive(true);
  };

  const handleHouseBtnClick = () => {
    setIsAptBtnActive(false);
    setIsOfficeBtnActive(false);
    setIsHouseBtnActive(true);
    setIsOneTwoBtnActive(false);
  };

  const handleAptBtnClick = () => {
    setIsAptBtnActive(true);
    setIsOfficeBtnActive(false);
    setIsHouseBtnActive(false);
    setIsOneTwoBtnActive(false);
  };

  const handleOfficeBtnClick = () => {
    setIsAptBtnActive(false);
    setIsOfficeBtnActive(true);
    setIsHouseBtnActive(false);
    setIsOneTwoBtnActive(false);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex mb-[80%]">
        <img src={LogoWhite} alt="Logo" className="flex object-cover w-[650px] h-[auto]" />
      </div>
      <div
        className="absolute justify-center items-center mt-[110px] w-[670px] h-[550px] bg-white rounded-lg opacity-95 font-nanumSquareRoundR"
        onClick={(e) => e.stopPropagation()}
        style={{
          filter: 'drop-shadow(0px 2px 5px rgba(50,50,93,0.25)) drop-shadow(0px 1px 3px rgba(0,0,0,0.3))',
        }}
      >
        <div className="flex flex-col justify-start items-start w-[362px] mx-auto mt-8 gap-2">
          <div className="flex w-full fles-row justify-center font-[nanumSquareRoundEB]">
            <p className="flex text-center">거주형태 선택</p>
          </div>
        </div>
        <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAptBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleAptBtnClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isAptBtnActive ? 'text-white' : 'text-[#979797]'}`}>
              아파트
            </p>
          </button>
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOfficeBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleOfficeBtnClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isOfficeBtnActive ? 'text-white' : 'text-[#979797]'}`}>
              오피스텔
            </p>
          </button>
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mr-[10px] ${isHouseBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleHouseBtnClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isHouseBtnActive ? 'text-white' : 'text-[#979797]'}`}>
              주택빌라
            </p>
          </button>
          <button
            className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isOneTwoBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
            onClick={handleOneTwoBtnClick}
          >
            <p className={`text-[18px] font-[NanumSquareB] ${isOneTwoBtnActive ? 'text-white' : 'text-[#979797]'}`}>
              원룸투룸
            </p>
          </button>
        </div>
        {isAptBtnActive && (
          <div className="flex flex-col justify-start items-center w-[362px] mx-auto mt-8 gap-2">
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB]">
              <p className="flex flex-col text-center">주차대수 선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAllBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleAllBtnClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isAllBtnActive ? 'text-white' : 'text-[#979797]'}`}>
                  상관없음
                </p>
              </button>
              <button
                className={`flex w-[157.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOneMoreBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleOneMoreBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isOneMoreBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  세대당 1대 이상
                </p>
              </button>
              <button
                className={`flex w-[157.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isTwoMoreBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleTwoMoreBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isTwoMoreBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  세대당 2대 이상
                </p>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">방 개수 선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAll2BtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleAll2BtnClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isAll2BtnActive ? 'text-white' : 'text-[#979797]'}`}>
                  상관X
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOneRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleOneRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isOneRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  1개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mr-[10px] ${isTwoRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleTwoRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isTwoRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  2개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isThreeRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleThreeRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isThreeRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  3개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ml-[10px] ${isFourMoreRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleFourMoreRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isFourMoreRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  4개이상
                </p>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">추가옵션선택</p>
            </div>
            <button
              className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isShortRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
              onClick={handleShortRentClick}
            >
              <p className={`text-[18px] font-[NanumSquareB] ${isShortRentActive ? 'text-white' : 'text-[#979797]'}`}>
                단기임대
              </p>
            </button>
          </div>
        )}
        {isOfficeBtnActive && (
          <div className="flex flex-col justify-start items-center w-[362px] mx-auto mt-8 gap-2">
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB]">
              <p className="flex flex-col text-center">주차대수 선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAllBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleAllBtnClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isAllBtnActive ? 'text-white' : 'text-[#979797]'}`}>
                  상관없음
                </p>
              </button>
              <button
                className={`flex w-[157.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOneMoreBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleOneMoreBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isOneMoreBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  세대당 1대 이상
                </p>
              </button>
              <button
                className={`flex w-[157.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isTwoMoreBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleTwoMoreBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isTwoMoreBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  세대당 2대 이상
                </p>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">방 개수 선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAll2BtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleAll2BtnClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isAll2BtnActive ? 'text-white' : 'text-[#979797]'}`}>
                  상관X
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOneRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleOneRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isOneRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  1개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mr-[10px] ${isTwoRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleTwoRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isTwoRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  2개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isThreeRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleThreeRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isThreeRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  3개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ml-[10px] ${isFourMoreRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleFourMoreRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isFourMoreRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  4개이상
                </p>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">추가옵션선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center  mt-[10px] items-start">
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isShortRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleShortRentClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isShortRentActive ? 'text-white' : 'text-[#979797]'}`}>
                  단기임대
                </p>
              </button>
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] mx-[10px] ${isCanParkingActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleCanParkingClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isCanParkingActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  주차가능
                </p>
              </button>
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isElevatorActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleElevatorClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isElevatorActive ? 'text-white' : 'text-[#979797]'}`}>
                  엘레베이터
                </p>
              </button>
            </div>
          </div>
        )}
        {isHouseBtnActive && (
          <div className="flex flex-col justify-start items-center w-[362px] mx-auto mt-8 gap-2">
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">방 개수 선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center mt-[10px] items-start">
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isAll2BtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleAll2BtnClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isAll2BtnActive ? 'text-white' : 'text-[#979797]'}`}>
                  상관X
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mx-[10px] ${isOneRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleOneRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isOneRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  1개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] mr-[10px] ${isTwoRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleTwoRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isTwoRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  2개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ${isThreeRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleThreeRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isThreeRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  3개
                </p>
              </button>
              <button
                className={`flex w-[67.38px] h-[36.95px] justify-center items-center rounded-[54.34px] ml-[10px] ${isFourMoreRoomBtnActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleFourMoreRoomBtnClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isFourMoreRoomBtnActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  4개이상
                </p>
              </button>
            </div>
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">추가옵션선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center  mt-[10px] items-start">
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isShortRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleShortRentClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isShortRentActive ? 'text-white' : 'text-[#979797]'}`}>
                  단기임대
                </p>
              </button>
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] mx-[10px] ${isCanParkingActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleCanParkingClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isCanParkingActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  주차가능
                </p>
              </button>
            </div>
          </div>
        )}
        {isOneTwoBtnActive && (
          <div className="flex flex-col justify-start items-center w-[362px] mx-auto mt-8 gap-2">
            <div className="flex w-full flex-row justify-center font-[nanumSquareRoundEB] mt-8">
              <p className="flex flex-col text-center">추가옵션선택</p>
            </div>
            <div className="flex flex-row w-gull justify-center  mt-[10px] items-start">
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isShortRentActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleShortRentClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isShortRentActive ? 'text-white' : 'text-[#979797]'}`}>
                  단기임대
                </p>
              </button>
              <button
                className={`flex w-[87.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] mx-[10px] ${isCanParkingActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleCanParkingClick}
              >
                <p
                  className={`text-[18px] font-[NanumSquareB] ${isCanParkingActive ? 'text-white' : 'text-[#979797]'}`}
                >
                  주차가능
                </p>
              </button>
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] ${isElevatorActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleElevatorClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isElevatorActive ? 'text-white' : 'text-[#979797]'}`}>
                  엘레베이터
                </p>
              </button>
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] mx-[10px] ${isSeparateActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleSeparateClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isSeparateActive ? 'text-white' : 'text-[#979797]'}`}>
                  분리형
                </p>
              </button>
              <button
                className={`flex w-[97.38px] h-[36.95px] justify-center items-center  rounded-[54.34px] mx-[10px] ${isDuplexActive ? 'bg-[#357FFF]' : 'bg-[#F5F5F5]'}`}
                onClick={handleDuplexClick}
              >
                <p className={`text-[18px] font-[NanumSquareB] ${isDuplexActive ? 'text-white' : 'text-[#979797]'}`}>
                  복층
                </p>
              </button>
            </div>
          </div>
        )}

        <Link to="/apt">
          <div className="flex justify-start items-center w-[362px] mx-auto mt-6 gap-4">
            <div className="flex justify-center items-center flex-grow relative  gap-2 p-3 h-[40px] rounded-lg bg-[#00a1e7] border border-[#00a1e7]">
              <p className="flex-grow-0 flex-shrink-0 text-base font-regular text-left text-neutral-100">확인</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Input2;

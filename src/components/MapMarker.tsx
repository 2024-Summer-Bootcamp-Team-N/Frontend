import MapMarker from '../assets/img/MapMarker.svg'; // 이미지 경로를 정확히 지정해주세요

const MapMaker = () => {
  return (
    <div className="relative w-[70px] h-[85.17px]">
      <img src={MapMarker} className="w-full h-full" />
      <div className="absolute top-0 left-[5px] w-[67.59px] h-[18.1px] flex justify-start items-center">
        <p className="text-[9.5px] font-[NanumSquareB] text-[#357fff] ml-[10px] mt-[3px]"> 전세</p>
      </div>
      <div className="absolute top-[18.1px] left-[5px] flex flex-col w-[56px] h-[41px] justify-start items-center">
        <div className="w-[40px] h-[30px] flex items-end">
          <p className="text-[14px] font-[NanumSquareB] text-white">4.8 억</p>
        </div>
        <div className="w-[40px] h-[14px] flex items-center">
          <p className="text-[10px] font-[NanumSquareB] text-[#AECCFF]">53.28㎡</p>
        </div>
      </div>
    </div>
  );
};

export default MapMaker;

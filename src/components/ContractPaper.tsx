import Icon from '../assets/img/PaperIcon.svg';

const ContractPaper = () => {
  return (
    <div className="w-[1214px] h-[2900px] relative overflow-hidden rounded-[27.42px] bg-white -z-20"
    style={{ boxShadow: "0px 6.8px 20.5px 0 rgba(0,0,0,0.35)" }}
    >
      <img
          src={Icon}
          className="w-[32px] h-[32px] absolute left-[438px] top-[37px] object-cover"
      />
      <p className="w-[300px] h-[69px] absolute left-[454px] top-[33px] text-3xl font-[NanumSquareRoundB] text-center text-[#49454f]">
        부동산 임대차 계약서
      </p>

    <p className="absolute left-[130.26px] top-[145.35px] w-14 h-[26px] text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">월세</p>
    <p className="absolute left-[53.48px] top-[146.72px] w-[43px] h-[25px] text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">전세</p>

    <div className="absolute left-[82.27px] top-[141.23px] flex flex-col justify-center items-center p-[2.89px]">
      <div className="relative flex justify-center items-center p-[7.94px] rounded-full">
        <div className="w-[12.99px] h-[12.99px] rounded-[1.44px] border-[1.44px] border-[#49454f]"></div>
      </div>
    </div>
    <div className="w-[135px] h-[18px] absolute left-[48.81px] top-[148.81px] bg-[#ffde35]/[0.19] -z-10" />

      <p className="w-[756px] h-[18px] absolute left-[43px] top-[340px] text-[17.5px] text-left text-black/50 font-[NanumSquareRoundR]">
        임대인과 임차인 쌍방은 아래 표시 부동산에 관하여 다음 계약 내용과 같이 임대차계약을 체결한다.
      </p>
      <p className="w-[480px] absolute left-[38.39px] top-[196.08px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        부동산의 표시
      </p>
      <div className="w-[110px] h-[18px] absolute left-[38px] top-[200px] bg-[#ffde35]/[0.19] -z-10" />

    <div className="absolute left-[159.06px] top-[141.23px] flex flex-col justify-center items-center p-[2.89px]">
      <div className="relative flex justify-center items-center p-[7.94px] rounded-full">
        <div className="w-[12.99px] h-[12.99px] rounded-[1.44px] border-[1.44px] border-[#49454f]"></div>
      </div>
    </div>

    <p className="w-[480px] absolute left-[38.39px] top-[382.56px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        계약 내용
      </p>
      <p className="absolute left-[42.51px] top-[422.61px] text-[17.5px] text-left">
        <span className="text-[17.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
          제1조[보증금과 차임 및 관리비]
        </span>
        <br />
        <span className="text-[17.5px] font-[NanumSquareRoundR] text-left text-black/90">
          위 부동산의 임대차에 관하여 임대인( )과 임차인( )은 합의에 의하여 보증금과 차임 및 관리비를 아래와 같이 지불하기로 한다.
        </span>
      </p>

      <div className="w-[235px] h-[18px] absolute left-[37.81px] top-[426px] bg-[#ffde35]/[0.19] -z-10" />

      <p className="w-[1131px] h-[74px] absolute left-[42.51px] top-[607.44px] text-[17.5px] text-left">
        <span className="w-[1131px] h-[74px] text-[17.5px] font-bold text-left text-[#49454f]">
          제2조[임대차기간]{" "}
        </span>
        <br />
        <span className="w-[1131px] h-[74px] text-[17.5px] font-bold text-left text-[#49454f]/90">
          임대인은 임차주택을 임대차 목적대로 사용‧수익할 수 있는 상태로 _____년 _____월 _____일까지 임차인에게 인도하고, 임대차기간은 인도일로부터 _____년 _____월 _____일까지로 한다.
        </span>
      </p>

      <div className="w-[145px] h-[18px] absolute left-[36.81px] top-[613px] bg-[#ffde35]/[0.19] -z-10" />

      <p className="w-[1130px] h-[74px] absolute left-[42.51px] top-[697.93px] text-[17.5px] text-left">
        <span className="w-[1130px] h-[74px] text-[17.5px] font-bold text-left text-[#49454f]">
          제3조[입주 전 수리]{" "}
        </span>
        <br />
        <span className="w-[1130px] h-[74px] text-[17.5px] font-bold text-left text-[#49454f]/90">
          임대인과 임차인은 임차주택의 수리가 필요한 시설물 및 비용부담에 관하여 다음과 같이 합의한다.
        </span>
      </p>

      <div className="w-[145px] h-[18px] absolute left-[41.81px] top-[703px] bg-[#ffde35]/[0.19] -z-10" />

  <p className="w-[1131px] h-[140px] absolute left-[43px] top-[932px] text-[17.5px] text-left text-[#49454f]">
    <span className="w-[1131px] h-[140px] text-[17.5px] font-bold text-left text-[#49454f]">
      제4조[임차주택의 사용·관리·수선]
    </span>
    <br />
    <br />
    <span className="w-[1131px] h-[140px] text-[17.5px] font-bold text-left text-[#49454f]">
      ① 임차인은 임대인의 동의 없이 임차주택의 구조변경 및 전대나 임차권양도를할 수 없으며, 임대차
      목적인 주거 이외의 용도로 사용할 수 없다.
    </span>
    <br />
    <span className="w-[1131px] h-[140px] text-[17.5px] font-bold text-left text-[#49454f]">
      ② 임대인은 계약 존속 중 임차주택을 사용·수익에 필요한 상태로 유지하여야 하고, 임차인은
      임대인이 임차주택의 보존에 필요한 행위를 하는 때 이를 거절하지 못한다.
    </span>
    <br />
    <span className="w-[1131px] h-[140px] text-[17.5px] font-bold text-left text-[#49454f]">
      ③ 임대인과 임차인은 계약 존속 중에 발생하는 임차주택의 수리 및 비용부담에 관하여 다음과 같이
      합의한다. 다만, 합의되지 아니한 기타 수선비용에 관한 부담은 민법, 판례 기타 관습에 따른다.
    </span>
  </p>

  <div className="w-[245px] h-[18px] absolute left-[41.81px] top-[935.81px] bg-[#ffde35]/[0.19] -z-10" />

  <p className="w-[1132px] h-[879px] absolute left-[38px] top-[1236px] text-[17.5px] text-left text-[#49454f]">
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제5조[계약의 해제]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을 지급하기 전까지, 임대인은 계약금의배액을
      상환하고, 임차인은 계약금을 포기하고 이 계약을 해제할 수 있다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제6조[채무불이행과 손해배상]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      당사자 일방이 채무를 이행하지 아니하는 때에는 상대방은 상당한 기간을 정하여 그 이행을 최고하고
      계약을 해제할 수 있으며, 그로 인한 손해배상을 청구할 수 있다. 다만, 채무자가 미리 이행하지
      아니할 의사를 표시한 경우의 계약해제는 최고를 요하지 아니한다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제7조[계약의 해지]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ① 임차인은 본인의 과실 없이 임차주택의 일부가 멸실 기타 사유로 인하여 임대차의 목적대로사용할
      수 없는 경우에는 계약을 해지할 수 있다.
    </span>
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ② 임대인은 임차인이 2기의 차임액에 달하도록 연체하거나, 제4조 제1항을 위반한 경우 계약을
      해지할 수 있다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제8조[갱신요구와 거절]
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ① 임차인은 임대차기간이 끝나기 6개월 전부터 2개월 전까지의 기간에 계약갱신을 요구할 수 있다.
      다만, 임대인은 자신 또는 그 직계존속·직계비속의 실거주 등 주택임대차보호법 제6조의3 제1항 각
      호의 사유가 있는 경우에 한하여 계약갱신의 요구를 거절할 수 있다.
    </span>
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ② 임대인이 주택임대차보호법 제6조의3 제1항 제8호에 따른 실거주를 사유로 갱신을 거절하였음에도
      불구하고 갱신요구가 거절되지 아니하였더라면 갱신되었을 기간이 만료되기 전에 정당한 사유 없이
      제3자에게 주택을 임대한 경우, 임대인은 갱신거절로 인하여 임차인이 입은 손해를 배상하여야 한다.
    </span>
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ③ 제2항에 따른 손해배상액은 주택임대차보호법 제6조의3 제6항에 의한다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제9조[계약의 종료]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      임대차계약이 종료된 경우에 임차인은 임차주택을 원래의 상태로 복구하여 임대인에게 반환하고,
      이와 동시에 임대인은 보증금을 임차인에게 반환하여야 한다. 다만, 시설물의 노후화나 통상 생길 수
      있는 파손 등은 임차인의 원상복구의무에 포함되지 아니한다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제10조[비용의 정산]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ① 임차인은 계약종료 시 공과금과 관리비를 정산하여야 한다.
    </span>
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      ② 임차인은 이미 납부한 관리비 중 장기수선충당금을 임대인(소유자인 경우)에게 반환 청구할 수
      있다. 다만, 관리사무소 등 관리주체가 장기수선충당금을 정산하는 경우에는 그 관리주체에게 청구할
      수 있다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제11조[분쟁의 해결]
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      임대인과 임차인은 본 임대차계약과 관련한 분쟁이 발생하는 경우, 당사자 간의 협의 또는
      주택임대차분쟁조정위원회의 조정을 통해 호혜적으로 해결하기 위해 노력한다.{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      제12조[중개보수 등]{" "}
    </span>
    <br />
    <br />
    <span className="w-[1132px] h-[879px] text-[17.5px] font-bold text-left text-[#49454f]">
      중개보수는 거래 가액의 _______%인 원(□ 부가가치세 포함 □ 불포함)으로 임대인과 임차인이 각각
      부담한다. 다만, 개업공인중개사의 고의 또는 과실로 인하여 중개의뢰인간의 거래행위가 무효‧취소
      또는 해제된 경우에는 그러하지 아니하다.
    </span>
  </p>

      <div className="absolute left-[32.91px] top-[317.92px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[227.56px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[271.37px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[227.56px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[208.49px] top-[227.56px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[1172.91px] top-[226.2px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[735.29px] top-[271.37px] w-[1.37119px] h-[48px] bg-[#EDEDED]"></div>
      <div className="absolute left-[602.22px] top-[271.37px] w-[1.37119px] h-[48px] bg-[#EDEDED]"></div>

      <p className="w-[53.03px] h-[75.88px] absolute left-[95.42px] top-[239px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        소재지
      </p>
      <p className="w-[144.07px] h-[116.82px] absolute left-[230.45px] top-[239px] text-[16.5px] font-[NanumSquareRoundB] text-left text-[#393939]">
        서울시 강남구 삼성동
      </p>
      <p className="w-[70.03px] h-[75.88px] absolute left-[637.89px] top-[283px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        건물용도
      </p>
      <p className="w-[61.03px] h-[116.82px] absolute left-[770.96px] top-[283px] text-[16.5px] font-[NanumSquareRoundB] text-left text-[#393939]">
        공동주택
      </p>
      <p className="w-[136.06px] h-[116.82px] absolute left-[230.45px] top-[283px] text-[16.5px] font-[NanumSquareRoundB] text-center text-[#393939]">
        29.72㎡/131.42㎡
      </p>
      <p className="w-[118.06px] h-[75.88px] absolute left-[63.43px] top-[283px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        전용/공급 면적
      </p>


      <p className="w-[77px] h-[76px] absolute left-[85.38px] top-[498px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        보증금
      </p>
      <p className="w-32 h-[76px] absolute left-[59.83px] top-[550px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        차임 (월세)
      </p>
      <p className="absolute left-[254.42px] top-[498px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        ( ) 원
      </p>
      <p className="w-[293px] h-[76px] absolute left-[254.42px] top-[550px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        ( ) 원
      </p>
      <div className="absolute left-[32.91px] top-[486px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[533.34px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[590.89px] w-[1141px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[32.91px] top-[486.76px] w-[1.37119px] h-[104px] bg-[#EDEDED]"></div>
      <div className="absolute left-[1172.91px] top-[486.76px] w-[1.37119px] h-[104px] bg-[#EDEDED]"></div>
      <div className="absolute left-[211.77px] top-[486.76px] w-[1.37119px] h-[104px] bg-[#EDEDED]"></div>

  <svg
    width={1138}
    height={2}
    viewBox="0 0 1138 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.63px] top-[1168.63px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0 1L1138 1.00007"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={1138}
    height={2}
    viewBox="0 0 1138 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.63px] top-[1222.63px]"
    preserveAspectRatio="none"
  >
    <path d="M0 1H1138" stroke="#868686" stroke-width="1.37119" stroke-dasharray="2.74 2.74" />
  </svg>
  <svg
    width={1138}
    height={3}
    viewBox="0 0 1138 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.63px] top-[1113.97px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0 1.34082H1138"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={109}
    viewBox="0 0 2 109"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.7px] top-[1113.63px]"
    preserveAspectRatio="none"
  >
    <path
      d="M1.07617 0L1.07617 109"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={109}
    viewBox="0 0 2 109"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[1174.43px] top-[1113.63px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.802734 0L0.80273 109"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={109}
    viewBox="0 0 2 109"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[293.64px] top-[1115.63px]"
    preserveAspectRatio="none"
  >
    <path
      d="M1.01465 0L1.01464 109"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <p className="w-[166.78px] absolute left-[81.17px] top-[1130px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
    임대인부담
  </p>
  <p className="w-[166.78px] absolute left-[81.17px] top-[1185px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
    임차인부담
  </p>
  <p className="w-[850px] h-[62px] absolute left-[313px] top-[1115px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]/50">
    ( 예컨대, 난방, 상․하수도, 전기시설 등 임차주택의 주요설비에 대한 노후·불량으로 인한 수선은 민법
    제6조, 판례상 임대인이 부담하는 것으로 해석됨 )
  </p>
  <p className="w-[851.74px] absolute left-[313px] top-[1171px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]/50">
    ( 예컨대, 임차인의 고의․과실에 기한 파손, 전구 등 통상의 간단한 수선, 소모품 교체 비용은 민법
    제623조, 판례상 임차인이 부담하는 것으로 해석됨 )
  </p>

  <svg
    width={1139}
    height={2}
    viewBox="0 0 1139 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[811.59px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 0.960938L1138.92 0.961007"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={1139}
    height={2}
    viewBox="0 0 1139 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[855.47px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 0.839355H1138.92"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={1139}
    height={2}
    viewBox="0 0 1139 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[915.8px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 1.1709H1138.92"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={1139}
    height={3}
    viewBox="0 0 1139 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[764.97px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 1.34082H1138.92"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={152}
    viewBox="0 0 2 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[764.97px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 0.34082L0.923838 151.341"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={152}
    viewBox="0 0 2 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[1174.83px] top-[764.97px]"
    preserveAspectRatio="none"
  >
    <path
      d="M1.19922 0.34082V151.341"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <svg
    width={2}
    height={152}
    viewBox="0 0 2 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[293.65px] top-[766.34px]"
    preserveAspectRatio="none"
  >
    <path
      d="M1.01758 0.711914L1.01759 151.712"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>
  <p className="absolute left-[312.68px] top-[779px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
    □ 없음 □ 있음 (수리할 내용: )
  </p>
  <p className="absolute left-[312.68px] top-[823px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
    □ 잔금지급 기일인 _____년 _____월 _____일까지 □ 기타 ( )
  </p>
  <p className="absolute left-[312.68px] top-[875px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
    □ 수리비를 임차인이 임대인에게 지급하여야 할 보증금 또는 차임에서 공제
  </p>
  <p className="absolute left-[107.1px] top-[779px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
    수리 필요 시설
  </p>
  <p className="absolute left-[107.1px] top-[823px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
    수리 완료 시설
  </p>
  <p className="absolute left-[58px] top-[861px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
    <span className="text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
      약정한 수리 완료 시기까지{" "}
    </span>
    <br />
    <span className="text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">미 수리한 경우</span>
  </p>


  <svg
    width={1127}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[36.55px] top-[764.97px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0.923828 1.34082H1138.92"
      stroke="#868686"
      stroke-width="1.37119"
      stroke-dasharray="2.74 2.74"
    />
  </svg>


      <p className="absolute left-[41.14px] top-[2335px] text-lg font-[NanumSquareB] text-left text-[#49454f]">
       [특약사항]
      </p>

    <div className="w-[81px] h-4 absolute left-[39.81px] top-[2340px] bg-[#ffde35]/[0.19] -z-10" />
          <p className="w-[1086px] absolute left-[59px] top-[2370px] text-[15px] text-left text-black">
        <span className="w-[1086px] text-[15px] text-left text-black">
          주택을 인도받은 임차인은 ___________년 ___________월 ___________일까지 주민등록(전입신고)과 주택임대차계약서 확정일자를 받기로 하고, 임대인은 위 약정일자의 다음날까지 임차주택에 저당권 등 담보권을 설정할 수 없다.
        </span>
        <br />
        <br />
        <span className="w-[1086px] text-[15px] text-left text-black">
          임대인이 위 특약에 위반하여 임차주택에 저당권 등 담보권을 설정한 경우에는 임차인은 임대차계약을 해제 또는 해지할 수 있다. 이 경우 임대인은 임차인에게 위 특약 위반으로 인한 손해를 배상하여야 한다.
        </span>
        <br />
        <br />
        <span className="w-[1086px] text-[15px] text-left text-black">
          임대차계약을 체결한 임차인은 임대차계약 체결 시를 기준으로 임대인이 사전에 고지하지 않은 선순위 임대차 정보(주택임대차보호법 제3조의6 제3항)가 있거나 미납 또는 체납한 국세･지방세가 _______원을 초과하는 것을 확인한 경우 임대차기간이 시작하는 날까지 제5조에도 불구하고 계약금 등의 명목으로 임대인에게 교부한 금전 기타 물건을 포기하지 않고 임대차계약을 해제할 수 있다.
        </span>
        <br />
        <br />
        <span className="w-[1086px] text-[15px] text-left text-black">
          주택 임대차 계약과 관련하여 분쟁이 있는 경우 임대인 또는 임차인은 법원에 소를 제기하기 전에 먼저 주택임대차분쟁조정위원회에 조정을 신청한다 ( □ 동의 □ 미동의) {" "}
        </span>
        <br />
        <br />
        <span className="w-[1086px] text-[15px] text-left text-black/80"> {" "} ※ 주택임대차분쟁조정위원회 조정을 통할 경우 60일(최대 90일) 이내 신속하게 조정 결과를 받아볼 수 있습니다.
        </span>
      </p>

      <p className="absolute left-[43px] top-[2680px] text-[17.5px] font-[NanumSquareRoundB] text-left text-black">
        본 계약을 증명하기 위해 계약 당사자가 이의 없음을 확인하고 각각 서명∙날인 후 임대인, 임차인, 개업공인중개사는 매 장마다 간인하여, 각각 1통씩 보관한다.
      </p>

      <p className="absolute right-[80px] top-[2715px] text-lg text-right text-black">년 월 일</p>

      <div className="absolute left-[29.63px] top-[2757.29px] w-[1140px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[29.63px] top-[2800.99px] w-[1140px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[29.63px] top-[2847.43px] w-[1140px] h-[1.37119px] bg-[#EDEDED]"></div>
      <div className="absolute left-[29.63px] top-[2755.29px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[1169.63px] top-[2755.92px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[208.49px] top-[2755.92px] w-[1.37119px] h-[92px] bg-[#EDEDED]"></div>
      <div className="absolute left-[401.11px] top-[2755.92px] w-[1.37119px] h-[91px] bg-[#EDEDED]"></div>

      <svg
        width={1127}
        height={3}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[41.63px] top-[2363px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0.923828 1.34082H1138.92"
          stroke="#868686"
          stroke-width="1.37119"
          stroke-dasharray="2.74 2.74"
        />
      </svg>

      <svg
        width={1127}
        height={3}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[41.63px] top-[2670px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0.923828 1.34082H1138.92"
          stroke="#868686"
          stroke-width="1.37119"
          stroke-dasharray="2.74 2.74"
        />
      </svg>

      <svg
        width={2}
        height={530}
        viewBox="0 0 2 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[41.63px] top-[2363px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0.923828 0.34082L0.923838 151.341"
          stroke="#868686"
          stroke-width="1.37119"
          stroke-dasharray="2.74 2.74"
        />
      </svg>

      <svg
        width={2}
        height={530}
        viewBox="0 0 2 264"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1167px] top-[2363px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0.923828 0.34082L0.923838 151.341"
          stroke="#868686"
          stroke-width="1.37119"
          stroke-dasharray="2.74 2.74"
        />
      </svg>
      <div className="w-[1127px] h-[310px] absolute left-[41.63px] top-[2363px] border-transparent bg-[#E4EEFF] -z-10"></div>

      <div className="w-[59px] h-[18px] absolute left-[88.56px] top-[2770px] bg-[#ffde35]/[0.19] -z-10"></div>
      <div className="w-[59px] h-[18px] absolute left-[88.56px] top-[2815px] bg-[#ffde35]/[0.19] -z-10"></div>
      <p className="w-[53.03px] h-[75.7px] absolute left-[92.14px] top-[2767px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        중개인
      </p>
      <p className="w-[35.02px] h-[75.7px] absolute left-[288.62px] top-[2767px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        성명
      </p>
      <p className="w-[400px] h-[75.7px] absolute left-[431.97px] top-[2767px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        HOUSE ADVISOR
      </p>
      <p className="w-[53.03px] h-[75.7px] absolute left-[92.75px] top-[2812px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        임차인
      </p>
      <p className="w-[35.02px] h-[75.7px] absolute left-[288.63px] top-[2812px] text-[19px] font-[NanumSquareRoundB] text-center text-[#49454f]">
        성명
      </p>
      <p className="w-[400px] h-[75.7px] absolute left-[431.97px] top-[2812px] text-[19px] font-[NanumSquareRoundB] text-left text-[#49454f]">
        최OO(수정사항: fliexible)
      </p>
      
    </div>
  );
};

export default ContractPaper;
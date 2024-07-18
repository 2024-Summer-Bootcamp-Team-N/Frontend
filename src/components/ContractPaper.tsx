import Icon from '../assets/img/PaperIcon.svg';

const ContractPaper = () => {
  return (
    <div
      className="flex flex-col justify-start w-[1214px] h-[2950px] relative overflow-hidden rounded-[27.42px] bg-white -z-20"
      style={{ boxShadow: '0px 6.8px 20.5px 0 rgba(0,0,0,0.35)' }}
    >
      <div className="flex justify-center w-full h-[80px] items-center gap-1 p-4">
        <img src={Icon} className="flex justify-center w-[32px] h-[32px] object-cover" />
        <p className="flex justify-center text-3xl font-[NanumSquareRoundB] text-[#49454f]">부동산 임대차 계약서</p>
      </div>

      <div className="flex w-full justify-start items-center px-10">
        <div className="flex gap-3 items-center bg-[#ffde35]/[0.19]">
          <div className="flex gap-1 items-center">
            <p className="text-[16.5px] leading-none font-[NanumSquareRoundB] text-left text-[#49454f]">전세</p>
            <div className="flex justify-center items-center rounded-full">
              <div className="w-[12.99px] h-[12.99px] rounded-[1.44px] border-[1.44px] border-[#49454f]"></div>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[16.5px] leading-none font-[NanumSquareRoundB] text-left text-[#49454f]">월세</p>
            <div className="flex justify-center items-center rounded-full">
              <div className="w-[12.99px] h-[12.99px] rounded-[1.44px] border-[1.44px] border-[#49454f]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 pt-8 pb-3">
          <div className="flex items-center bg-[#ffde35]/[0.19] ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">1. 부동산의 표시</p>
          </div>
        </div>

        {/* 부동산의 표지 표 */}
        <div className="flex w-full h-[91px] justify-center ">
          <table className="table-auto w-[93.75%] border-collapse bg-white text-[17px] font-[NanumSquareRoundB] ">
            <tbody>
              <tr className="border border-[#ededed]">
                <td className="text-[#49454f] w-[17.5%] border border-[#ededed] p-[7px]">소재지</td>
                <td colSpan={5} className="text-left text-[#393939] border border-[#ededed] p-[9px]">
                  서울시 강남구 삼성동
                </td>
              </tr>
              <tr className="border border-[#ededed]">
                <td className="text-[#49454f] border border-[#ededed] p-[7px]">전용/공급면적</td>
                <td colSpan={2} className="text-left text-[#393939] w-[35%] border border-[#ededed] p-[9px]">
                  29.72㎡/131.42㎡
                </td>
                <td className=" text-[#49454f] p-[7px] w-[15.5%] border border-[#ededed]">건물용도</td>
                <td colSpan={2} className=" text-[#49454f] text-left ml-[19px] border border-[#ededed] p-[7px]">
                  공동주택
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-black/50">
            임대인과 임차인 쌍방은 아래 표시 부동산에 관하여 다음 계약 내용과 같이 임대차계약을 체결한다.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-start items-center px-8 pt-8">
        <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">2. 계약 내용</p>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 py-3">
          <div className="flex items-center bg-[#ffde35]/[0.19]">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              제1조[보증금과 차임 및 관리비]
            </p>
          </div>
        </div>

        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-black/50">
            위 부동산의 임대차에 관하여 임대인( HOUSE-ADVISOR )과 임차인( {/* 임차인 이름 */} )은 합의에 의하여 보증금과
            차임 및 관리비를 아래와 같이 지불하기로 한다.
          </p>
        </div>

        {/* 제1조 표 */}
        <div className="flex w-full h-[91px] justify-center ">
          <table className="table-auto w-[93.75%] border-collapse bg-white text-[17px] font-nanumSquareRoundB">
            <tbody>
              <tr className="border border-[#ededed]">
                <td className="w-[20%] text-[#49454f] border border-[#ededed] p-[7px]">보증금</td>
                <td colSpan={4} className="text-left text-[#393939] border border-[#ededed] p-[9px]">
                  ( )원
                </td>
              </tr>
              <tr className="border border-[#ededed]">
                <td className="w-[20%] text-[#49454f] border border-[#ededed] p-[7px]">차임(월세)</td>
                <td colSpan={4} className="text-left text-[#393939] border border-[#ededed] p-[9px]">
                  ( )원
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 pt-8">
          <div className="flex items-center bg-[#ffde35]/[0.19]">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">제2조[임대차기간]</p>
          </div>
        </div>

        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
            임대인은 임차주택을 임대차 목적대로 사용‧수익할 수 있는 상태로 _____년 _____월 _____일까지 임차인에게
            인도하고, 임대차기간은 인도일로부터 _____년 _____월 _____일까지로 한다.
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 pt-8">
          <div className="flex items-center bg-[#ffde35]/[0.19]">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">제3조[입주 전 수리]</p>
          </div>
        </div>

        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
            임대인과 임차인은 임차주택의 수리가 필요한 시설물 및 비용부담에 관하여 다음과 같이 합의한다.
          </p>
        </div>
      </div>

      {/* 제3조 표 */}
      <div className="flex w-full h-[151px] justify-center items-center mt-[20px] -mb-[20px]">
        <table className="table-auto w-[93.75%] border border-dashed border-1 border-[#868686] bg-white text-[17px] font-nanumSquareRoundB">
          <tbody>
            <tr className="border border-dashed border-1 border-[#868686]  ">
              <td className="border border-dashed border-1 border-[#868686]  w-[24%] text-[#49454f] p-[7px]">
                수리 필요 시설
              </td>
              <td colSpan={4} className="text-left text-[#393939] p-[9px]">
                □ 없음 □ 있음 (수리할 내용: )
              </td>
            </tr>
            <tr className="border border-dashed border-1 border-[#868686] ">
              <td className=" border border-dashed border-1 border-[#868686]  w-[24%] text-[#49454f] p-[7px]">
                수리 완료 시설
              </td>
              <td
                colSpan={4}
                className="border border-dashed border-1 border-[#868686]  text-left text-[#393939] p-[9px]"
              >
                □ 잔금지급 기일인 _____년 _____월 _____일까지 □ 기타 ( )
              </td>
            </tr>
            <tr className="border border-dashed border-1 border-[#868686] ">
              <td className=" border border-dashed border-1 border-[#868686]  w-[24%] text-[#49454f] p-[7px]">
                약정한 수리 완료 시기까지 미 수리한 경우
              </td>
              <td
                colSpan={4}
                className="border border-dashed border-1 border-[#868686]  text-left text-[#393939] p-[9px]"
              >
                □ 수리비를 임차인이 임대인에게 지급하여야 할 보증금 또는 차임에서 공제
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 pt-8">
          <div className="flex items-center bg-[#ffde35]/[0.19]">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              제4조[임차주택의 사용·관리·수선]
            </p>
          </div>
        </div>

        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
            ① 임차인은 임대인의 동의 없이 임차주택의 구조변경 및 전대나 임차권양도를할 수 없으며, 임대차 목적인 주거
            이외의 용도로 사용할 수 없다.
          </p>
        </div>
        <div className="flex w-full justify-start items-center px-8 ">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
            ② 임대인은 계약 존속 중 임차주택을 사용·수익에 필요한 상태로 유지하여야 하고, 임차인은 임대인이 임차주택의
            보존에 필요한 행위를 하는 때 이를 거절하지 못한다.
          </p>
        </div>
        <div className="flex w-full justify-start items-center px-8 pb-2">
          <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
            ③ 임대인과 임차인은 계약 존속 중에 발생하는 임차주택의 수리 및 비용부담에 관하여 다음과 같이 합의한다. 다만,
            합의되지 아니한 기타 수선비용에 관한 부담은 민법, 판례 기타 관습에 따른다.
          </p>
        </div>
        {/* 제4조 표 */}
        <div className="flex w-full h-[91px] justify-center ">
          <table className="table-auto w-[93.75%] border-collapse bg-white text-[17px] font-nanumSquareRoundB">
            <tbody>
              <tr className="border border-dashed border-[#868686]">
                <td className="border border-dashed border-[#868686] text-[#49454f] w-[23%]">임대인 부담</td>
                <td
                  colSpan={5}
                  className="text-left text-[#49454f] opacity-50 border border-dashed border-[#868686] p-[7px]"
                >
                  ( 예컨대, 난방, 상․하수도, 전기시설 등 임차주택의 주요설비에 대한 노후·불량으로 인한 수선은 민법
                  제6조, 판례상 임대인이 부담하는 것으로 해석됨 )
                </td>
              </tr>
              <tr className="border border-dashed border-[#868686]">
                <td className=" border border-dashed border-[#868686] text-[#49454f] p-1">임차인 부담</td>
                <td
                  colSpan={5}
                  className="border border-dashed border-[#868686] text-left text-[#49454f]/[0.5] p-[7px]"
                >
                  ( 예컨대, 임차인의 고의․과실에 기한 파손, 전구 등 통상의 간단한 수선, 소모품 교체 비용은 민법 제623조,
                  판례상 임차인이 부담하는 것으로 해석됨 )
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 제5조 ~ 제12조 */}
      <div className="flex flex-col mt-[14.5px]">
        <div className="flex flex-col">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제5조[계약의 해제]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              임차인이 임대인에게 중도금(중도금이 없을 때는 잔금)을 지급하기 전까지, 임대인은 계약금의배액을 상환하고,
              임차인은 계약금을 포기하고 이 계약을 해제할 수 있다.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">
              제6조[채무불이행과 손해배상]{' '}
            </p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              당사자 일방이 채무를 이행하지 아니하는 때에는 상대방은 상당한 기간을 정하여 그 이행을 최고하고 계약을
              해제할 수 있으며, 그로 인한 손해배상을 청구할 수 있다. 다만, 채무자가 미리 이행하지 아니할 의사를 표시한
              경우의 계약해제는 최고를 요하지 아니한다.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제7조[계약의 해지]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ① 임차인은 임대인의 동의 없이 임차주택의 구조변경 및 전대나 임차권양도를할 수 없으며, 임대차 목적인 주거
              이외의 용도로 사용할 수 없다.
            </p>
          </div>
          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ② 임대인은 임차인이 2기의 차임액에 달하도록 연체하거나, 제4조 제1항을 위반한 경우 계약을 해지할 수 있다.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제8조[갱신요구와 거절]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ① 임차인은 임대차기간이 끝나기 6개월 전부터 2개월 전까지의 기간에 계약갱신을 요구할 수 있다. 다만,
              임대인은 자신 또는 그 직계존속·직계비속의 실거주 등 주택임대차보호법 제6조의3 제1항 각 호의 사유가 있는
              경우에 한하여 계약갱신의 요구를 거절할 수 있다.
            </p>
          </div>
          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ② 임대인이 주택임대차보호법 제6조의3 제1항 제8호에 따른 실거주를 사유로 갱신을 거절하였음에도 불구하고
              갱신요구가 거절되지 아니하였더라면 갱신되었을 기간이 만료되기 전에 정당한 사유 없이 제3자에게 주택을
              임대한 경우, 임대인은 갱신거절로 인하여 임차인이 입은 손해를 배상하여야 한다.
            </p>
          </div>
          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ③ 제2항에 따른 손해배상액은 주택임대차보호법 제6조의3 제6항에 의한다.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제9조[계약의 종료]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              임대차계약이 종료된 경우에 임차인은 임차주택을 원래의 상태로 복구하여 임대인에게 반환하고, 이와 동시에
              임대인은 보증금을 임차인에게 반환하여야 한다. 다만, 시설물의 노후화나 통상 생길 수 있는 파손 등은 임차인의
              원상복구의무에 포함되지 아니한다.{' '}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제10조[비용의 정산]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ① 임차인은 계약종료 시 공과금과 관리비를 정산하여야 한다.
            </p>
          </div>
          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              ② 임차인은 이미 납부한 관리비 중 장기수선충당금을 임대인(소유자인 경우)에게 반환 청구할 수 있다. 다만,
              관리사무소 등 관리주체가 장기수선충당금을 정산하는 경우에는 그 관리주체에게 청구할 수 있다.{' '}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제11조[분쟁의 해결]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              임대인과 임차인은 본 임대차계약과 관련한 분쟁이 발생하는 경우, 당사자 간의 협의 또
              주택임대차분쟁조정위원회의 조정을 통해 호혜적으로 해결하기 위해 노력한다.{' '}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex w-full justify-start items-center px-8 pt-8">
            <p className="text-[16.5px] font-[NanumSquareRoundEB] text-left text-[#49454f]">제12조[중개보수 등]</p>
          </div>

          <div className="flex w-full justify-start items-center px-8 ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">
              중개보수는 거래 가액의 _______%인 원(□ 부가가치세 포함 □ 불포함)으로 임대인과 임차인이 각각 부담한다.
              다만, 개업공인중개사의 고의 또는 과실로 인하여 중개의뢰인간의 거래행위가 무효‧취소 또는 해제된 경우에는
              그러하지 아니하다.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex w-full justify-start items-center px-8 pt-8 pb-3">
          <div className="flex items-center bg-[#ffde35]/[0.19] ">
            <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-[#49454f]">[특약사항]</p>
          </div>
        </div>

        {/* 특약사항 컨테이너 */}
        <div className="flex justify-start items-center mx-8 border border-black border-dashed bg-[#E4EEFF]">
          <div className="">
            <div className="flex w-full justify-start items-center px-8 pt-8">
              <p className="text-[16.5px] font-[NanumSquareRoundR] text-left text-[#000000]">
                • 주택을 인도받은 임차인은 ___________년 ___________월 ___________일까지 주민등록(전입신고)과
                주택임대차계약서 확정일자를 받기로 하고, 임대인은 위 약정일자의 다음날까지 임차주택에 저당권 등 담보권을
                설정할 수 없다.
              </p>
            </div>

            <div className="flex w-full justify-start items-center px-8 pt-8">
              <p className="text-[16.5px] font-[NanumSquareRoundR] text-left text-[#000000]">
                • 임대인이 위 특약에 위반하여 임차주택에 저당권 등 담보권을 설정한 경우에는 임차인은 임대차계약을 해제
                또는 해지할 수 있다. 이 경우 임대인은 임차인에게 위 특약 위반으로 인한 손해를 배상하여야 한다.
              </p>
            </div>

            <div className="flex w-full justify-start items-center px-8 pt-8">
              <p className="text-[16.5px] font-[NanumSquareRoundR] text-left text-[#000000]">
                • 주택 임대차 계약과 관련하여 분쟁이 있는 경우 임대인 또는 임차인은 법원에 소를 제기하기 전에 먼저
                주택임대차분쟁조정위원회에 조정을 신청한다. 
                <br/>
                <p className='text-[16.5px] font-[NanumSquareRoundR] text-left text-[#000000] pl-4'>( □ 동의 □ 미동의)</p>
              </p>
            </div>

            <div className="flex w-full justify-start items-center px-8 py-8">
              <p className="text-[16.5px] font-[NanumSquareRoundR] text-left text-[#000000]">
                ※ 주택임대차분쟁조정위원회 조정을 통할 경우 60일(최대 90일) 이내 신속하게 조정 결과를 받아볼 수
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-start items-center px-12 p-2">
        <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-black">
          본 계약을 증명하기 위해 계약 당사자가 이의 없음을 확인하고 각각 서명∙날인 후 임대인, 임차인, 개업공인중개사는
          매 장마다 간인하여, 각각 1통씩 보관한다.
        </p>
      </div>

      <div className="flex w-full justify-end items-center px-10 pt-5">
        <p className="text-[16.5px] font-[NanumSquareRoundB] text-left text-black">년 월 일</p>
      </div>

      {/* 중개인 임차인 표 */}
      <div className="flex w-full h-[91px] justify-center pt-8 ">
        <table className="table-auto w-[93.75%] border-collapse bg-white text-[16px] font-nanumSquareRoundB">
          <tbody>
            <tr className="border border-[#ededed]  border-1.37">
              <td className="border border-[#ededed] border-1.37  w-[15.5%] text-[#49454f] p-1">
                <div className="flex items-center justify-center">
                  <p className="text-[16.5px] font-[NanumSquareRoundB] text-center text-[#49454f] bg-[#ffde35] bg-opacity-20 px-2">
                    중개인
                  </p>
                </div>
              </td>
              <td className="border border-[#ededed] border-1.37  w-[17%] text-[#49454f] p-[7px]">성명</td>
              <td colSpan={4} className="text-left text-[#393939] p-[7px]">
                HOUSE-ADVISOR
              </td>
            </tr>
            <tr className="border border-[#ededed] border-1.37">
              <td className=" border border-[#ededed] border-1.37 text-[#49454f] p-1">
                <div className="flex items-center justify-center">
                  <p className="text-[16.5px] font-[NanumSquareRoundB] text-center text-[#49454f] bg-[#ffde35] bg-opacity-20 px-2">
                    임차인
                  </p>
                </div>
              </td>
              <td className="border border-[#ededed] border-1.37  text-[#49454f] p-[7px]">성명</td>
              <td colSpan={4} className="border border-[#ededed] border-1.37 text-left text-[#393939] p-[7px]">
                사용자 이름 {/* 사용자 이름 */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractPaper;

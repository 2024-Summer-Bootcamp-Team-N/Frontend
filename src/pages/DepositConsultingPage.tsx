import React, { useEffect, useRef, useState } from 'react';
import Avatar from '../assets/img/Avatar.svg';
import Navbar2 from '../components/Navbar2.tsx';
import { Link } from 'react-router-dom';
import AirplaneBtn from '../assets/img/AirplaneBtn.svg';
import Arrow from '../assets/img/Arrow.svg';

const DepositConsultingPage: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [sessionId, setSessionId] = useState<string>('');
  const pingInterval = useRef<number | null>(null);

  useEffect(() => {
    const wsUrl = 'ws://localhost:8001/ws/chat/';
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('WebSocket connection opened');
      setSocket(ws);
      ws.send(JSON.stringify({ type: 'init' }));

      // Ping every 30 seconds
      pingInterval.current = window.setInterval(() => {
        ws.send(JSON.stringify({ type: 'ping' }));
      }, 30000);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);

      if (data.session_id) {
        setSessionId(data.session_id);
      }

      if (data.message) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
      if (pingInterval.current) {
        clearInterval(ppingInterval.current);
      }
    };

    return () => {
      ws.close();
      if (pingInterval.current) {
        clearInterval(pingInterval.current);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (textareaRef.current && socket) {
      const message = textareaRef.current.value.trim();
      if (message) {
        socket.send(JSON.stringify({ type: 'message', message: message, session_id: sessionId }));
        textareaRef.current.value = '';
      }
    }
  };

  const handleButtonClick = (text: string) => {
    if (textareaRef.current) {
      textareaRef.current.value = text;
    }
    handleSendMessage();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-[72px] justify-start">
        <Navbar2 />
      </div>
      <div className="flex flex-grow bg-[#FEFEFE]">
        {/* Left Container */}
        <div className="flex flex-col justify-center min-w-[23%] bg-[#FAFAFA] h-full border border-gray p-4">
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-end justify-start w-[250px] h-[30px] pb-[20px] ml-[20px]">
              <p className="text-[22px] font-[NanumSquareEB] text-black">💡 이런 질문을 해보세요!</p>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('계약 시 주의사항')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">계약 시 주의사항</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('세금 및 기타 내용')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">세금 및 기타 내용</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-start">
                <button
                  className="flex relative w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                  onClick={() => handleButtonClick('이사 및 정착 팁')}
                >
                  <p className="absolute text-[18px] font-[NanumSquareB] text-black">이사 및 정착 팁</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-end justify-start w-[250px] h-[100px] pb-[20px] ml-[20px]">
              <p className="text-[22px] font-[NanumSquareEB] text-black">🚨 전세사기</p>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('등기부 확인하기')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">등기부 확인하기</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('전세와 매매 비교')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">전세와 매매 비교</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('다세대 주택이란')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">다세대 주택이란</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('다가구 주택이란')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">다가구 주택이란</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-full h-[55px] items-center justify-center">
                <div className="flex w-[180px] h-[40px] justify-start items-center">
                  <button
                    className="flex relative left-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('집주인 정보 확인')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">집주인 정보 확인</p>
                  </button>
                </div>
                <div className="flex w-[180px] h-[40px] justify-end items-center">
                  <button
                    className="flex relative right-0 w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                    onClick={() => handleButtonClick('대리인 확인하기')}
                  >
                    <p className="absolute text-[18px] font-[NanumSquareB] text-black">대리인 확인하기</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-row w-[360px] h-[55px] items-center justify-start">
                <button
                  className="flex relative w-[170px] h-[40px] justify-center items-center rounded-[50px] bg-[#F0F0F0]"
                  onClick={() => handleButtonClick('가짜 계약 주의사항')}
                >
                  <p className="absolute text-[18px] font-[NanumSquareB] text-black">가짜 계약 주의사항</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start w-[77%] ml-[100px] mr-[100px]">
          {/* Chat Container */}
          <div className="flex flex-col w-full h-[85%] overflow-y-auto flex-grow">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-row ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full p-4 space-y-4`}
              >
                {index % 2 === 0 && <img src={Avatar} alt="Logo" className="flex justify-start p-4" />}
                <div
                  className={`flex max-w-[40%] py-3 px-4 rounded-2xl ${index % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-[#357FFF]'}`}
                >
                  <p className={`text-lg font-[NanumSquareR] ${index % 2 === 0 ? 'text-black' : 'text-white'}`}>
                    {message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Input Container */}
          <div className="flex flex-row h-[15%] justify-center items-center p-4 bg-[#FEFEFE] border-t border-gray-300">
            <div className="flex relative min-w-[50%] max-w-[50%] items-center h-[50px] border border-gray-300 rounded-2xl font-[NanumSquareR]">
              <textarea
                ref={textareaRef}
                wrap="soft"
                placeholder="질문을 입력해보세요."
                className="flex h-[45px] min-w-[90%] max-w-[90%] resize-none outline-none overflow-y-auto rounded-2xl p-2 ml-[10px] pr-[50px] text-[18px]"
                onKeyDown={handleKeyDown}
              />
              <button
                ref={sendButtonRef}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center"
                onClick={handleSendMessage}
              >
                <img src={AirplaneBtn} className="flex p-1" />
              </button>
            </div>
            <div className="flex flex-row ml-2">
              <Link to="/contract">
                <button className="flex flex-row p-2 bg-[#FEFEFE] text-[#555] font-[NanumSquareB] rounded-lg">
                  <div className="flex flex-col">
                    계약하기
                    <svg width={66} height={3} viewBox="0 0 58 3" preserveAspectRatio="none">
                      <path d="M-0.00390625 1.5H58.0047" stroke="#555" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <img src={Arrow} className="flex my-1.5 ml-0.5" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepositConsultingPage;

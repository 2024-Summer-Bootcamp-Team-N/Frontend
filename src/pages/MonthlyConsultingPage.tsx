import React, { useEffect, useRef, useState } from 'react';
import Avatar from '../assets/img/Avatar.svg';
import Navbar2 from '../components/Navbar2.tsx';
import { Link } from 'react-router-dom';
import AirplaneBtn from '../assets/img/AirplaneBtn.svg';
import Arrow from '../assets/img/Arrow.svg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DOMPurify from 'dompurify';

const MonthlyConsultingPage: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ type: 'user' | 'ai'; content: string }[]>([]);
  const [sessionId, setSessionId] = useState<string>('');
  const pingInterval = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wsUrl = import.meta.env.VITE_WS_URL;
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
        // Handle incoming AI message immediately
        setMessages((prevMessages) => [...prevMessages, { type: 'ai', content: data.message }]);
        setIsLoading(false);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
      if (pingInterval.current) {
        clearInterval(pingInterval.current);
      }
    };

    return () => {
      ws.close();
      if (pingInterval.current) {
        clearInterval(pingInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    // Send roomId after a fixed delay of 4 seconds
    const timer = setTimeout(() => {
      const roomId = localStorage.getItem('roomId');
      if (roomId && textareaRef.current && sendButtonRef.current) {
        const message = `room_id = ${roomId}`;
        setMessages((prevMessages) => [...prevMessages, { type: 'user', content: message }]);
        socket?.send(JSON.stringify({ type: 'message', message: message, session_id: sessionId }));
        textareaRef.current.value = '';
        setIsLoading(true);
      }
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [socket, sessionId]); // Run this effect once, on component mount

  const handleSendMessage = () => {
    if (textareaRef.current && socket && !isLoading) {
      const message = textareaRef.current.value.trim();
      if (message) {
        setMessages((prevMessages) => [...prevMessages, { type: 'user', content: message }]);
        socket.send(JSON.stringify({ type: 'message', message: message, session_id: sessionId }));
        textareaRef.current.value = ''; // 여기서 입력 필드를 비웁니다
        setIsLoading(true);

        // 추가: 비동기 작업 후 다시 한 번 입력 필드를 비웁니다
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.value = '';
          }
        }, 0);
      }
    }
  };

  const handleButtonClick = (text: string) => {
    if (textareaRef.current) {
      textareaRef.current.value = text;
      handleSendMessage();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();

      // 추가: Enter 키 입력 후 입력 필드를 비웁니다
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.value = '';
        }
      }, 0);
    }
  };

  const formatMessage = (content: string) => {
    const sanitizedContent = DOMPurify.sanitize(content);
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-2" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-bold mb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-bold mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code className="bg-gray-100 rounded px-1" {...props} />
            ) : (
              <code className="block bg-gray-100 rounded p-2 mb-2" {...props} />
            ),
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    );
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col h-[72px] justify-start">
        <Navbar2 />
      </div>
      <div className="flex flex-grow bg-[#FEFEFE] overflow-hidden">
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
        </div>
        <div className="flex flex-col justify-start w-[77%] ml-[100px] mr-[100px] mt-[72px]">
          {/* Chat Container */}
          <div
            ref={chatContainerRef}
            className="flex flex-col w-full h-[88%] overflow-y-auto h-[calc(100%_-_80px)] p-2"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-row ${message.type === 'ai' ? 'justify-start' : 'justify-end'} w-full p-4 space-y-4`}
              >
                {message.type === 'ai' && (
                  <img src={Avatar} alt="Logo" className="flex justify-start w-[90px] h-[90px] p-4" />
                )}
                <div
                  className={`flex max-w-[50%] py-3 px-4 rounded-2xl ${
                    message.type === 'ai' ? 'bg-[#F5F5F5]' : 'bg-[#357FFF]'
                  }`}
                >
                  <div
                    className={`text-lg font-[NanumSquareR] text-left ${message.type === 'ai' ? 'text-black' : 'text-white'}`}
                  >
                    {formatMessage(message.content)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-row justify-start w-full p-4 space-y-4">
                <img src={Avatar} alt="Logo" className="flex justify-start w-[90px] h-[90px] p-4" />
                <div className="flex items-center justify-center max-w-[50%] py-3 px-4 rounded-2xl bg-[#F5F5F5]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Input Container */}
          <div className="flex flex-row h-[12%] justify-center items-center p-4 bg-[#FEFEFE] border-t border-gray-300">
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

export default MonthlyConsultingPage;

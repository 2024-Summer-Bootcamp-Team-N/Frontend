import { useState } from 'react';
import Input from '../components/Input.tsx';
import Input2 from '../components/Input2.tsx';
import Main from '../assets/img/Main.svg'; // 배경 이미지 import
import Navbar from '../components/Navbar.tsx';

function InputPage() {
  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleNext = () => {
    setIsInputVisible(false);
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-[72px] justify-center">
          <Navbar />
        </div>
        <div
          className="flex flex-col w-full h-full font-nanumSquareR bg-cover bg-center"
          style={{ backgroundImage: `url(${Main})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        >
          <div className="flex justify-center items-center">
            {isInputVisible ? <Input onNext={handleNext} /> : <Input2 />}
          </div>
        </div>
      </div>
    </>
  );
}

export default InputPage;

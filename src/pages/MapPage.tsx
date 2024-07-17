import { useState } from 'react';
import Navbar2 from '../components/Navbar2.tsx';
import Sidebar from '../components/Sidebar.tsx';

const MapPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-[72px]">
          <Navbar2 />
        </div>
        <div className="flex w-full h-full justify-center items-center">
          {isSidebarOpen && <Sidebar onClose={handleCloseSidebar} />} {/* Sidebar를 열고 닫는 기능을 추가 */}
          <div onClick={handleOpenSidebar} className="cursor-pointer">
            <button
              className="flex items-center w-[76px] h-[27px] justify-center rounded-[50px] mt-[15px] bg-[#efefef] hover:bg-gray-200"
              style={{
                boxShadow: '0px 2px 5px -1px rgba(50,50,93,0.25), 0px 1px 3px -1px rgba(0,0,0,0.3)',
              }}
            >
              <p className="flex text-[13px] font-bold text-black">매물</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;

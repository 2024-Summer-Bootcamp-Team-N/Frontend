import { Link } from 'react-router-dom';
import LogoBlue from '../assets/img/LogoBlue.svg';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRoundB';
    src: url('/src/assets/fonts/NanumSquareRound/NanumSquareRoundB.ttf') format('truetype');
  }

  .navbar-font {
    font-family: 'NanumSquareRoundB', sans-serif;
  }
`;

const NavbarWrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 4px;
`;

const NavbarLogo = styled.img`
  margin-top: 1px;
  margin-right: 20px;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Replace space-x-4 with gap in styled-components */
`;

const Navbar = () => {
  return (
    <>
      <GlobalStyle />
      <NavbarWrapper className="navbar-font">
        <Link to="/">
          <NavbarLogo src={LogoBlue} alt="Logo" />
        </Link>
        <div className="flex-grow"></div>
        <NavbarLinks>
          <Link to="/map" className="hover:underline text-[#49454F]">내 집 찾기</Link>
          <span className="border-l border-[#E0E0E0] h-[19px]"></span>
          <Link to="/login" className="hover:underline text-[#49454F]">로그인</Link>
          <span className="border-l border-[#E0E0E0] h-[19px]"></span>
          <Link to="/signup" className="hover:underline text-[#49454F]">회원가입</Link>
        </NavbarLinks>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

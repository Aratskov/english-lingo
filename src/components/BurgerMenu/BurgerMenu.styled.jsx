import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 0;

  background-color: transparent;
  outline: transparent;

  border: none;
  font-size: 40px;

  cursor: pointer;

  &:hover {
    color: #f4c550;
    transform: scale(1.2);
  }
`;

export const BurgerMenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  min-height: 500px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const LinkStyled = styled(NavLink)`
  font-size: 48px;
  line-height: 1.25;

  &.active {
    color: #f4c550;
  }

  &:hover:not(.active) {
    color: #f4c550;
    transform: scale(1.2);
  }
`;

export const BtnLogOut = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f4c550;
  color: #fff;

  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;

  border-radius: 12px;
  border: transparent;
  outline: transparent;

  cursor: pointer;

  &:hover {
    background-color: #ffdc86;
  }
`;

export const WrapAuth = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const BtnAuth = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40vw;
  min-width: 160px;
  height: 50px;
  background-color: #f4c550;
  color: #fff;

  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.5;

  border-radius: 12px;
  border: transparent;
  outline: transparent;

  cursor: pointer;

  &:hover {
    background-color: #ffdc86;
  }
`;

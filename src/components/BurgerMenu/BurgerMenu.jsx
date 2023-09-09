import { useDispatch, useSelector } from 'react-redux';
import { BiX } from 'react-icons/bi';

import {
  BurgerMenuContainer,
  BurgerMenuList,
  Nav,
  LinkStyled,
  CloseButton,
  BtnLogOut,
  BtnAuth,
  WrapAuth,
} from './BurgerMenu.styled';
import { createPortal } from 'react-dom';

import { isAuthSelect } from '../../redux/auth/authSelect';
import { logout } from '../../redux/auth/authSlice';

const modalRoot = document.querySelector('#modal-auth-root');

export const BurgerMenu = ({ onClick }) => {
  const isAuth = useSelector(isAuthSelect);
  const dispatch = useDispatch();

  return createPortal(
    <BurgerMenuContainer>
      <div style={{ padding: '0 15px' }}>
        <CloseButton onClick={onClick}>
          <BiX />
        </CloseButton>
        <BurgerMenuList>
          <Nav>
            <LinkStyled to="/" onClick={onClick}>
              Home
            </LinkStyled>
            <LinkStyled to="/teachers" onClick={onClick}>
              Teachers
            </LinkStyled>
            {isAuth && (
              <LinkStyled to="/favorites" onClick={onClick}>
                Favorites
              </LinkStyled>
            )}
          </Nav>
          {isAuth ? (
            <BtnLogOut
              onClick={() => {
                dispatch(logout());
                onClick();
              }}
            >
              LogOut
            </BtnLogOut>
          ) : (
            <WrapAuth>
              <BtnAuth to="/login" onClick={onClick}>
                Login
              </BtnAuth>
              <BtnAuth to="/register" onClick={onClick}>
                Register
              </BtnAuth>
            </WrapAuth>
          )}
        </BurgerMenuList>
      </div>
    </BurgerMenuContainer>,
    modalRoot
  );
};

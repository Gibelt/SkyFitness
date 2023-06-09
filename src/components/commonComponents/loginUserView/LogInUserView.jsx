import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FetchLogOut } from 'store/actions/creators/creators';
import { Button } from '../button';
import {
  userNameDataSelector,
  userLogInSelector,
} from '../../../store/selectors/selectors';
import * as s from './LogInUserViewStyle';

export default function LogInUserView() {
  const [isMainPageLocal, setIsMainPageLocal] = useState(false);
  useEffect(() => {
    const urlPath = new URL(document.URL).pathname;
    setIsMainPageLocal(urlPath === '/');
  }, []);

  const userName = useSelector(userNameDataSelector);
  const userLogIn = useSelector(userLogInSelector);
  console.log(userLogIn);
  const dispatch = useDispatch();
  const [clickLogOutMenu, setClickLogOutMenu] = useState(false);
  const navigate = useNavigate();
  const userNameClickHandler = () => {
    navigate('/profile');
  };
  const arrowSvgClickHandler = () => {
    setClickLogOutMenu((prev) => !prev);
  };
  const logOutClickHandler = () => {
    sessionStorage.removeItem('skyFitnessLoginData');
    dispatch(FetchLogOut());
    navigate('/');
  };
  return (
    <>
      {!userLogIn && (
        <Button.s16.blue width="77px" onClick={() => navigate('/login')}>
          Войти
        </Button.s16.blue>
      )}
      {userLogIn && (
        <s.User>
          <s.UserImg />
          <s.UserText>
            <s.UserName
              $isMainPage={isMainPageLocal}
              onClick={userNameClickHandler}
            >
              {userName}
            </s.UserName>
            <s.UserArrowSvg
              onClick={arrowSvgClickHandler}
              $isMainPage={isMainPageLocal}
            />
            {clickLogOutMenu && (
              <s.LogOutMenu $isMainPage={isMainPageLocal}>
                <Button.s20.green
                  onClick={logOutClickHandler}
                  height="45px"
                  width="150px"
                >
                  Выйти
                </Button.s20.green>
              </s.LogOutMenu>
            )}
          </s.UserText>
        </s.User>
      )}
    </>
  );
}

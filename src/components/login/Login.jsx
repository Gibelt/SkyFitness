import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, redirect } from 'react-router-dom';
import {
  usePostSignInWithPasswordQuery,
  usePostSignUpQuery,
  usePostUpdatePasswordQuery,
  usePostUpdateUserInfoQuery,
  usePostRefreshToIdTokenQuery,
} from '../../pages/services/queryApi';
import { Button } from '../commonComponents/button';
import * as S from './LoginStyle';
import Logo from '../logo/Logo';
import {
  loginDataErrorMSGSelector,
  loginDataSelector,
} from '../../store/selectors/selectors';
import {
  FetchSignUpPassNotEqual,
  FetchLoginSuccess,
  FetchLoginFailure,
  FetchUpdateName,
  FetchUpdateToken,
} from '../../store/actions/creators/creators';
import {
  InputFields,
  InputFieldsChangePassword,
  InputFieldsChangeLoginName,
} from './InputFields';
import ButtonGetSignUp from './BtnSignUp';
import ButtonLogIn from './BtnLogIn';
import ButtonChangeUserName from './BtnChangeName';
import ButtonChangePassword from './BtnChangePassword';
import LoginMenu from './LoginMenu';
import ErrorArea from './Errors';

function Login({ type = 'login', close }) {
  return (
    <S.CenterBlock>
      <S.LoginMainBlock>
        <S.groupLogoImg>
          <Logo />
        </S.groupLogoImg>
        <LoginBlock typeBlock={type} close={close} />
      </S.LoginMainBlock>
    </S.CenterBlock>
  );
}

export default Login;
export function LoginBlock({ typeBlock, close }) {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector(loginDataErrorMSGSelector);
  const loginDataSelected = useSelector(loginDataSelector);
  const [skipSignUp, setSkipSignUp] = useState(true);
  const [skipLogIn, setSkipLogIn] = useState(true);
  const [skipChangePassword, setSkipChangePassword] = useState(true);
  const [skipChangeUserName, setSkipChangeUserName] = useState(true);
  const [logInfo, setLogInfo] = useState(null);
  const loginStates = {
    states: {
      signUp,
    },
    funcStates: {
      setSkipSignUp,
      setSkipLogIn,
      setSignUp,
      setSkipChangePassword,
      setSkipChangeUserName,
    },
  };
  const {
    data: dataRefToken,
    error: errorRefToken,
    isLoading: isLoadingRefToken,
  } = usePostRefreshToIdTokenQuery(
    { refreshToken: loginDataSelected?.refreshToken },
    {
      skip: typeBlock === 'login',
      refetchOnMountOrArgChange: true,
    }
  );
  const {
    data: dataSignUp,
    error: errorSignUp,
    isLoading: isLoadingSignUp,
  } = usePostSignUpQuery(
    {
      email: logInfo?.login,
      password: logInfo?.password,
    },
    { skip: skipSignUp }
  );
  const {
    data: dataLogIn,
    error: errorLogIn,
    isLoading: isLoadingLogIn,
  } = usePostSignInWithPasswordQuery(
    {
      email: logInfo?.login,
      password: logInfo?.password,
    },
    { skip: skipLogIn }
  );
  const {
    data: dataNewPassword,
    error: errorNewPassword,
    isLoading: isLoadingNewPassword,
  } = usePostUpdatePasswordQuery(
    {
      idToken: loginDataSelected.idToken ?? '',
      newPassword: logInfo?.password,
    },
    { skip: skipChangePassword }
  );
  const {
    data: dataUpdateUserInfo,
    error: errorUpdateUserInfo,
    isLoading: isLoadingUpdateUserInfo,
  } = usePostUpdateUserInfoQuery(
    {
      idToken: loginDataSelected.idToken ?? '',
      newUserName: logInfo?.nameUser,
    },
    { skip: skipChangeUserName }
  );
  console.log(dataUpdateUserInfo);
  const isLoading =
    isLoadingSignUp ||
    isLoadingLogIn ||
    isLoadingNewPassword ||
    isLoadingUpdateUserInfo;
  useEffect(() => {
    dispatch(FetchLoginFailure({}));
  }, []);
  useEffect(() => {
    let errorMessageStore = {};
    if (errorSignUp) {
      errorMessageStore = { Error: errorSignUp.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorLogIn) {
      errorMessageStore = { Error: errorLogIn.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorNewPassword) {
      errorMessageStore = { Error: errorNewPassword.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorUpdateUserInfo) {
      errorMessageStore = { Error: errorUpdateUserInfo.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    } else if (errorRefToken) {
      errorMessageStore = { Error: errorRefToken.data.error.message };
      dispatch(FetchLoginFailure(errorMessageStore));
    }
  }, [
    errorLogIn,
    errorSignUp,
    errorNewPassword,
    errorUpdateUserInfo,
    errorRefToken,
  ]);

  const writeLoginDataStorage = (data) =>
    sessionStorage.setItem('skyFitnessLoginData', JSON.stringify(data));
  useEffect(() => {
    if (dataLogIn) {
      dispatch(FetchLoginSuccess(dataLogIn));
      writeLoginDataStorage(dataLogIn);
      navigate('/');
    } else if (dataSignUp) {
      dispatch(FetchLoginSuccess(dataSignUp));
      writeLoginDataStorage(dataSignUp);
      navigate('/');
    } else if (dataNewPassword) {
      close();
    } else if (dataUpdateUserInfo) {
      const loginDataStorage = JSON.parse(
        sessionStorage.getItem('skyFitnessLoginData')
      );
      loginDataStorage.displayName = dataUpdateUserInfo.displayName;
      sessionStorage.setItem(
        'skyFitnessLoginData',
        JSON.stringify(loginDataStorage)
      );
      dispatch(FetchUpdateName({ ...dataUpdateUserInfo }));
      close();
    } else if (dataRefToken) {
      const loginDataStorage = JSON.parse(
        sessionStorage.getItem('skyFitnessLoginData')
      );
      loginDataStorage.refreshToken = dataRefToken.refresh_token;
      loginDataStorage.idToken = dataRefToken.access_token;
      loginDataStorage.expiresIn = dataRefToken.expires_in;
      sessionStorage.setItem(
        'skyFitnessLoginData',
        JSON.stringify(loginDataStorage)
      );
      dispatch(FetchUpdateToken({ ...dataRefToken }));
    }
    dispatch(FetchLoginFailure({}));
  }, [
    dataLogIn,
    dataSignUp,
    dataUpdateUserInfo,
    dataNewPassword,
    dataRefToken,
  ]);
  const GetListFields = () => {
    let typeListFields;
    if (typeBlock === 'login') {
      typeListFields = InputFields;
    } else if (typeBlock === 'changePassword') {
      typeListFields = InputFieldsChangePassword;
    } else if (typeBlock === 'changeLoginName') {
      typeListFields = InputFieldsChangeLoginName;
    }
    return typeListFields;
  };
  return (
    <S.LoginChangeBlock>
      {typeBlock === 'changePassword' && (
        <S.changeLabel>Новый пароль:</S.changeLabel>
      )}
      {typeBlock === 'changeLoginName' && (
        <S.changeLabel>Новый имя пользователя:</S.changeLabel>
      )}
      <S.LoginInputsBlock>
        <LoginMenu
          typeBlock={typeBlock}
          isLoading={isLoading}
          list={GetListFields()}
          count={signUp ? 3 : 2}
          loginStates={loginStates}
        />
        {Object.keys(errorMessage).length > 0 && (
          <ErrorArea errorMessage={errorMessage} />
        )}
        {!signUp && typeBlock === 'login' && (
          <ButtonLogIn
            isLoading={isLoading}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            dispatch={dispatch}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'login' && (
          <ButtonGetSignUp
            signUp={signUp}
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'changePassword' && (
          <ButtonChangePassword
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
        {typeBlock === 'changeLoginName' && (
          <ButtonChangeUserName
            isLoading={isLoading}
            dispatch={dispatch}
            loginStates={loginStates.states}
            loginFunc={loginStates.funcStates}
            setLogInfo={setLogInfo}
          />
        )}
      </S.LoginInputsBlock>
    </S.LoginChangeBlock>
  );
}

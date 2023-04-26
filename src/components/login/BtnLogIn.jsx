import { GetLogParams } from './CommonProc';
import { Button } from '../commonComponents/button';
import * as S from './LoginStyle';

function ButtonLogIn({ isLoading, loginFunc, setLogInfo }) {
  function btnLoginClickHandler() {
    loginFunc.setSkipSignUp(true);
    GetLogParams(setLogInfo);
    loginFunc.setSkipLogIn(false);
  }

  return (
    <S.groupButtonLogIn>
      <Button.s18.blue
        width="278px"
        height="52px"
        disabled={isLoading}
        onClick={() => btnLoginClickHandler()}
      >
        Войти
      </Button.s18.blue>
    </S.groupButtonLogIn>
  );
}

export default ButtonLogIn;

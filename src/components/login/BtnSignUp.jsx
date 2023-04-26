import { CheckPassword, GetLogParams } from "./CommonProc";
import { Button } from '../commonComponents/button';
import * as S from './LoginStyle';

function ButtonGetSignUp({
    dispatch,
    loginStates,
    loginFunc,
    isLoading,
    setLogInfo,
  }) {
  
    function btnSignUpClickHandler() {
      loginFunc.setSkipLogIn(true);
      if (!loginStates.signUp) {
        loginFunc.setSignUp(true);
        return;
      }
      if (!CheckPassword(dispatch)) {
        return;
      }
      GetLogParams(setLogInfo);
      loginFunc.setSkipSignUp(false);
    }
  
    return (
      <S.groupButtonGetSignUp $signUp={loginStates.signUp} $changeGroup={false}>
        <Button.s18.white
          disabled={isLoading}
          width="278px"
          height="52px"
          onClick={() => btnSignUpClickHandler()}
        >
          Зарегистироваться
        </Button.s18.white>
      </S.groupButtonGetSignUp>
    );
  }
  export default ButtonGetSignUp;
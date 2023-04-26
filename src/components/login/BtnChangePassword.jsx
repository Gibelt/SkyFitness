import { CheckPassword, GetLogParams } from './CommonProc';
import { Button } from '../commonComponents/button';
import * as S from './LoginStyle';

function ButtonChangePassword({ isLoading, loginFunc, setLogInfo, dispatch }) {
  function btnChangePasswordClickHandler() {
    if (!CheckPassword(dispatch)) {
      return;
    }
    GetLogParams(setLogInfo);
    loginFunc.setSkipChangePassword(false);
  }

  return (
    <S.groupButtonGetSignUp $signUp={false} $changeGroup>
      <Button.s18.blue
        width="278px"
        height="52px"
        disabled={isLoading}
        onClick={() => btnChangePasswordClickHandler()}
      >
        Сохранить
      </Button.s18.blue>
    </S.groupButtonGetSignUp>
  );
}

export default ButtonChangePassword;

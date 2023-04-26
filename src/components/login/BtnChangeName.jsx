import { GetLogParams } from './CommonProc';
import { Button } from '../commonComponents/button';
import * as S from './LoginStyle';

function ButtonChangeUserName({
    isLoading,
    loginFunc,
    setLogInfo,
  }) {
    function btnChangeUserNameClickHandler() {
      GetLogParams(setLogInfo);
      loginFunc.setSkipChangeUserName(false);
    }
  
    return (
      <S.groupButtonGetSignUp $signUp={false} $changeGroup>
        <Button.s18.blue
          width="278px"
          height="52px"
          disabled={isLoading}
          onClick={() => btnChangeUserNameClickHandler()}
        >
          Сохранить
        </Button.s18.blue>
      </S.groupButtonGetSignUp>
    );
  }

  export default ButtonChangeUserName;
import { FetchSignUpPassNotEqual } from '../../store/actions/creators/creators';

export const CheckPassword = (dispatch) => {
  const pass = document.getElementsByName('password')[0].value;
  const repPass = document.getElementsByName('ReturnPassword')[0].value;
  if (pass !== repPass) {
    dispatch(
      FetchSignUpPassNotEqual({ SignUpPassNotEqual: 'Пароли не совпадают' })
    );
    return false;
  }
  return true;
};

export const GetLogParams = (stateParams) => {
    const objParams = {};
    for (let index = 1; index < 4; index++) {
      const element = document.getElementById(String(index));
      if (element) {
        objParams[element.name] = element.value;
      }
    }
    stateParams(objParams);
  }

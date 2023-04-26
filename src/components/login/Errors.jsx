import * as S from './LoginStyle';

function ShowErrors({ errorMessage }) {
  let keys = Object.keys(errorMessage);
  keys = keys.map((errorMessageKey, key) => (
    // eslint-disable-next-line react/no-array-index-key
    <S.ErrorSpan key={key}>{errorMessage[errorMessageKey]}</S.ErrorSpan>
  ));
  return keys;
}

function ErrorArea({ errorMessage }) {
  return (
    <S.ErrorArea>
      <ShowErrors errorMessage={errorMessage} />
    </S.ErrorArea>
  );
}

export default ErrorArea;

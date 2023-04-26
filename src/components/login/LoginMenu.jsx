import * as S from './LoginStyle';

const LoginMenu = ({ list, count, isLoading, typeBlock }) => {
  const content = [];
  list.forEach((inputElem, index) => {
    if (index < count) {
      content.push(
        <S.InputField
          $typeBlock={typeBlock}
          type={inputElem.type}
          disabled={isLoading}
          id={inputElem.key}
          name={inputElem.name}
          placeholder={inputElem.placeholder}
          key={inputElem.key}
        />
      );
    }
  });
  return content;
};

export default LoginMenu;

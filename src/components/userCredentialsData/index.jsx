import { useState } from 'react';
import * as St from './styled';

export default ({ login = 'login', password = 'password' }) => {
  const [passVisibility, setPassVisibility] = useState();
  const hiddenPass = password.replace(/./g, '⦁');

  return (
    <St.Wrapper>
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      />
      <St.Item>
        <St.Text> Логин: </St.Text>
        <St.Text> {login}</St.Text>
      </St.Item>
      <St.Item>
        <St.Text> Пароль: </St.Text>
        <St.Text style={{ minWidth: '100px' }}>
          {passVisibility ? password : hiddenPass}
        </St.Text>
        <EyeButton
          passVisibility={passVisibility}
          onClick={() => setPassVisibility(!passVisibility)}
        />
      </St.Item>
    </St.Wrapper>
  );
};

const EyeButton = ({ passVisibility, onClick }) => {
  const eye = '👁';
  const slashEye = <del>{eye}</del>;
  return (
    <St.EyeButton onClick={onClick}>
      <span>{passVisibility ? eye : slashEye}</span>
    </St.EyeButton>
  );
};


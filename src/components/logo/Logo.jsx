import { useNavigate } from 'react-router-dom';
import * as s from './LogoStyle';

export default function Logo({ color }) {
  const navigate = useNavigate();
  return (
    <s.Logo>
      <s.LogoImg
        src={color === 'white' ? '/img/logo-white.svg' : '/img/logo-black.svg'}
        onClick={() => navigate('/')}
      />
    </s.Logo>
  );
}

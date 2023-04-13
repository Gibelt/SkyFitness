import Logo from 'components/logo/Logo';
import Popover from 'components/popover';
import { Button } from 'components/commonComponents/button/button';
import * as S from './styles';
import { InputField } from '../loginComp/LoginStyles';

export default function LoginUpdate(props) {
  const { onCloseHandler } = props;

  return (
    <Popover onClose={onCloseHandler}>
      <Logo />
      <S.ContentWrapper>
        <S.Title>Новый пароль:</S.Title>
        <S.FieldsBlock>
          {' '}
          <InputField placeholder="Пароль" />
          <InputField placeholder="Повторите пароль" />
        </S.FieldsBlock>
        <Button.s18.blue width="275px">Сохранить</Button.s18.blue>
      </S.ContentWrapper>
    </Popover>
  );
}

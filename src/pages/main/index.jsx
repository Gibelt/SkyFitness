import LogInUserView from 'components/commonComponents/loginUserView/LogInUserView';
import GroupTrainingCards from 'components/main/TrainingCards';
import * as S from './style';
import * as Comp from '../../components/main/Main';
import Logo from '../../components/logo/Logo';
import { Button } from '../../components/commonComponents/button';

export default function Main() {
  return (
    <S.mainWrapper>
      <S.groupLogo>
        <Logo color="white" />
        <S.groupBtn>
          <LogInUserView />
        </S.groupBtn>
      </S.groupLogo>
      <S.groupBigHeader>
        <S.groupHeaders>
          <Comp.DescCommon />
          <Comp.MainHeader />
        </S.groupHeaders>
        <Comp.Sticker />
      </S.groupBigHeader>
      <GroupTrainingCards />
      <S.groupBtnRedirect>
        <Button.s24.green onClick={() => scroll(0, 0)} width="147px">
          Перейти ↑
        </Button.s24.green>
      </S.groupBtnRedirect>
    </S.mainWrapper>
  );
}

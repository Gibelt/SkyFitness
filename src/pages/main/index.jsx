/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogInSelector } from 'store/selectors/selectors';
import LogInUserView from 'components/commonComponents/login/logInUserview';
import * as S from './indexStyle';
import * as Comp from '../../components/main/mainPage';
import Logo from '../../components/logo/Logo';
import { Button } from '../../components/commonComponents/button/button';
import { CourseCard } from '../../components/commonComponents/courseCard/courseCard';

export default function Main() {
  const navigate = useNavigate();
  // const userLogIn = useSelector(userLogInSelector);
  const HendleClickCours = (srcPage) => navigate(`/description/${srcPage}`);
  /*   useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.style = 'background-color: #271a58';
    }
  }); */
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
      <S.groupTrainingCards>
        <CourseCard
          title="Йога"
          src="/img/SVG_for_Course_Cards/yoga.png"
          onClick={() => HendleClickCours('yoga')}
        />
        <CourseCard
          title="Стретчинг"
          src="/img/SVG_for_Course_Cards/stretching.png"
          onClick={() => HendleClickCours('stretching')}
        />
        <CourseCard
          title="Танцевальный фитнес"
          src="/img/SVG_for_Course_Cards/dance-fitness.png"
          onClick={() => HendleClickCours('dance-fitness')}
        />
        <CourseCard
          title="Степ-аэробика"
          src="/img/SVG_for_Course_Cards/step-aerobics.png"
          onClick={() => HendleClickCours('step-aerobics')}
        />
        <CourseCard
          title="Бодифлекс"
          src="/img/SVG_for_Course_Cards/bodyflex.png"
          onClick={() => HendleClickCours('bodyflex')}
        />
      </S.groupTrainingCards>
      <S.groupBtnRedirect>
        <Button.s24.green width="147px">Перейти ↑</Button.s24.green>
      </S.groupBtnRedirect>
    </S.mainWrapper>
  );
}

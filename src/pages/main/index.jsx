/* eslint-disable react/jsx-pascal-case */
import { useEffect } from 'react';
import * as S from './indexStyle';
import * as Comp from '../../components/main/mainPage';
import Logo from '../../components/logo/Logo';
import { Button } from '../../components/commonComponents/button/button';
import { CourseCard } from '../../components/commonComponents/courseCard/courseCard';

export default function Main() {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.style = 'background-color: #271a58';
    }
  });
  return (
    <S.mainWrapper>
        <S.groupLogo>
          <Logo color="white" />
          <S.groupBtn>
            <Button.s16.blue width="77px">Войти</Button.s16.blue>
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
           />
          <CourseCard
            title="Стретчинг"
            src="/img/SVG_for_Course_Cards/stretching.png"
           />
          <CourseCard
            title="Танцевальный фитнес"
            src="/img/SVG_for_Course_Cards/dance-fitness.png"
           />
          <CourseCard
            title="Степ-аэробика"
            src="/img/SVG_for_Course_Cards/step-aerobics.png"
           />
          <CourseCard
            title="Бодифлекс"
            src="/img/SVG_for_Course_Cards/bodyflex.png"
           />
        </S.groupTrainingCards>
        <S.groupBtnRedirect>
          <Button.s24.green width="147px">Перейти ↑</Button.s24.green>
        </S.groupBtnRedirect>
      </S.mainWrapper>
  );
}

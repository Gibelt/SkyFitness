import { useEffect } from "react";
import * as S from "./indexStyle";
import * as Comp from "../../components/main/mainPage";

export default function Main() {
  useEffect(() => {
    let wrapper = document.querySelector(".wrapper");
    if (wrapper) {
      wrapper.style = "background-color: #271a58";
    }
  });
  return (
    <>
    <S.mainWrapper>
      <S.groupLogo>
        <Comp.Logo />
        <S.groupBtn>
          <button>Войти</button>
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
        <S.tempCard />
        <S.tempCard />
        <S.tempCard />
        <S.tempCard />
        <S.tempCard />
      </S.groupTrainingCards>
      <S.groupBtnRedirect>
        <button>Наверх</button>
      </S.groupBtnRedirect>
    </S.mainWrapper>
    
    </>
  );
}

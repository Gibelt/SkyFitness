import Header from "components/header/Header";
import { Button } from "components/commonComponents/button/button";
import Guide from "./workoutVideoPage/guide";

import Styled from "./workoutVideoPage/styledComponents";

export default function WorkoutVideoPage({ course = "yoga" }) {
  const settings = {
    yoga: {
      title: `Йога`,
      bgFile: `yoga.png`,
    },
  };

  const setting = settings[course];
  const title = setting.title;
  const src = `/img/pages/workoutVideo/title/${setting.bgFile}`;

  return (
    <>
      <Styled.Wrapper>
        <Header />
        <Main data={{ title, src }} />
      </Styled.Wrapper>
    </>
  );
}

const Main = ({ data: { title, src } }) => {
  return (
    <Styled.Main>
      <Title title={title} src={src} />
      <Guide />
      <Recording />
    </Styled.Main>
  );
};

const Title = ({
  title = "Заголовок",
  width = "100%",
  height = "300px",
  activity = false,
  src = "",
  children = "",
  bgColor = "#F5F5F5",
}) => {
  return (
    <Styled.Title.Box
      style={{
        src,
        width,
        height,
        activity,
        bgColor,
      }}
    >
      <h1>{title}</h1>
      <Styled.Title.Content>{children}</Styled.Title.Content>
    </Styled.Title.Box>
  );
};

const Recording = ({
  width = "100%",
  height = "300px",
  activity = false,
  src = "/img/pages/workoutVideo/Signup.png",
  bgColor = "#F9EBFF",
}) => {
  return (
    <Styled.Recording.Box
      style={{
        src,
        width,
        height,
        activity,
        bgColor,
      }}
    >
      <Styled.Recording.Content>
        <p>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </p>
        <div>
          <Button.s18.blue
            width="max-content"
            onClick={() => {
              console.log("Вы записаны на урок");
            }}
          >
            Записаться на тренировку
          </Button.s18.blue>
        </div>
      </Styled.Recording.Content>
    </Styled.Recording.Box>
  );
};

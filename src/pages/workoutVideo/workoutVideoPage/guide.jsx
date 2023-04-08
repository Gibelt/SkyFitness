import Styled from './guide/styledComponents';

export default function Guide() {
  return (
    <Styled.Wrapper>
      <Styled.Section>
        <h2>Подойдет для вас, если:</h2>
        <Recommendation />
      </Styled.Section>

      <Styled.Section>
        <h2>Направления:</h2>
        <CourseList />
      </Styled.Section>

      <Styled.Section>
        <p>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </p>
      </Styled.Section>
    </Styled.Wrapper>
  );
}

const Recommendation = () => {
  const Column = ({ N, children }) => {
    return (
      <Styled.Recommendation.Column>
        <NumCircle>{N}</NumCircle>
        <p>{children}</p>
      </Styled.Recommendation.Column>
    );
  };

  const NumCircle = ({ children }) => {
    return (
      <Styled.Recommendation.NumCircle>
        <span>{children}</span>
      </Styled.Recommendation.NumCircle>
    );
  };

  return (
    <Styled.Recommendation.Box>
      <Column N={1}>
        Давно хотели попробовать йогу, но не решались начать.
      </Column>

      <Column N={2}>
        Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
      </Column>

      <Column N={3}>Ищете активность, полезную для тела и души.</Column>
    </Styled.Recommendation.Box>
  );
};

const CourseList = () => {
  const Item = ({ children = 'Item' }) => {
    return (
      <p>
        <li>{children}</li>
      </p>
    );
  };

  const Column = ({ children }) => {
    return (
      <Styled.CourseList.Column>
        <ul>{children}</ul>
      </Styled.CourseList.Column>
    );
  };

  return (
    <Styled.CourseList.Box>
      <Column>
        <Item>Йога для новичков</Item>
        <Item>Классическая йога</Item>
        <Item>Йогатерапия</Item>
      </Column>

      <Column>
        <Item>Кундалини-йога</Item>
        <Item>Хатха-йога</Item>
        <Item>Аштанга-йога</Item>
      </Column>

      <Column />
    </Styled.CourseList.Box>
  );
};

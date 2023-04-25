import * as Styled from './style';

export function CourseCard({
  title = 'Заголовок',
  width = '360px',
  height = '480px',
  activity = true,
  src = '',
  onClick = () => {},
  children = '',
}) {
  return (
    <Styled.СourseCard
      onClick={activity ? onClick : () => {}}
      style={{
        src,
        width,
        height,
        activity,
      }}
    >
      <h1>{title}</h1>
      <Styled.CardContent>{children}</Styled.CardContent>
    </Styled.СourseCard>
  );
}

import { Button as StandartButton } from 'components/commonComponents/button/button';
import Styled from './styledComponents';

import localData from './data';
import clickFunx from './clickFunx';

export default ({
  data: { courseData, userData = null },
  width = '100%',
  height = '300px',
  activity = false,
  src = '/img/pages/description/Signup.png',
  bgColor = '#F9EBFF',
}) => {
  const courseName = courseData.local.name;

  const isUserLogIn = Boolean(userData);
  const { msg } = localData.Recording;
  const buttonName = isUserLogIn
    ? 'Записаться на тренировку'
    : 'Для записи на урок требуется авторизация';

  const { Recording } = Styled;
  const { Content } = Recording;
  const { Box } = Recording;
  const boxStyle = {
    src,
    width,
    height,
    activity,
    bgColor,
  };

  return (
    <Box style={boxStyle}>
      <Content>
        <p>{msg}</p>
        <Button
          onClick={() => clickFunx.recordToLesson(courseName)}
          disabled={!isUserLogIn}
        >
          {buttonName}
        </Button>
      </Content>
    </Box>
  );
};

const Button = ({ onClick, disabled, children }) => (
  <StandartButton.s18.blue
    onClick={onClick}
    disabled={disabled}
    width="max-content"
    height="max-content"
  >
    {children}
  </StandartButton.s18.blue>
);

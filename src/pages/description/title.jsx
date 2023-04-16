// import { useNavigate } from 'react-router-dom';

import { Button as StandartButton } from 'components/commonComponents/button/button';
import Styled from './styledComponents';

import clickFunx from './clickFunx';

export default ({ data: { courseData, userData = null } }) => {
  // const navigate = useNavigate();
  // const goToCoursesPageFunc = () => navigate(`/`, { replace: true });

  const localData = courseData.local;
  const courseName = localData.name;
  const src = localData.bgFile;

  const isUserLogIn = Boolean(userData);
  const buttonName = isUserLogIn ? 'Добавить курс' : 'Требуется авторизация';

  const { Title } = Styled;
  const { Content } = Title;
  const { Box } = Title;
  const boxStyle = {
    src,
    width: '100%',
    height: '300px',
    bgColor: '#F5F5F5',
    activity: false,
  };

  return (
    <Box style={boxStyle}>
      <h1>{courseName}</h1>
      <Content>
        <Button
          onClick={() => clickFunx.addCourse(courseName)}
          disabled={!isUserLogIn}
        >
          {buttonName}
        </Button>
        {/* <Button onClick={goToCoursesPageFunc} disabled={false}>
          Вернуться к списку курсов
        </Button> */}
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

import { useState } from 'react';

import { Button as StandartButton } from 'components/commonComponents/button/button';
import { addUserCourse, getUserCoursesData } from 'mocks';
import Styled from './styledComponents';

export default ({ data }) => {
  const { courseData, userData } = data;
  const localData = courseData.local;
  const courseName = localData.name;
  const courseBGsrc = localData.bgSrc;
  const userID = userData.id;

  const [addingState, setAddingState] = useState(false);
  getUserCoursesData(
    (data) => {
      for (const engName of Object.keys(data))
        if (data[engName].name === courseName) setAddingState(true);
    },
    { userID }
  );

  const { Title } = Styled;
  const { Content } = Title;
  const { Box } = Title;
  const buttonName = {
    disable: 'Требуется авторизация',
    enable: addingState
      ? `Курс «${courseName}» добавлен`
      : `Добавить курс «${courseName}»`,
  };
  return (
    <Box
      style={{
        width: '100%',
        height: '300px',
        bgColor: '#F5F5F5',
        src: courseBGsrc,
        activity: false,
      }}
    >
      <h1>{courseName}</h1>
      <Content>
        <Button
          onClick={() =>
            addUserCourse(() => setAddingState(true), { userID, courseName })
          }
          disabled={!userID || addingState}
        >
          {buttonName[userID ? 'enable' : 'disable']}
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

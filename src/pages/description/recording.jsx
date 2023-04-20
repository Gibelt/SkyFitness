import { useState } from 'react';

import { Button as StandartButton } from 'components/commonComponents/button/button';
import Styled from './styledComponents';
import pageData from './pageData';

export default ({ data }) => {
  const { courseData, userData } = data;
  const localData = courseData.local;
  const courseName = localData.name;
  const userID = userData?.localId;
  const { msg } = pageData.Recording;

  const [recordState, setRecordState] = useState(false);

  const { Recording } = Styled;
  const { Content } = Recording;
  const { Box } = Recording;
  const buttonName = {
    disable: 'Для записи на урок требуется авторизация',
    enable: recordState
      ? `Отменить запись на тренировку по «${courseName}»`
      : `Записаться на тренировку по «${courseName}»`,
  };
  return (
    <Box
      style={{
        src: '/img/pages/description/Signup.png',
        width: '100%',
        height: '300px',
        activity: false,
        bgColor: '#F9EBFF',
      }}
    >
      <Content>
        <p>{msg}</p>
        <Button
          onClick={() => setRecordState(!recordState)}
          recordState={recordState}
          disabled={!userID}
        >
          {buttonName[userID ? 'enable' : 'disable']}
        </Button>
      </Content>
    </Box>
  );
};

const Button = ({ onClick, recordState, disabled, children }) => {
  const Btn = StandartButton.s18[recordState ? 'white' : 'blue'];
  return (
    <Btn
      onClick={onClick}
      disabled={disabled}
      width="max-content"
      height="max-content"
    >
      {children}
    </Btn>
  );
};

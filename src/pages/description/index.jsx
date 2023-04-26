import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { getCorseData } from 'mocks';
import Header from 'components/header/Header';
import { loginDataSelector } from 'store/selectors/selectors';

import Styled from './style';

import Title from './Title';
import Guide from './guide';
import Recording from './Recording';

export default () => {
  const courses = [
    'yoga',
    'bodyflex',
    'dance-fitness',
    'stretching',
    'step-aerobics',
  ];
  const routeList = courses.map((course) => (
    <Route path={course} element={<Page course={course} />} key={course} />
  ));

  return <Routes>{routeList}</Routes>;
};

const Page = ({ course = 'yoga' }) => {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState({});

  const userStoreData = useSelector(loginDataSelector);
  if (!courseData) getDBdata(setCourseData, { course });
  else if (userData !== userStoreData) setUserData(userStoreData);

  const data = {
    course,
    courseData,
    userData,
  };

  return (
    <Styled.Wrapper>
      <Header />
      {courseData && <Main data={data} />}
    </Styled.Wrapper>
  );
};

const Main = ({ data }) => {
  const { courseData } = data;
  const Wrapper = Styled.Main;
  return (
    <Wrapper>
      <Title data={data} />
      <Guide data={courseData} />
      <Recording data={data} />
    </Wrapper>
  );
};

const getDBdata = (setDBdata, { course }) => {
  getCorseData(
    (remoteData) => {
      if (remoteData) setDBdata(remoteData);
    },
    { courseName: course }
  );
};

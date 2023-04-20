import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { loginDataSelector } from 'store/selectors/selectors';
import Header from 'components/header/Header';
import { getCorseData } from 'mocks';

import Styled from './styledComponents';
import Title from './title';
import Guide from './guide';
import Recording from './recording';
import pageData from './pageData';

export default () => {
  // description routes
  const routeList = new Array();
  const courses = Object.keys(pageData.default);
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    routeList.push(
      <Route path={course} element={<Page course={course} />} key={i} />
    );
  }
  return <Routes>{routeList}</Routes>;
};

const Page = ({ course = 'yoga' }) => {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState({});

  const userStoreData = useSelector(loginDataSelector);

  if (!courseData) getDBdata(setCourseData, { course });
  else if (userData !== userStoreData) setUserData(userStoreData);

  const { Wrapper } = Styled;
  return courseData ? (
    <Wrapper>
      <Header />
      <Main
        data={{
          course,
          courseData,
          userData,
        }}
      />
    </Wrapper>
  ) : null;
};

const Main = ({ data }) => {
  const { courseData } = data;
  const Wrapper = Styled.Main;

  return (
    <Wrapper>
      <Title data={data} />
      <Guide data={courseData.remote} />
      <Recording data={data} />
    </Wrapper>
  );
};

const getDBdata = (setDBdata, { course }) => {
  const localData = pageData.default[course];

  getCorseData(
    (remoteData) => {
      if (remoteData) setDBdata({ local: localData, remote: remoteData });
      else
        console.error(
          'Неизвестная ошибка: данные курса с удаленного сервера не получены'
        );
    },
    { courseName: course }
  );
};

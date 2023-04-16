import { Routes, Route } from 'react-router-dom';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { useState, useEffect } from 'react';

import { loginDataSelector as getUserStoreData } from 'store/selectors/selectors';
import Header from 'components/header/Header';
import Styled from './styledComponents';
import Recording from './recording';
import Title from './title';
import Guide from './guide';

import localData from './data';
import devFunx from './devFunx';
// import clickFunx from './clickFunx';

export default () => {
  const courses = Object.keys(localData.Page);
  const routeList = new Array();
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    routeList.push(
      <Route path={course} element={<Page course={course} />} key={i} />
    );
  }
  return <Routes>{routeList}</Routes>;
};

const Page = ({ course = 'yoga' }) => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      wrapper.style = 'background-color: #ffffff';
    }
  }); // добавил для фона Bogdanov AG
  const userStoreData = useSelector(getUserStoreData);
  const { getDBdata } = devFunx;

  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState();

  // userStoreData = 'james';
  // console.log(userData, Boolean(userData));

  if (!courseData) getDBdata(setCourseData, { course });
  else if (userData !== userStoreData) setUserData(userStoreData);

  const { Wrapper } = Styled;
  return courseData ? (
    <Wrapper>
      <Header />
      <Main data={{ courseData, userData }} />
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

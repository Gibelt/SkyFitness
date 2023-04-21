import SelectWorkout from 'components/selectWorkout/SelectWorkout';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import LoginUpdate from 'components/loginUpdate';
// import PasswordUpdate from 'components/passwordUpdate';
import { loginDataSelector as getUserStoreData } from 'store/selectors/selectors';
import Popover from 'components/popover';
import Login from 'components/loginComp/Login';
import * as S from './styles';
import { CourseCard } from '../../components/commonComponents/courseCard/courseCard';
import { Button } from '../../components/commonComponents/button/button';
import Header from '../../components/header/Header';
import { getUserData, mapCourseData } from '../../mocks'; // getUserCourses

export default function Profile() {
  const userStoreData = useSelector(getUserStoreData);

  const { localId } = userStoreData;

  const [userCourses, setUserCourses] = useState();

  useEffect(() => {
    async function getUserCoursesData() {
      /*
      const response = await getUserCourses(localId);
      console.log('response', response);
      */
      getUserData(setUserCourses, { userID: localId });
    }

    if (!userCourses) getUserCoursesData();
  }, []);

  // отображение поповера выбора тренировок
  const [
    { isSelectWorkoutVisible, courseIdProp },
    toggleSelectWorkoutPopoverVisibility,
  ] = useState({ isSelectWorkoutVisible: false, courseIdProp: false });

  function openCourseWorkoutsClickHandler(courseId) {
    return () => {
      toggleSelectWorkoutPopoverVisibility({
        isSelectWorkoutVisible: true,
        courseIdProp: courseId,
      });
    };
  }

  /*
  const closeCourseWorkoutsClickHandler = () => {
    toggleSelectWorkoutPopoverVisibility({
      isSelectWorkoutVisible: false,
      courseIdProp: '',
    });
  };
  */

  // отображение поповера смены логина
  const [isLoginChangePopoverVisible, toggleLoginChangePopoverVisibility] =
    useState(false);

  const openLoginChangeClickHandler = () => {
    toggleLoginChangePopoverVisibility(true);
  };

  const closeLoginChangeClickHandler = () => {
    toggleLoginChangePopoverVisibility(false);
  };

  // отображение поповера смены пароля
  const [
    isPasswordChangePopoverVisible,
    togglePasswordChangePopoverVisibility,
  ] = useState(false);

  const openPasswordChangeClickHandler = () => {
    togglePasswordChangePopoverVisibility(true);
  };

  const closePasswordChangeClickHandler = () => {
    togglePasswordChangePopoverVisibility(false);
  };

  function appendCourseCard(course) {
    if (!course) {
      return '';
    }

    return (
      <S.CourseCardWrapper>
        <CourseCard
          key={course.id}
          title={course.title}
          src={course.cardImgSrc}
        >
          <S.CourseCardActionButton>
            <Button.s20.green
              width="136px"
              onClick={openCourseWorkoutsClickHandler(course.id)}
            >
              Перейти →
            </Button.s20.green>
          </S.CourseCardActionButton>
        </CourseCard>
      </S.CourseCardWrapper>
    );
  }

  return (
    <S.ProfilePageWrapper>
      <Header />
      <div>
        <S.ProfileTextHeader>Мой профиль</S.ProfileTextHeader>
        {/*
        <S.ProfileInfo>
          <S.ProfileTextRegular>
            Логин: <span>sergey.petrov96</span>
          </S.ProfileTextRegular>
          <S.ProfileTextRegular>
            Пароль: <span>4fkhdj880d</span>
          </S.ProfileTextRegular>
        </S.ProfileInfo>
        */}
      </div>
      <S.ProfileInfoActions>
        <Button.s18.blue width="275px" onClick={openLoginChangeClickHandler}>
          Редактировать логин
        </Button.s18.blue>
        {isLoginChangePopoverVisible ? (
          <Popover onClose={closeLoginChangeClickHandler}>
            <Login type="changeLoginName" close={closeLoginChangeClickHandler}/>
          </Popover>
        ) : (
          /*
          <LoginUpdate onCloseHandler={closeLoginChangeClickHandler} />
          */
          ''
        )}
        <Button.s18.blue width="275px" onClick={openPasswordChangeClickHandler}>
          Редактировать пароль
        </Button.s18.blue>
        {isPasswordChangePopoverVisible ? (
          <Popover onClose={closePasswordChangeClickHandler}>
            <Login type="changePassword" close={closePasswordChangeClickHandler}/>
          </Popover>
        ) : (
          /* <PasswordUpdate onCloseHandler={closePasswordChangeClickHandler} /> */
          ''
        )}
      </S.ProfileInfoActions>
      <S.ProfileTextHeader2>Мои курсы</S.ProfileTextHeader2>
      <S.ProfileCourses>
        {userCourses
          ? Object.keys(userCourses.courses).map((key) =>
              appendCourseCard(mapCourseData(key))
            )
          : ''}
      </S.ProfileCourses>
      {isSelectWorkoutVisible ? (
        /*
        <Popover onClose={closeCourseWorkoutsClickHandler}>
          <SelectWorkout courseId={courseIdProp} />
        </Popover>
        */
        <SelectWorkout courseId={courseIdProp} />
      ) : (
        ''
      )}
    </S.ProfilePageWrapper>
  );
}

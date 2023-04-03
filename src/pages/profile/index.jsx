import React from "react";
import appLogo from "../../images/logo.svg";
import * as S from "../profile/styles";
import { coursesImages } from "../../constants";

export const Profile = () => {
  const myCourses = [
    { id: 1, title: "Йога" },
    { id: 2, title: "Стретчинг" },
    { id: 3, title: "Бодифлекс" },
  ];

  return (
    <S.ProfilePageWrapper>
      <S.ProfileHeader>
        <S.AppLogo src={appLogo} alt="logo" />
        <S.ProfileName>
          <S.ProfileImg />
          <div>Сергей</div>
          <S.ProfileDropdown />
        </S.ProfileName>
      </S.ProfileHeader>
      <div>
        <S.ProfileTextHeader>Мой профиль</S.ProfileTextHeader>
        <S.ProfileInfo>
          <S.ProfileTextRegular>
            Логин: <span>sergey.petrov96</span>
          </S.ProfileTextRegular>
          <S.ProfileTextRegular>
            Пароль: <span>4fkhdj880d</span>
          </S.ProfileTextRegular>
        </S.ProfileInfo>
      </div>
      <S.ProfileInfoActions>
        <S.ProfileActionButtonStub width="275px">
          Редактировать логин
        </S.ProfileActionButtonStub>
        <S.ProfileActionButtonStub width="275px">
          Редактировать пароль
        </S.ProfileActionButtonStub>
      </S.ProfileInfoActions>
      <S.ProfileTextHeader2>Мои курсы</S.ProfileTextHeader2>
      <S.ProfileCourses>
        {myCourses.map((course) => (
          <S.CourseCardStub
            key={course.id}
            title={course.title}
            src={
              coursesImages.find((ci) => ci.courseId === course.id)?.img ?? ""
            }
          >
            <S.CourseCardActionButton>
              <S.CourseCardActionButtonStub width="136px">
                Перейти →
              </S.CourseCardActionButtonStub>
            </S.CourseCardActionButton>
          </S.CourseCardStub>
        ))}
      </S.ProfileCourses>
    </S.ProfilePageWrapper>
  );
};

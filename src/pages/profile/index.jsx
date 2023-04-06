import React from "react";
import * as S from "../profile/styles";
import { coursesImages } from "../../constants";
import { CourseCard } from "../../components/commonComponents/courseCard/courseCard";
import { Button } from "../../components/commonComponents/button/button";
import Logo from "../../components/logo/Logo";

export default function Profile() {
  const myCourses = [
    { id: 1, title: "Йога" },
    { id: 2, title: "Стретчинг" },
    { id: 3, title: "Бодифлекс" },
  ];

  return (
    <S.ProfilePageWrapper>
      <S.ProfileHeader>
        <Logo />
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
        <Button.s18.blue width="275px">Редактировать логин</Button.s18.blue>
        <Button.s18.blue width="275px">Редактировать пароль</Button.s18.blue>
      </S.ProfileInfoActions>
      <S.ProfileTextHeader2>Мои курсы</S.ProfileTextHeader2>
      <S.ProfileCourses>
        {myCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            src={
              coursesImages.find((ci) => ci.courseId === course.id)?.img ?? ""
            }
          >
            <S.CourseCardActionButton>
              <Button.s20.green width="136px">Перейти →</Button.s20.green>
            </S.CourseCardActionButton>
          </CourseCard>
        ))}
      </S.ProfileCourses>
    </S.ProfilePageWrapper>
  );
}

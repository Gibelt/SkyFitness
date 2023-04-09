import * as S from './styles';
import { coursesImages } from '../../constants';
import { CourseCard } from '../../components/commonComponents/courseCard/courseCard';
import { Button } from '../../components/commonComponents/button/button';
import Header from '../../components/header/Header';

export default function Profile() {
  const myCourses = [
    { id: 'ecf0abb07a6547e09abe876e4084a843', title: 'Йога' },
    { id: 'fa860a88db7e4c839437427ab863bb1a', title: 'Стретчинг' },
    { id: '37cd2b14182e4e69aad6e60e6c25015e', title: 'Бодифлекс' },
  ];

  return (
    <S.ProfilePageWrapper>
      <Header />
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
          <S.CourseCardWrapper>
            <CourseCard
              key={course.id}
              title={course.title}
              src={
                coursesImages.find((ci) => ci.courseId === course.id)?.img ?? ''
              }
            >
              <S.CourseCardActionButton>
                <Button.s20.green width="136px">Перейти →</Button.s20.green>
              </S.CourseCardActionButton>
            </CourseCard>
          </S.CourseCardWrapper>
        ))}
      </S.ProfileCourses>
    </S.ProfilePageWrapper>
  );
}

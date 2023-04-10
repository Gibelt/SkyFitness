/* используется для получения информации о курсе по его id */
function getCourseById(courseId) {
  const courses = [
    {
      id: 'ecf0abb07a6547e09abe876e4084a843',
      title: 'Йога',
      img: '/img/SVG_for_Course_Cards/yoga.png',
    },
    {
      id: 'fa860a88db7e4c839437427ab863bb1a',
      title: 'Стретчинг',
      img: '/img/SVG_for_Course_Cards/stretching.png',
    },
    {
      id: '37cd2b14182e4e69aad6e60e6c25015e',
      title: 'Бодифлекс',
      img: '/img/SVG_for_Course_Cards/bodyflex.png',
    },
    {
      id: '2ed340464ea14d4db46cc34cb8046f40',
      title: 'Танцевальный фитнес',
      img: '/img/SVG_for_Course_Cards/dance-fitness.png',
    },
    {
      id: 'faecf3d0549a47a18c81de625af61312',
      title: 'Степ-аэробика',
      img: '/img/SVG_for_Course_Cards/step-aerobics.png',
    },
  ];
  return courses.find((c) => c.id === courseId);
}

/* возвращает список курсов для пользователя, насыщая данные называниями курсов 
(это необходимая информация для карточки страницы авторизованного пользователя) */
export function getUserCourses(userId) {
  const usersCourses = [
    { userId: 'testUser', courseId: 'ecf0abb07a6547e09abe876e4084a843' },
    { userId: 'testUser', courseId: 'fa860a88db7e4c839437427ab863bb1a' },
    { userId: 'testUser', courseId: '37cd2b14182e4e69aad6e60e6c25015e' },
    { userId: 'testUser#2', courseId: '37cd2b14182e4e69aad6e60e6c25015e' },
  ];

  /* по id пользователя (userId) находим все курсы, которые у него есть (из userCourses)
  дальше по id найденного курса (courseId) находим название курса из списка курсов (courses) */
  return usersCourses
    .filter((userCourse) => userCourse.userId === userId)
    .map((userCourse) => {
      const course = getCourseById(userCourse.courseId);

      return {
        id: userCourse.courseId,
        title: course?.title,
        imgSrc: course?.img,
      };
    });
}

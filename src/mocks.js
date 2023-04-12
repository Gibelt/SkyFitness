const yogaWorkouts = [
  {
    id: '73435a6b2dcb49fc85f125b587ba82ef',
    order: 1,
    name: 'Утренняя практика / Йога на каждый день / 1 день',
    'video-link': 'oqe98Dxivns',
    exercise: ['Приветствие солнца (10 повторений)'],
  },
  {
    id: 'b8c92b070eac49fe93acc5ea8605efa0',
    order: 2,
    name: 'Красота и здоровье / Йога на каждый день / 2 день',
    'video-link': 'v-xTLFDhoD0',
    exercise: [
      'Наклон вперед (10 повторений)',
      'Наклон назад (10 повторений)',
      'Поднятие ног, согнутых в коленях (5 повторений)',
    ],
  },
  {
    id: '03080d6dc62248d38a0e5e7baa55c932',
    order: 3,
    name: 'Асаны стоя / Йога на каждый день / 3 день',
    'video-link': 'WxFz-4YsiEE',
    exercise: [
      'Наклон к правой ноге (10 повторений)',
      'Наклон к левой ноге (10 повторений)',
      'Наклон к согнутой правой ноге (10 повторений)',
      'Наклон к согнутой левой ноге (10 повторений)',
      'Асана стоя (5 повторений)',
    ],
  },
  {
    id: '5c82166356e24075aaef222f7b9c3c00',
    order: 4,
    name: 'Растягиваем мышцы бедра / Йога на каждый день / 4 день',
    'video-link': '09uGkAEQuZI',
    exercise: [
      'Сесть на пятки с носками от себя (5 повторений)',
      'Сесть на пятки с носками на себя (5 повторений)',
      'Отпустить колено на пол из позы лотоса (10 повторений)',
      'Отпустить колено на пол из позы лотоса с соединенными стопами (10 повторений)',
    ],
  },
  {
    id: '3e5747ba4c0d497e8fcc0947966ef6d0',
    order: 5,
    name: 'Гибкость спины / Йога на каждый день / 5 день',
    'video-link': 'MIvcMapie_A',
    exercise: [
      'Округляем грудную клетку при выдохе (10 повторений)',
      'Тянем левую руку в правую сторону (20 повторений)',
      'Тянем правую руку в левую сторону (20 повторений)',
    ],
  },
];

const courses = [
  {
    id: 'ecf0abb07a6547e09abe876e4084a843',
    title: 'Йога',
    img: '/img/SVG_for_Course_Cards/yoga.png',
    workouts: yogaWorkouts,
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

/* используется для получения списка тренировок курса */
export const getCourseWorkouts = (courseId) =>
  courses
    .find((c) => c.id === courseId)
    ?.workouts?.sort((a, b) => a.order - b.order);

/* используется для получения информации о курсе по его id */
function getCourseById(courseId) {
  return courses.find((c) => c.id === courseId);
}

/* получение данных о тренировке по id тренировки */
export function getWorkoutInfo(workoutId) {
  const course = courses.find((c) =>
    c.workouts?.find((wo) => wo.id === workoutId)
  );

  const workout = course?.workouts.find((wo) => wo.id === workoutId);

  return {
    title: course.name,
    subtitle: workout.name,
    videoURL: workout['video-link'],
    exercises: workout.exercise,
  };
}

/* прогресс по тренировкам и курсы записывается к данным пользователя */
const users = [
  {
    id: 'testUser',
    courses: [
      {
        id: 'ecf0abb07a6547e09abe876e4084a843',
        workouts: [
          { id: '73435a6b2dcb49fc85f125b587ba82ef', completed: true },
          { id: '03080d6dc62248d38a0e5e7baa55c932', completed: true },
        ],
      },
      { id: 'fa860a88db7e4c839437427ab863bb1a' },
      { id: '37cd2b14182e4e69aad6e60e6c25015e' },
    ],
  },
  { id: 'testUser#2', courses: [{ id: '37cd2b14182e4e69aad6e60e6c25015e' }] },
  { id: 'testUser3' },
];

/* возвращает список курсов для пользователя, насыщая данные называниями курсов 
(это необходимая информация для карточки страницы авторизованного пользователя) */
export const getUserCourses = (userId) =>
  users
    .find((u) => u.id === userId)
    ?.courses?.map((c) => {
      const userCourse = getCourseById(c.id);
      return {
        id: userCourse.id,
        title: userCourse.title,
        imgSrc: userCourse.img,
      };
    });

/* производит поиск статуса тренировки (workoutId) для пользователя (userId) */
export const getWorkoutStatus = (userId, workoutId) =>
  users
    .find((u) => u.id === userId)
    ?.courses?.find((c) => c.workouts?.find((wo) => wo.id === workoutId))
    ?.workouts.find((wo) => wo.id === workoutId).completed;

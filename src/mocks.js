import { ref, getDataByRef, updateDataByRef } from 'backEnd';
import { dbDataHandler } from 'backEnd/controllers/db/handlers/index';

/* ========================================= LOCAL DB ========================================= */

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

export const courses = [
  {
    id: 'ecf0abb07a6547e09abe876e4084a843',
    title: 'Йога',
    img: '/img/SVG_for_Course_Cards/yoga.png',
    workouts: yogaWorkouts,
    name: 'yoga',
  },
  {
    id: 'fa860a88db7e4c839437427ab863bb1a',
    title: 'Стретчинг',
    img: '/img/SVG_for_Course_Cards/stretching.png',
    name: 'stretching',
  },
  {
    id: '37cd2b14182e4e69aad6e60e6c25015e',
    title: 'Бодифлекс',
    img: '/img/SVG_for_Course_Cards/bodyflex.png',
    name: 'bodyflex',
  },
  {
    id: '2ed340464ea14d4db46cc34cb8046f40',
    title: 'Танцевальный фитнес',
    img: '/img/SVG_for_Course_Cards/dance-fitness.png',
    name: 'dance-fitness',
  },
  {
    id: 'faecf3d0549a47a18c81de625af61312',
    title: 'Степ-аэробика',
    img: '/img/SVG_for_Course_Cards/step-aerobics.png',
    name: 'step-aerobics',
  },
];

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

/* ===================================== ANASTASIA DB FUNX ===================================== */

// используется для получения списка тренировок курса
export const getCourseWorkouts = (courseId) =>
  courses
    .find((c) => c.id === courseId)
    ?.workouts?.sort((a, b) => a.order - b.order);

/* Получение информации о курсе по id */
/*
function getCourseById(courseId) {
  return courses.find((c) => c.id === courseId);
}
*/

async function getCourseById(courseId) {
  const coursesRef = ref('courses');
  const courseRef = coursesRef.child(courseId);

  const response = await courseRef.once('value');
  const result = dbDataHandler({ response, courseRef });

  return result;
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

// Получение списка курсов для пользователя, насыщая данные называниями курсов
// (это необходимая информация для карточки страницы авторизованного пользователя)
/*
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
*/

// костыль
export const mapCourseData = (courseEngName) => {
  const foundCourse = courses.find((course) => course.name === courseEngName);

  if (foundCourse) {
    return {
      name: courseEngName,
      title: foundCourse.title,
      cardImgSrc: foundCourse.img,
    };
  }

  return null;
};

export async function getUserCourses(userID) {
  const usersRef = ref('users');
  const userRef = usersRef.child(userID);

  return userRef
    .once('value')
    .then((response) => dbDataHandler({ response, userRef }))
    .then(async (result) => {
      const userCourses = result?.data?.courses;
      const promisesArr = [];
      for (const c of Object.keys(userCourses)) {
        promisesArr.push(
          getCourseById(c).then((cd) => ({
            id: c,
            title: cd.data?.name,
            cardImgSrc: cd.data?.cardImgSrc,
          }))
        );
      }
      return promisesArr;
    })
    .then((pa) => Promise.all(pa).then((values) => values));
}

// Поиск статуса тренировки (workoutId) для пользователя (userId)
export const getWorkoutStatus = (userId, workoutId) =>
  users
    .find((u) => u.id === userId)
    ?.courses?.find((c) => c.workouts?.find((wo) => wo.id === workoutId))
    ?.workouts.find((wo) => wo.id === workoutId).completed;

/* ======================================= NIKITA DB FUNX ======================================= */
/* responseFunc - функция в которую будет передан ответ сервера */

// Получить данные курса по его названию
// название должно быть на английском и в нижнем регистре
export const getCorseData = (responseFunc, { courseName }) => {
  let rusCourseName;
  for (const item of courses)
    if (item.name === courseName) rusCourseName = item.title;

  const coursesRef = ref('courses');
  const courseRef = coursesRef.orderByChild('name').equalTo(rusCourseName);
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      const course = data ? data[Object.keys(data)[0]] : null;
      if (error) console.error(`getCorseData: ${error}`);
      else if (!course) console.error('getCorseData: data not found');
      else responseFunc(course);
    },
    { ref: courseRef }
  );
};

// Получить данные пользователя по его id
export const getUserData = (responseFunc, { userID }) => {
  const userRef = ref('users').child(userID);
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      if (error) console.error(`getUserData: ${error}`);
      else if (data) responseFunc(data);
      // else console.error('getUserData: data not found');
    },
    { ref: userRef }
  );
};

// Добавить пользователя в Realtime Database по его id
export const addUser = (responseFunc, { userID }) => {
  const userInitData = { _id: userID, courses: {} };

  const usersRef = ref('users');
  getDataByRef(
    (receivedData) => {
      const { data, error } = receivedData;
      if (error) console.error(`addUserData: ${error}`);
      else if (data) console.error('addUser: user already exist');
      else {
        let newData = {};
        newData[userID] = userInitData;
        updateDataByRef(
          (responseData) => {
            const { data } = responseData;
            if (data) if (data[userID]) responseFunc(data[userID]);
          },
          { ref: usersRef, newData }
        );
      }
    },
    { ref: usersRef.child(userID) }
  );
};

// Получить все курсы пользователя по его id
export const getUserCoursesData = (responseFunc, { userID }) => {
  getUserData(
    (data) => {
      if (!data) console.error('getUserCoursesData: unknown error');
      else {
        const { courses } = data;
        if (!courses) console.error('getUserCoursesData: unknown error');
        else responseFunc(courses);
      }
    },
    { userID }
  );
};

// Добавить курс в БД пользователя по его id и наименованию курса
export const addUserCourse = (responseFunc, { userID, courseName }) => {
  const courseInitData = { name: courseName, workouts: null };

  getCorseData(getWorkouts, { courseName });
  function getWorkouts(data) {
    if (!data) console.error('addUserCourse: unknown error');
    else {
      courseInitData.workouts = data.workouts;
      checkUserExistence();
    }
  }

  const usersRef = ref('users');
  function checkUserExistence() {
    getDataByRef(
      (receivedData) => {
        const { data, error } = receivedData;
        if (error) console.error(`addUserCourse: ${error}`);
        else if (!data) addUser(addCourse, { userID });
        else addCourse(data);
      },
      { ref: usersRef.child(userID) }
    );
  }

  const userCoursesRef = usersRef.child(userID).child('courses');
  function addCourse() {
    getDataByRef(
      (receivedData) => {
        const { data, error } = receivedData;
        if (error) console.error(`addUserCourse: ${error}`);
        else if (data)
          console.error('addUserCourse: user course already exist');
        else {
          let newData = {};
          newData[courseName] = courseInitData;
          updateDataByRef(responseFunc, { ref: userCoursesRef, newData });
        }
      },
      { ref: userCoursesRef.child(courseName) }
    );
  }
};

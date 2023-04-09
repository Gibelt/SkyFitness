export const getCourseWorkouts = (courseId) => {
  console.log(courseId); // временное решение, чтобы избежать ошибки eslint

  const workouts = [
    {
      id: '73435a6b2dcb49fc85f125b587ba82ef',
      order: 1,
      name: 'Утренняя практика / Йога на каждый день / 1 день',
      complete: true,
    },
    {
      id: 'b8c92b070eac49fe93acc5ea8605efa0',
      order: 2,
      name: 'Красота и здоровье / Йога на каждый день / 2 день',
      complete: true,
    },
    {
      id: '03080d6dc62248d38a0e5e7baa55c932',
      order: 3,
      name: 'Асаны стоя / Йога на каждый день / 3 день',
      complete: false,
    },
    {
      id: '5c82166356e24075aaef222f7b9c3c00',
      order: 4,
      name: 'Растягиваем мышцы бедра / Йога на каждый день / 4 день',
      complete: true,
    },
    {
      id: '3e5747ba4c0d497e8fcc0947966ef6d0',
      order: 5,
      name: 'Гибкость спины / Йога на каждый день / 5 день',
      complete: false,
    },
  ];

  workouts.sort((a, b) => a.order - b.order);
  return workouts;
};

const data = {
  Page: {
    yoga: {
      name: `Йога`,
    },
    bodyflex: {
      name: `Бодифлекс`,
    },
    'dance-fitness': {
      name: `Танцевальный фитнес`,
    },
    stretching: {
      name: `Стретчинг`,
    },
    'step-aerobics': {
      name: `Степ-аэробика`,
    },
  },
  Recording: {},
};

const imgFolderPath = `/img/pages/description/title`;
const courses = data.Page;
for (const courseName of Object.keys(courses))
  courses[courseName].bgFile = `${imgFolderPath}/${courseName}.png`;

data.Recording.msg =
  'Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!';

export default data;

import { useNavigate } from 'react-router-dom';
import { CourseCard } from 'components/commonComponents/courseCard';
import * as S from './MainStyle';

export const courseCards = [
  {
    title: 'Йога',
    src: '/img/SVG_for_Course_Cards/yoga.png',
    nameCours: 'yoga',
  },
  {
    title: 'Стретчинг',
    src: '/img/SVG_for_Course_Cards/stretching.png',
    nameCours: 'stretching',
  },
  {
    title: 'Танцевальный фитнес',
    src: '/img/SVG_for_Course_Cards/dance-fitness.png',
    nameCours: 'dance-fitness',
  },
  {
    title: 'Степ-аэробика',
    src: '/img/SVG_for_Course_Cards/step-aerobics.png',
    nameCours: 'step-aerobics',
  },
  {
    title: 'Бодифлекс',
    src: '/img/SVG_for_Course_Cards/bodyflex.png',
    nameCours: 'bodyflex',
  },
];
const ArrCards = () => {
  const navigate = useNavigate();
  const coursClickHandler = (srcPage) => navigate(`/description/${srcPage}`);
  return courseCards.map((coursItem) => (
    <CourseCard
      title={coursItem.title}
      src={coursItem.src}
      onClick={() => coursClickHandler(coursItem.nameCours)}
    />
  ));
};

function GroupTrainingCards() {
  return (
    <S.groupTrainingCards>
      <ArrCards />
    </S.groupTrainingCards>
  );
}

export default GroupTrainingCards;

import { useNavigate } from 'react-router-dom';
import * as s from './SelectWorkoutStyle';
import { getCourseWorkouts } from '../../mocks';

export default function SelectWorkout({ courseId }) {
  const workouts = getCourseWorkouts(courseId);

  const navigate = useNavigate();

  function selectExerciseClickHandler(e) {
    const element = e.target.closest('div[data-comp-name="SelectWorkout"]');
    navigate(`/exercise/${element.dataset.key}`);
  }

  const list = workouts.map((item) => (
    <s.Item
      key={item.id}
      data-key={item.id}
      data-comp-name="SelectWorkout"
      style={{ border: `${item.complete ? '1px solid #06B16E' : ''}` }}
      onClick={selectExerciseClickHandler}
    >
      <s.ItemText style={{ color: `${item.complete ? '#06B16E' : ''}` }}>
        <s.ItemTitle>{item.name.split('/')[0]}</s.ItemTitle>
        <s.ItemDesc>{`${item.name.split('/')[1]}/${
          item.name.split('/')[2]
        }`}</s.ItemDesc>
      </s.ItemText>{' '}
      {item.complete && <s.ItemComplete src="/img/exercise-complete.svg" />}
    </s.Item>
  ));
  return (
    <s.Content>
      <s.Title>Выберите тренировку</s.Title>
      <s.List>{list}</s.List>
    </s.Content>
  );
}

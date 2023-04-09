import * as s from './SelectWorkoutStyle';
import { getCourseWorkouts } from '../../mocks';

export default function SelectWorkout({ courseId }) {
  const workouts = getCourseWorkouts(courseId);

  const list = workouts.map((item) => (
    <s.Item
      key={item.id}
      style={{ border: `${item.complete ? '1px solid #06B16E' : ''}` }}
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

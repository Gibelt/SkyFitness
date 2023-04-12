import { useNavigate } from 'react-router-dom';
import * as s from './SelectWorkoutStyle';
import { getCourseWorkouts, getWorkoutStatus } from '../../mocks';

export default function SelectWorkout(props) {
  const { courseId, onCloseHandler } = props;

  const workouts = getCourseWorkouts(courseId);
  workouts.map((wo) => {
    const woEnriched = wo; // помогает избежать ошибки assignment to property of function parameter
    woEnriched.complete = getWorkoutStatus('testUser', wo.id);

    return woEnriched;
  });

  const navigate = useNavigate();

  function selectExerciseClickHandler(workoutId) {
    return () => {
      navigate(`/exercise/${workoutId}`);
    };
  }

  const list = workouts.map((item) => (
    <s.Item
      key={item.id}
      style={{ border: `${item.complete ? '1px solid #06B16E' : ''}` }}
      onClick={selectExerciseClickHandler(item.id)}
    >
      <s.ItemText style={{ color: `${item.complete ? '#06B16E' : ''}` }}>
        <s.ItemTitle>{item.name.split('/')[0]}</s.ItemTitle>
        <s.ItemDesc>
          {item.name.slice(item.name.split('/')[0].length + 1)}
        </s.ItemDesc>
      </s.ItemText>{' '}
      {item.complete && <s.ItemComplete src="/img/exercise-complete.svg" />}
    </s.Item>
  ));
  return (
    <s.ContentWrapper>
      <s.Content>
        <s.PopupCloseBtn onClick={onCloseHandler} />
        <s.Title>Выберите тренировку</s.Title>
        <s.List>{list}</s.List>
      </s.Content>
    </s.ContentWrapper>
  );
}

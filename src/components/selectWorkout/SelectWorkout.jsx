import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDataByRef, ref } from '../../backEnd';
import * as s from './SelectWorkoutStyle';

const userId = 'd8addebe6113416aa67d134d2538f873';
const courseId = '37cd2b14182e4e69aad6e60e6c25015e';

export default function SelectWorkout() {
  const [workouts, setWorkouts] = useState({});

  const handleClick = (id) => {
    window.localStorage.setItem('exerciseID', id);
  };
  const parseData = (responseData) => {
    setWorkouts(responseData.data[userId].courses[courseId].workouts);
  };

  useEffect(() => {
    getDataByRef(parseData, { ref: ref('users') });
  }, []);

  const list = Object.entries(workouts).map(([id, value]) => (
    <Link
      key={value.name.toString()}
      to="/exercise"
      style={{ textDecoration: 'none' }}
      onClick={() => handleClick(id)}
    >
      <s.Item
        style={{ border: `${value.complete ? '1px solid #06B16E' : ''}` }}
      >
        <s.ItemText style={{ color: `${value.complete ? '#06B16E' : ''}` }}>
          <s.ItemTitle>{value.name.split('/')[0] || value.name}</s.ItemTitle>
          <s.ItemDesc>
            {value.name.split('/')[1]
              ? `${value.name.split('/')[1]}/${value.text.split('/')[2]}`
              : ''}
          </s.ItemDesc>
        </s.ItemText>{' '}
        {value.complete && <s.ItemComplete src="/img/exercise-complete.svg" />}
      </s.Item>
    </Link>
  ));
  return (
    <s.Content>
      <s.Title>Выберите тренировку</s.Title>
      <s.List>{list}</s.List>
    </s.Content>

/*
import { useNavigate } from 'react-router-dom';
import Popover from 'components/popover';
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
    <Popover onClose={onCloseHandler}>
      <s.Title>Выберите тренировку</s.Title>
      <s.List>{list}</s.List>
    </Popover>
    */

  );
}

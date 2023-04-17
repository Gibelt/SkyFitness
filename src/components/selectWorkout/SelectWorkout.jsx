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
  );
}

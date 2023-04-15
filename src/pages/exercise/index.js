/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getDataByRef, ref } from '../../backEnd';
import * as s from './ExerciseSyle';
import Header from '../../components/header/Header';
import Tasks from '../../components/tasks/Tasks';
import Execution from '../../components/tasksProgress/TasksProgress';
import ProgressForm from '../../components/progressForm/ProgressForm';

// const title = 'Йога';
// const subtitle = 'Красота и здоровье / Йога на каждый день / 2 день';
//  const videoURL = 'oqe98Dxivns';

const tasksExapmle = [
  'Наклон вперед (10 повторений)',
  'Наклон назад (10 повторений)',
  'Поднятие ног, согнутых в коленях (5 повторений)',
];

const userId = 'd8addebe6113416aa67d134d2538f873';
  const courseId = '37cd2b14182e4e69aad6e60e6c25015e';
  const workoutId = '0a77c10ce7e04a2d92073c7b14ff175a';

export default function Exercise() {
  const [isProgressClick, setIsProgressClick] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [tasks, setTasks] = useState();

  const parseData = (responseData) => {
    setTitle(responseData.data[userId].courses[courseId].name);
    setSubtitle(responseData.data[userId].courses[courseId].workouts[workoutId].name);
    setVideoURL(responseData.data[userId].courses[courseId].workouts[workoutId]['video-link']);
    setTasks(responseData.data[userId].courses[courseId].workouts[workoutId].exer);

  };

  useEffect(() => {
    getDataByRef(parseData, {ref: ref('users')})
  });

  return (
    <s.Container>
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      {isProgressClick && (
        <ProgressForm
          tasks={tasksExapmle}
          onClick={() => setTimeout(() => setIsProgressClick(false), 2000)}
        />
      )}
      <s.Video>
        <iframe
          width="100%"
          height="639"
          src={`https://www.youtube.com/embed/${videoURL}`}
          title={subtitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </s.Video>
      <s.TasksAndProgress>
        <Tasks tasks={tasks} onClick={() => setIsProgressClick(true)} />
        <Execution tasks={tasksExapmle} />
      </s.TasksAndProgress>
    </s.Container>
  );
}

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './ExerciseSyle';
import Header from '../../components/header/Header';
import Tasks from '../../components/tasks/Tasks';
import Execution from '../../components/tasksProgress/TasksProgress';
import ProgressForm from '../../components/progressForm/ProgressForm';
import { getWorkoutInfo } from '../../mocks';

export default function Exercise() {
  const workoutId = useParams().id;

  const { title, subtitle, videoURL, exercises } = getWorkoutInfo(workoutId);

  const [isProgressClick, setIsProgressClick] = useState(false);
  return (
    <s.Container>
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      {isProgressClick && (
        <ProgressForm
          tasks={exercises}
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
        <Tasks tasks={exercises} onClick={() => setIsProgressClick(true)} />
        <Execution tasks={exercises} />
      </s.TasksAndProgress>
    </s.Container>
  );
}

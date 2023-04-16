import { useParams } from 'react-router-dom';
import * as s from './ExerciseSyle';
import Header from '../../components/header/Header';
import Tasks from '../../components/tasks/Tasks';
import Execution from '../../components/tasksProgress/TasksProgress';
import { getWorkoutInfo } from '../../mocks';

export default function Exercise() {
  const workoutId = useParams().id;

  const { title, subtitle, videoURL, exercises } = getWorkoutInfo(workoutId);

  return (
    <s.Container>
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
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
        <Tasks tasks={exercises} />
        <Execution tasks={exercises} />
      </s.TasksAndProgress>
    </s.Container>
  );
}

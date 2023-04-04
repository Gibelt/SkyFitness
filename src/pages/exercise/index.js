import * as s from "../exercise/ExerciseSyle";
import { useState } from "react";
import Header from "../../components/header/Header";
import Tasks from "../../components/tasks/Tasks";
import Execution from "../../components/tasksProgress/TasksProgress";
import ProgressForm from "../../components/progressForm/ProgressForm";

const title = "Йога";
const subtitle = "Красота и здоровье / Йога на каждый день / 2 день";
const videoURL = "oqe98Dxivns";

export default function Exercise() {
  const [isProgressClick, setIsProgressClick] = useState(false);
  return (
    <s.Container >
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      {isProgressClick && (
        <ProgressForm onClick={() => setIsProgressClick(false)} />
      )}
      <s.Video>
        <iframe
          width="100%"
          height="639"
          src={`https://www.youtube.com/embed/${videoURL}`}
          title={subtitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </s.Video>
      <s.TasksAndProgress>
        <Tasks onClick={() => setIsProgressClick(true)} />
        <Execution />
      </s.TasksAndProgress>
    </s.Container>
  );
}

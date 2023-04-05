import * as s from "../exercise/ExerciseSyle";
import { useState } from "react";
import Header from "../../components/header/Header";
import Tasks from "../../components/tasks/Tasks";
import Execution from "../../components/tasksProgress/TasksProgress";
import ProgressForm from "../../components/progressForm/ProgressForm";

const title = "Йога";
const subtitle = "Красота и здоровье / Йога на каждый день / 2 день";
const videoURL = "oqe98Dxivns";

const tasksDefault = [
  "Наклон вперед (10 повторений)",
  "Наклон назад (10 повторений)",
  "Поднятие ног, согнутых в коленях (5 повторений)",
];

export default function Exercise() {
  const [isProgressClick, setIsProgressClick] = useState(false);
  return (
    <s.Container>
      <Header />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      {isProgressClick && (
        <ProgressForm
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
        ></iframe>
      </s.Video>
      <s.TasksAndProgress>
        <Tasks tasks={tasksDefault} onClick={() => setIsProgressClick(true)} />
        <Execution tasks={tasksDefault} />
      </s.TasksAndProgress>
    </s.Container>
  );
}

import * as s from "./TasksStyle";
import {Button} from "../commonComponents/button/button";

const tasksDefault = [
  "Наклон вперед (10 повторений)",
  "Наклон назад (10 повторений)",
  "Поднятие ног, согнутых в коленях (5 повторений)",
];

export default function Tasks({ onClick }) {
  const items = tasksDefault.map((item) => (
    <s.Item key={item.toString()}>{item}</s.Item>
  ));
  return (
    <s.Container>
      <s.Title>Упражнения</s.Title>
      <s.Content>{items}</s.Content>
      <Button.s18.blue width="275px" onClick={onClick}>Заполнить свой прогресс</Button.s18.blue>
    </s.Container>
  );
}

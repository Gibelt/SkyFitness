import * as s from "./TasksStyle";

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
      <button onClick={onClick}>Заполнить свой прогресс</button>
    </s.Container>
  );
}

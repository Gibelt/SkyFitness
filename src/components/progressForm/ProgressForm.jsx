import * as s from "./ProgressFormStyle";

const task = [
  "Сколько раз вы сделали наклоны вперед?",
  "Сколько раз вы сделали наклоны назад?",
  "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
];

export default function MyProgress({ onClick }) {
  const list = task.map((item) => (
    <s.Item>
      <s.Text>{item}</s.Text>
      <s.Input type="number" placeholder="Введите значение" />
    </s.Item>
  ));
  return (
    <s.Content>
      <s.Title>Мой прогресс</s.Title>
      <s.List>{list}</s.List>
      <button onClick={onClick}>Отправить</button>
    </s.Content>
  );
}

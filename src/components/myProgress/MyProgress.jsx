import ProgressItem from "../progressItem/ProgressItem";
import * as s from "./MyProgressStyle";

const task = [
  "Сколько раз вы сделали наклоны вперед?",
  "Сколько раз вы сделали наклоны назад?",
  "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
];

export default function MyProgress() {
  return (
    <s.Content>
      <s.Title className="title">Мой прогресс</s.Title>
      <s.List className="list-item">
        {task.map((item) => (
          <ProgressItem key={item.toString()} title={item} />
        ))}
      </s.List>
      <button>Отправить</button>
    </s.Content>
  );
}

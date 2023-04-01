import ProgressItem from '../progressItem/ProgressItem'

const task = [
  "Сколько раз вы сделали наклоны вперед?",
  "Сколько раз вы сделали наклоны назад?",
  "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
];

export default function MyProgress() {
  
  return (
    <div className="content">
      <p className="title">Мой прогресс</p>
      <div className="list-item">
        {task.map((item) => <ProgressItem key={item.toString()} title={item} />)}
      </div>
      <button>Отправить</button>
    </div>
  );
}

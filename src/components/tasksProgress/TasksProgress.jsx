import * as s from "./TasksProgressStyle";

const tasksDefault = [
  "Наклон вперед (10 повторений)",
  "Наклон назад (10 повторений)",
  "Поднятие ног, согнутых в коленях (5 повторений)",
];

const colors = [
  { fill: "#565EEF", bcg: "#EDECFF" },
  { fill: "#FF6D00", bcg: "#FFF2E0" },
  { fill: "#9A48F1", bcg: "#F9EBFF" },
  { fill: "#00C90D", bcg: "#e6fae7" },
  { fill: "#E40045", bcg: "#fce6ec" },
];

export default function Tasks({ complete = 8, goal = 15 }) {
  const getWidth = () => {
    if ((complete / goal) * 100 < 100) {
      return Math.floor((complete / goal) * 100) + "%";
    }
    return "100%";
  };

  const getJustify = () => {
    if ((complete / goal) * 100 < 16) {
      return "flex-start";
    }
    return "center";
  };

  const items = tasksDefault.map((item) => (
    <s.Item key={item.toString()}>
      <s.ItemText>{item.split("(")[0]}</s.ItemText>
      <s.ItemProgress
        style={{
          background: colors[tasksDefault.indexOf(item)].bcg,
          border: `2px solid ${colors[tasksDefault.indexOf(item)].fill}`,
        }}
      >
        <s.ItemProgressFill
          style={{
            background: colors[tasksDefault.indexOf(item)].fill,
            width: getWidth(),
            justifyContent: getJustify(),
          }}
        >
          {getWidth()}
        </s.ItemProgressFill>
      </s.ItemProgress>
    </s.Item>
  ));
  return (
    <s.Container>
      <s.Title>Мой прогресс по тренировке 2:</s.Title>
      <s.Content>{items}</s.Content>
    </s.Container>
  );
}

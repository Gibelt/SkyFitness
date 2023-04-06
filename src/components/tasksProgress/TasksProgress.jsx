import * as s from "./TasksProgressStyle";

const colors = [
  { fill: "#565EEF", bcg: "#EDECFF" },
  { fill: "#FF6D00", bcg: "#FFF2E0" },
  { fill: "#9A48F1", bcg: "#F9EBFF" },
  { fill: "#00C90D", bcg: "#e6fae7" },
  { fill: "#E40045", bcg: "#fce6ec" },
];

export default function Tasks({ complete = 2, tasks }) {
  const getWidth = (item) => {
    const goal = parseInt(item.match(/\d+/));
    console.log(parseInt(item.match(/\d+/)))
    if ((complete / goal) * 100 < 100) {
      return Math.floor((complete / goal) * 100) + "%";
    }
    return "100%";
  };

  const getJustify = (item) => {
    const goal = parseInt(item.match(/\d+/));
    if ((complete / goal) * 100 < 16) {
      return "flex-start";
    }
    return "center";
  };

  const items = tasks.map((item) => (
    <s.Item key={item.toString()}>
      <s.ItemText>{item.split("(")[0]}</s.ItemText>
      <s.ItemProgress
        style={{
          background: colors[tasks.indexOf(item)].bcg,
          border: `2px solid ${colors[tasks.indexOf(item)].fill}`,
        }}
      >
        <s.ItemProgressFill
          style={{
            background: colors[tasks.indexOf(item)].fill,
            width: getWidth(item),
            justifyContent: getJustify(item),
          }}
        >
          {getWidth(item)}
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

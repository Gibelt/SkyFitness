import * as s from "./ProgressItemStyle";

export default function MyProgress({ title }) {
  return (
    <s.Item>
      <s.Text>{title}</s.Text>
      <s.Input
        type="number"
        className="item-value"
        placeholder="Введите значение"
      />
    </s.Item>
  );
}

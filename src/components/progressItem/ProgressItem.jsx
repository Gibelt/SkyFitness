export default function MyProgress({ title }) {
  return (
    <div className="item">
      <p className="item-title">{title}</p>
      <input
        type="number"
        className="item-value"
        placeholder="Введите значение"
      />
    </div>
  );
}

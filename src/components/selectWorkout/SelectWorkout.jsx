import * as s from "./SelectWorkoutStyle";

const workoutsDefault = [
  {text: "Утренняя практика / Йога на каждый день / 1 день", complete: true},
  {text: "Красота и здоровье / Йога на каждый день / 2 день", complete: true},
  {text: "Асаны стоя / Йога на каждый день / 3 день", complete: false},
  {text: "Растягиваем мышцы бедра / Йога на каждый день / 4 день", complete: true},
  {text: "Гибкость спины / Йога на каждый день / 5 день", complete: false},
  {text: "Гибкость спины / Йога на каждый день / 5 день", complete: false},
  {text: "Гибкость спины / Йога на каждый день / 5 день", complete: false},
  {text: "Гибкость спины / Йога на каждый день / 5 день", complete: false},
];

export default function ProgressForm({ workouts = workoutsDefault }) {
  const list = workouts.map((item) => (
    <s.Item key={item.text.toString()} style={{border: `${item.complete ? "1px solid #06B16E" : ''}`}}>
      <s.ItemText style={{color: `${item.complete ? "#06B16E" : ''}`}}>
      <s.ItemTitle>{item.text.split("/")[0]}</s.ItemTitle>
      <s.ItemDesc>{item.text.split("/")[1] + "/" + item.text.split("/")[2]}</s.ItemDesc>
      </s.ItemText> {
        item.complete &&
      <s.ItemComplete src="/img/exercise-complete.svg" />
         }
    </s.Item>
  ));
  return (
    <s.Content>
      <s.Title>Ваш прогресс засчитан!</s.Title>
      <s.List>
        {list}
      </s.List>
    </s.Content>
  )};

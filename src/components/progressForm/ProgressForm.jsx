import * as s from "./ProgressFormStyle";
import { useState } from "react";
import { Button } from "../commonComponents/button/button";

const task = [
  "Сколько раз вы сделали наклоны вперед?",
  "Сколько раз вы сделали наклоны назад?",
  "Сколько раз вы сделали поднятие ног, согнутых в коленях?",
];

export default function ProgressForm({ onClick }) {
  const [isClick, setIsClick] = useState(false);
  const onSubmitClick = () => {
    onClick();
    setIsClick(true);
  };
  const list = task.map((item) => (
    <s.Item key={item.toString()}>
      <s.Text>{item}</s.Text>
      <s.Input type="number" placeholder="Введите значение" />
    </s.Item>
  ));
  return isClick ? (
    <s.ContentComplete>
      <s.TitleComplete>Ваш прогресс засчитан!</s.TitleComplete>
      <s.ImgComplete src="../../img/complete.svg" />
    </s.ContentComplete>
  ) : (
    <s.Content>
      <s.Title>Мой прогресс</s.Title>
      <s.List>{list}</s.List>
      <Button.s18.blue width="278px" onClick={onSubmitClick}>
        Отправить
      </Button.s18.blue>
    </s.Content>
  );
}

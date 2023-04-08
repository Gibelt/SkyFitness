import { useState } from 'react';
import * as s from './ProgressFormStyle';
import { Button } from '../commonComponents/button/button';

const tasksDefault = [
  'Наклон вперед (10 повторений)',
  'Наклон назад (10 повторений)',
  'Поднятие ног, согнутых в коленях (5 повторений)',
];

export default function ProgressForm({ onClick, tasks = tasksDefault }) {
  const [isClick, setIsClick] = useState(false);
  const onSubmitClick = () => {
    onClick();
    setIsClick(true);
  };
  const list = tasks.map((item) => (
    <s.Item key={item.toString()}>
      <s.Text>
        Сколько раз вы сделали {item.split('(')[0].toLowerCase()}?
      </s.Text>
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

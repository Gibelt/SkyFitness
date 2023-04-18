import { useState } from 'react';
import ActionCompleted from 'components/actionCompleted';
import Popover from 'components/popover';
import * as s from './ProgressFormStyle';
import { Button } from '../commonComponents/button/button';

const tasksDefault = [
  'Наклон вперед (10 повторений)',
  'Наклон назад (10 повторений)',
  'Поднятие ног, согнутых в коленях (5 повторений)',
];

export default function ProgressForm({ onCloseHandler, tasks = tasksDefault }) {
  const [isActionCompleted, setIsActionCompeleted] = useState(false);

  const onSubmitHandler = () => {
    setIsActionCompeleted(true);
    setTimeout(() => {
      onCloseHandler();
    }, 700);
  };

  const list = tasks.map((item) => (
    <s.Item key={item.toString()}>
      <s.Text>
        Сколько раз вы сделали {item.split('(')[0].toLowerCase().trim()}?
      </s.Text>
      <s.Input type="number" placeholder="Введите значение" />
    </s.Item>
  ));

  return isActionCompleted ? (
    <Popover closeBtnRequired={false}>
      <ActionCompleted msg="Ваш прогресс засчитан!" />
    </Popover>
  ) : (
    <Popover onClose={onCloseHandler}>
      <s.Content>
        <s.Title>Мой прогресс</s.Title>
        <s.List>{list}</s.List>
        <Button.s18.blue width="278px" onClick={onSubmitHandler}>
          Отправить
        </Button.s18.blue>
      </s.Content>
    </Popover>
  );
}

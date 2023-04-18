import { useState } from 'react';
import ProgressForm from 'components/progressForm/ProgressForm';
import * as s from './TasksStyle';
import { Button } from '../commonComponents/button/button';

export default function Tasks({ tasks }) {
  const [isProgressFormVisible, setProgressFormVisibility] = useState(false);

  const setProgressBtnHandler = () => {
    setProgressFormVisibility(true);
  };

  const closeProgressForm = () => {
    setProgressFormVisibility(false);
  };

  const items = tasks.map((item) => (
    <s.Item key={item.toString()}>{item}</s.Item>
  ));

  return (
    <s.Container>
      <s.Title>Упражнения</s.Title>
      <s.Content>{items}</s.Content>
      <Button.s18.blue width="275px" onClick={setProgressBtnHandler}>
        Заполнить свой прогресс
      </Button.s18.blue>
      {isProgressFormVisible ? (
        <ProgressForm onCloseHandler={closeProgressForm} tasks={tasks} />
      ) : (
        ''
      )}
    </s.Container>
  );
}

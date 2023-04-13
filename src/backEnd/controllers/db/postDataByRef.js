import { dbDataHandler, errorDataHandler } from './handlers';

const getDataByRef = (responseFunc, { ref }) => {
  //   const newRef = ref.parent;
  const newRef = ref;
  newRef
    .once('value')
    .then((data) => {
      const response = data.val();
      responseFunc({ response, ref: newRef });
    })
    .catch((response) => responseFunc(errorDataHandler(response)));
};

export default () =>
  (responseFunc, { ref, newData }) => {
    ref
      .push(newData)
      .then((response) => getDataByRef(responseFunc, { ref: response }))
      .catch((response) => responseFunc(response));
  };

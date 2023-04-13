import { dbDataHandler, errorDataHandler } from './handlers';

const getDataByRef = (responseFunc, { ref }) => {
  // const newRef = ref.parent;
  const newRef = ref;
  newRef
    .once('value')
    .then((response) => responseFunc(dbDataHandler({ response, ref: newRef })))
    .catch((response) => responseFunc(errorDataHandler(response)));
};

export default () =>
  (responseFunc, { ref }) => {
    ref
      .remove()
      .then((response) => getDataByRef(responseFunc, { ref: response }))
      .catch((response) => responseFunc(response));
  };

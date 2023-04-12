export default (app) => (responseFunc) => {
  const { db } = app;
  const ref = db.ref('courses');
  ref
    .once('value')
    .then((snapshot) => responseFunc(handler(snapshot)))
    .catch((response) => responseFunc({ error: response.code, response }));
};

const handler = (data) =>
  data.exists()
    ? {
        message: 'ok',
        data: data.val(),
      }
    : {
        message: 'No data available',
        data: null,
      };

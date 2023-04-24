const dbDataHandler = ({ response, ref }) => {
  const rawData = response.val();
  return { data: rawData, ref };
};

const errorDataHandler = (data) => {
  const error = data.code;
  return {
    error,
    // data
  };
};

export { errorDataHandler, dbDataHandler };

import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { loginDataSelector } from 'store/selectors/selectors';

export default ({ children, enable, redirectPath = '/' }) => {
  if (!enable) return children;

  const storeData = useSelector(loginDataSelector);

  const storeID = storeData?.localId;
  const urlParams = useParams();
  const urlID = urlParams?.id;
  const userValid = urlID === storeID;

  return userValid ? children : <Navigate to={redirectPath} replace />;
};

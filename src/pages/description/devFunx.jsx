import { ref, getDataByRef } from 'backEnd';
import localData from './data';

const getDBdata = (setDBdata, { course }) => {
  const theDBdata = { local: localData.Page[course], remote: null };

  const coursesRef = ref('courses');
  const courseName = theDBdata.local.name;
  const courseRef = coursesRef.orderByChild('name').equalTo(courseName);
  getDataByRef(courseDataHandler, { ref: courseRef });

  function courseDataHandler(receivedData) {
    if (receivedData) {
      const rawData = receivedData.data;
      if (rawData) {
        const courseData = rawData[Object.keys(rawData)[0]];
        theDBdata.remote = courseData;
        setDBdata(theDBdata);
      }
    }
  }
};

export default { getDBdata };

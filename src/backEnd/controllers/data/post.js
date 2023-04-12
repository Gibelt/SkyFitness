// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

// import firebaseConfig from './config/firebaseConfig';

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// export default () => {
//   db.collection('cities')
//     .add({
//       name: 'Tokyo',
//       country: 'Japan',
//     })
//     .then((docRef) => {
//       console.log('Document written with ID: ', docRef.id);
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     });
// };

// // const addData = async (e) => {
// //   e.preventDefault();
// //   try {
// //     const docRef = await addDoc(collection(db, 'todos'), {
// //       todo,
// //     });
// //     console.log('Document written with ID: ', docRef.id);
// //   } catch (e) {
// //     console.error('Error adding document: ', e);
// //   }
// // };

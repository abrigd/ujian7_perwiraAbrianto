import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
//   apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
//   authDomain: 'your-auth-domain-b1234.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
//   projectId: 'your-project-id-1234',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
//   appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',

  apiKey: "AIzaSyDWO3yDm9eab5DHoNrCBDPKvh2AtDdC8vY",
  authDomain: "batch7dialogflow.firebaseapp.com",
  projectId: "batch7dialogflow",
  storageBucket: "batch7dialogflow.appspot.com",
  messagingSenderId: "785044299313",
  appId: "1:785044299313:web:8029ab1b8994b3f26e3f10",
//   measurementId: "G-YN64BWN6SX"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
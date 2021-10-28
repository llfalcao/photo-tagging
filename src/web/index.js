import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import {
  getDocs,
  doc,
  setDoc,
  collection,
  getFirestore,
  Timestamp,
} from 'firebase/firestore';

// Returns list of characters and their respective positions on the image
async function getCharacters(db) {
  const characters = collection(db, 'characters');
  const characterSnapshot = await getDocs(characters);
  const characterList = characterSnapshot.docs.map((doc) => doc.data());
  return characterList;
}

function getCurrentTime() {
  return Timestamp.now();
}

function secToDate(time) {
  return time.toDate();
}

async function storeData(uid, name, date, totalTime) {
  setDoc(doc(db, 'leaderboards', uid), {
    totalTime,
    name,
    date,
  });
}

async function saveGame(name, date, totalTime) {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          storeData(uid, name, date, totalTime);
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

const app = initializeApp(getFirebaseConfig());
const db = getFirestore(app);
const locationData = getCharacters(db);

export { locationData, getCurrentTime, secToDate, saveGame };

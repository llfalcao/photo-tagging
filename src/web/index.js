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

const app = initializeApp(getFirebaseConfig());
const db = getFirestore(app);
const locationData = getCharacters(db);

async function storeData(uid, name, totalTime) {
  setDoc(doc(db, 'leaderboards', uid), {
    totalTime,
    name,
  });
}

function saveGame(name, totalTime) {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          storeData(uid, name, totalTime);
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export { locationData, getCurrentTime, secToDate, saveGame };

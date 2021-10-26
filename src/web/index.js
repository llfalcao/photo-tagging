import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

async function getCharacters(db) {
  const characters = collection(db, 'characters');
  const characterSnapshot = await getDocs(characters);
  const characterList = characterSnapshot.docs.map((doc) => doc.data());
  return characterList;
}

const app = initializeApp(getFirebaseConfig());
const db = getFirestore(app);
const locationData = getCharacters(db);

export default locationData;

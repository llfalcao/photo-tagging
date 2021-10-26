const config = {
  apiKey: 'AIzaSyB_a5F37hrdA9BjXJ9HOE1XEunouCCQsHI',
  authDomain: 'phototag-92b69.firebaseapp.com',
  projectId: 'phototag-92b69',
  storageBucket: 'phototag-92b69.appspot.com',
  messagingSenderId: '616624461934',
  appId: '1:616624461934:web:1365f7d3b25d0b2c852e7f',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js",
    );
  } else {
    return config;
  }
}

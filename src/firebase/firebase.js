import * as firebase from 'firebase'
import moment from 'moment'

//  Authentication using a provider 


// Grabs all the named exports and can now use them as firebase.something

// Firebase can not handle Arrays, looks like we'll need to use objects of objects.

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    // appId: "1:62753243288:web:04b5ff5452788e358a10ed"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAlldY7hjJeNLdrJPv289js2q5opXo6tho",
    authDomain: "twitter-clone-2a9bb.firebaseapp.com",
    projectId: "twitter-clone-2a9bb",
    storageBucket: "twitter-clone-2a9bb.appspot.com",
    messagingSenderId: "135212338489",
    appId: "1:135212338489:web:1932fe7f87edf2e8e66ce8",
    measurementId: "G-M6KTPPGYR9"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
import firebase from 'firebase'

const firebaseApp =firebase.initializeApp({
 
        apiKey: "AIzaSyCdaZauz1vNkQ3Hn94z1S_cTsb7Zq7wh10",
        authDomain: "messenger-react-2617f.firebaseapp.com",
        projectId: "messenger-react-2617f",
        storageBucket: "messenger-react-2617f.appspot.com",
        messagingSenderId: "872827884648",
        appId: "1:872827884648:web:4c4a207cb59d10386ad7dd"
      
});

const db=firebaseApp.firestore();

export {db};
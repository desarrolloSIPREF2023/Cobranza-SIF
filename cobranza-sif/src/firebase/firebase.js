import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAF7PS7DFL5Kychr-zc4hflFy3Odx4VeBM",
    authDomain: "grupo-sipref.firebaseapp.com",
    databaseURL: "https://grupo-sipref-default-rtdb.firebaseio.com",
    projectId: "grupo-sipref",
    storageBucket: "grupo-sipref.appspot.com",
    messagingSenderId: "1097109461821",
    appId: "1:1097109461821:web:0298080846bf7f1c364354",
    measurementId: "G-RCFVC9EMYT"
}
try {
    const firebase = initializeApp(firebaseConfig)
    const auth = getAuth(firebase)
    const db = getFirestore(firebase)
    
} catch (error) {
    console.log("Error: ", error);
    
}
export { auth, db }

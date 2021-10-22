//Traer firebase
import firebase from "firebase/app";

//Tenes que traer el servicio que vas a usar
import "firebase/firestore"

//Iniciar la APP
const firebaseConfig = {
    apiKey: "AIzaSyC8TMBn70ng5AEUIzpq-VNLLIWUSz8ZINw",
    authDomain: "pc-ingen.firebaseapp.com",
    projectId: "pc-ingen",
    storageBucket: "pc-ingen.appspot.com",
    messagingSenderId: "130187448743",
    appId: "1:130187448743:web:1ed4dfad28576980e36682"
};
const app = firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore(app)

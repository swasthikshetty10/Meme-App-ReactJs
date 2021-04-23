// Create new file "firebaseCinfig.js" in ./src and USe this template


import React from 'react'
import firebase from 'firebase'
require('firebase/auth')


const app = firebase.initializeApp({
        apiKey: "FFFFAuRT0",
        authDomain: "memeapp",
        projectId: "memeapp",
        storageBucket: "memeapp.appspot.com",
        messagingSenderId: "DDSada645655492",
        appId: "1:9werwe2d",
        measurementId: "rwerwe"
     })
const db = app.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();


export const auth = app.auth()
export default db ;

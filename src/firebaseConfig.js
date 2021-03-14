
import React from 'react'
import firebase from 'firebase'
require('firebase/auth')


const app = firebase.initializeApp({
        // firebase config here
     })
const db = app.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();


export const auth = app.auth()
export default db ;

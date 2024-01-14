import admin from 'firebase-admin'
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
    apiKey: "AIzaSyCuIhfxTD7VCZLzdtec-Fgq3BxE0naHhLc",
    authDomain: "books-app-715ea.firebaseapp.com",
    projectId: "books-app-715ea",
    storageBucket: "books-app-715ea.appspot.com",
    messagingSenderId: "274577242448",
    appId: "1:274577242448:web:940280c28890374fe89455"
};

admin.initializeApp(firebaseConfig)

const db = admin.firestore()

export { db }
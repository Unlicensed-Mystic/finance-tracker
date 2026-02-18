import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            "AIzaSyDHVvOdIKZrY5A6emZWbY4wvbgcEDRlu3s",
  authDomain:        "finance-tracker-5aaca.firebaseapp.com",
  projectId:         "finance-tracker-5aaca",
  storageBucket:     "finance-tracker-5aaca.firebasestorage.app",
  messagingSenderId: "269612530487",
  appId:             "1:269612530487:web:bca0e6fd6b8e4485d3f8b2"
}

const app  = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db   = getFirestore(app)

export default app
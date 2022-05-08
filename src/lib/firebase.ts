import { getDatabase } from 'firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    ...import.meta.env.VITE_FIREBASE_CREDENTIALS,
    databaseURL: import.meta.env.VITE_FIREBASE_URL,
}

const app = initializeApp(firebaseConfig)

// Get a reference to the database service
export const db = getDatabase(app)
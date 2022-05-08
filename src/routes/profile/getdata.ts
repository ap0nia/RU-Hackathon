import { getDatabase, ref, child, get as fbget, onValue, query, equalTo, orderByChild } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { session } from '$app/stores'

const firebaseConfig = {
    ...import.meta.env.VITE_FIREBASE_CREDENTIALS,
    databaseURL: import.meta.env.VITE_FIREBASE_URL,
}

async function get() {
    const app = initializeApp(firebaseConfig)
    const db = getDatabase(app)
    const id = 'tliu5175'
    
    let assetIDs
    const dbRef = onValue(ref(db, 'users/' + id), (snapshot) => {
        ({assetIDs} = snapshot.val())
    })
    
    // let data
    //let getResult
    // onValue(dbRef, (snapshot) => {data = snapshot})
    //fbget(child(dbRef, 'tony')).then((snapshot) => getResult = snapshot)

    return {
        body: {
            assetIDs
        }
    }
}

export { get }
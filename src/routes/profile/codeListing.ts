import { os } from '$lib/openscreen'
import { getDatabase, ref, onValue, get as dbGet } from 'firebase/database'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  ...import.meta.env.VITE_FIREBASE_CREDENTIALS,
  databaseURL: import.meta.env.VITE_FIREBASE_URL,
}

async function getAssetIDs() {
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)
  const id = 'brianmv'

  const userRef = ref(db, 'users/' + id)
  const snapshot = await dbGet(userRef)
  const { assetIDs } = snapshot.val()

  return assetIDs
}

async function get() {
  const assetIDs = await getAssetIDs()
  const res = await Promise.all(
    assetIDs.map((assetID) => {
      return os.asset(assetID).get()
    })
  )

  return {
    body: {
      assetIDs: res,
    },
  }
}

export { get }

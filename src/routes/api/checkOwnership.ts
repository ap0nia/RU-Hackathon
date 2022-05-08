import {db} from "$lib/firebase"
import { ref, get as dbGet } from 'firebase/database'

async function main(request) {
    let isOwner = false;
    const {assetId, userId} = request.json()
    console.log("asset id: " + assetId)
    console.log("user id: " + typeof userId)

    const userIDRef = ref(db, "users/" + userId)
    const snapshot = await dbGet(userIDRef)
    if (snapshot.exists()) {
        if (snapshot.val().assetIDs.includes(assetId)) {
            console.log("got here")
            isOwner = true
        }
    }

    return isOwner
    
}

export async function get({request}) {
    const isOwner = await main(request)

    console.log("is owner is: ", isOwner)
    return {
        body: {
            isOwner
        },
    }
}


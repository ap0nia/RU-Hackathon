<script lang="ts">
  import { getDatabase, ref, set, onValue, update, push, get } from 'firebase/database'
  import { initializeApp } from 'firebase/app'
  import { session } from '$app/stores'
  import QR_Card from '$lib/QR_Card.svelte'

  // TODO: Replace with your app's Firebase project configuration
  const firebaseConfig = {
    ...import.meta.env.VITE_FIREBASE_CREDENTIALS,
    databaseURL: import.meta.env.VITE_FIREBASE_URL,
  }

  const app = initializeApp(firebaseConfig)

  // Get a reference to the database service
  const db = getDatabase(app)
  export let createdAssets = []
  async function getQrCode() {
    const res = await fetch('/api/qr')
    const body = await res.json()

    const assetID = body.data.qrCode.assetId
    const imageData = body.data.qrCode.image.data
    const user = $session.user
    const userEmail = user.email.split('@')[0]
    const assetIDsRef = ref(db, 'users/' + userEmail + "/assetIDs");


    const dbRef = ref(getDatabase());
    get(assetIDsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const value = snapshot.val()
        value.push(assetID)
        set(ref(db, "users/" + userEmail), { 
          user: user,
          assetIDs: value,
        })
      } else {
        console.log("snapshot doesn't exist")
        set(ref(db, "users/" + userEmail), { 
          user: user,
          assetIDs: [assetID],
        })
      }
    }).catch((error) => {
      console.error(error);
    });
  }
</script>

<template lang="pug">
  button(on:click|preventDefault='{getQrCode}') Get QR Code
  +each('createdAssets as assetPlusCode')
    QR_Card('{...assetPlusCode}')
</template>

<style lang="stylus">

</style>

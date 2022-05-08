<script lang="ts">
  import { getDatabase, ref, set, onValue, update, push, get } from 'firebase/database'
  import { initializeApp } from 'firebase/app'
  import { session } from '$app/stores'
  // import { GetScansByAssetIdRequest } from '@openscreen/sdk';
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
    console.log(body)
    const user = $session.user
    const userEmail = user.email.split('@')[0]
    const assetIDsRef = ref(db, 'users/' + userEmail + "/assetIDs");


    const dbRef = ref(getDatabase());
    get(assetIDsRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("snapshot does exist")
        const value = snapshot.val()
        value.push(assetID)
        console.log("value", value)
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
    
    localStorage.setItem('qr', imageData)
  }

  async function saveQrCode() {
    const saveOptions = {
      types: [
        {
          description: 'image',
          accept: { 'image/png': ['.png'] },
        },
      ],
    }

    const image = localStorage.getItem('qr')

    const imageBlob = new Blob([atob(image)], { type: 'image/png' })
    console.log(imageBlob)

    const newHandle = await window.showSaveFilePicker(saveOptions)

    const writeOptions = {}

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable(writeOptions)

    // write our file
    await writableStream.write(imageBlob)

    // close the file and write the contents to disk.
    await writableStream.close()
  }
</script>

<template lang="pug">
  h1 hello, RU hacks!
  button(on:click|preventDefault='{getQrCode}') Get QR Code
  button(on:click|preventDefault='{saveQrCode}') Save the QR Code
  +each('createdAssets as assetPlusCode')
    QR_Card('{...assetPlusCode}')
</template>

<style lang="stylus">

</style>

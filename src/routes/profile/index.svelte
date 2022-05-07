<script lang="ts">
  import { getDatabase, ref, set } from 'firebase/database'
  import { initializeApp } from 'firebase/app'
  import { session } from '$app/stores'

  // TODO: Replace with your app's Firebase project configuration
  const firebaseConfig = {
    ...import.meta.env.VITE_FIREBASE_CREDENTIALS,
    databaseURL: import.meta.env.VITE_FIREBASE_URL,
  }

  const app = initializeApp(firebaseConfig)

  // Get a reference to the database service
  const db = getDatabase(app)

  async function getQrCode() {
    const res = await fetch('/api/qr')
    const body = await res.json()

    const assetID = body.data.qrCode.assetId
    const imageData = body.data.qrCode.image.data

    const user = $session.user

    set(ref(db, 'users'), {
      user,
      assetID,
    })

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
</template>

<style lang="stylus">

</style>

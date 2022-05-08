<script lang="ts">
  import { session } from '$app/stores'
  import { getDatabase, ref, set, onValue, update, push, get } from 'firebase/database'
  import QR_Card from '$lib/QR_Card.svelte'

  import { db } from '$lib/firebase.ts'

  let message
  async function getQrCode() {
    const res = await fetch('/api/qr')
    const body = await res.json()

    const assetID = body.data.qrCode.assetId
    const imageData = body.data.qrCode.image.data
    const user = $session.user
    const userEmail = user.email.split('@')[0]
    const assetIDsRef = ref(db, 'users/' + userEmail + '/assetIDs')

    const dbRef = ref(getDatabase())
    get(assetIDsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const value = snapshot.val()
          value.push(assetID)
          set(ref(db, 'users/' + userEmail), {
            user: user,
            assetIDs: value,
          })
          message = assetID
        } else {
          console.log("snapshot doesn't exist")
          set(ref(db, 'users/' + userEmail), {
            user: user,
            assetIDs: [assetID],
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
</script>

<template lang="pug">
  .dashboard
    +if('message')
      .message
        h5 Successfully obtained QR Code: 
        p {message}
    button(on:click|preventDefault='{getQrCode}') Get QR Code
    .mascot: img(src='/bongo_cat.gif' alt='cute cat')
</template>

<style lang="stylus">
  .dashboard
    overflow: hidden

    display: flex
    flex-direction: column
    align-items: center

  .message
    margin-bottom: 2rem

  button
    width: 45%
    height: 3rem
    margin-bottom: 2rem

    border-radius: 0.25rem
    background: accent-100
    transition: 200ms ease-in

    &:hover
      background: accent-300

</style>

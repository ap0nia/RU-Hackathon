<script lang="ts">
  import { session } from '$app/stores'
  import { getDatabase, ref, set, onValue, update, push, get } from 'firebase/database'
  import QR_Card from '$lib/QR_Card.svelte'

  import {db} from "$lib/firebase.ts"

  export let createdAssets = []
  async function getQrCode() {
    const res = await fetch('/api/qr')
    const body = await res.json()

    const assetID = body.data.qrCode.assetId
    const imageData = body.data.qrCode.image.data
    const user = $session.user
    const userEmail = user.email.split('@')[0].replaceAll('.','dot')
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

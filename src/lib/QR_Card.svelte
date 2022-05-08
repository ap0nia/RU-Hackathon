<script lang="ts">
  import { onMount } from 'svelte'
  let assetId, name, description
  onMount(async ()=> {
    ({assetId, name, description} = asset.asset)
    if(!pngData)
      pngData = asset.asset.qrCodes[0].image.data
    console.log(asset)
  })
  // let username
  // let book
  // let review
  // let pngData
  // onMount(async () => {
  //   // await fetch('/')
  //   ;({ username, book, review } = { username: 'hi', book: 'saber', review: 'bonk'})
  //   pngData = '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'
  // })
  export let asset
  export let pngData
</script>

<template lang="pug">
    h3 Asset ID {assetId}
    p {name}
    p {description}
    img(src='{`data:image/png;base64,${pngData}`}' alt='qr code')
</template>

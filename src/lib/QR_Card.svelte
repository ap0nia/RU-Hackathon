<script lang="ts">
  import { onMount } from 'svelte'
  export let asset
  export let pngData
  let assetId, name, description
  let loading = true

  onMount(async ()=> {
    ({assetId, description} = asset.asset)
    name = asset.asset.customAttrbutes?.name||'Uninitialized QR Code'
    if(!pngData)
      pngData = asset.asset.qrCodes[0].image.data
    loading = false
  })
</script>

<template lang="pug">
  +if('!loading')
    div
      p Name: {name}
      p Description: {description}
      img(src='{`data:image/png;base64,${pngData}`}' alt='qr code')
</template>

<style lang="stylus">
  div
    background: black
    display flex
    flex-direction column
    align-items center
    padding 20px
    padding-bottom 30px
    border-radius 10px
    margin-bottom: 10px
</style>

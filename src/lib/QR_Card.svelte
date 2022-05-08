<script lang="ts">
  import { onMount } from 'svelte'

  export let asset

  let assetId, name, description, pngData
  let loading = true

  onMount(async () => {
    ;({ assetId, name, description } = asset.asset)
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

<script lang="ts">
  import QR_Card from '$lib/QR_Card.svelte'
  export let assetIDs
  console.log(assetIDs)
</script>

<template lang="pug">
  +each('assetIDs as asset')
    QR_Card(asset='{asset}')
</template>

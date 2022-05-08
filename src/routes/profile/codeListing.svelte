<script lang="ts">
  import QR_Card from '$lib/QR_Card.svelte'

  export let assetIDs
</script>

<template lang="pug">
  +each('assetIDs as assetID')
    QR_Card(assetID='{assetID}')
</template>

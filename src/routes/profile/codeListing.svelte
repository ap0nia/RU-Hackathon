<script lang="ts">
  import QR_Card from '$lib/QR_Card.svelte'
  export let assets
</script>

<template lang="pug">
  +each('assets as asset')
    QR_Card(asset='{asset}')
</template>

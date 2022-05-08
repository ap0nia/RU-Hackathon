<script lang="ts">
  import { onMount } from 'svelte'
  let username
  let book
  let review

  onMount(async () => {
    // await fetch('/')
    ;({ username, book, review } = { username: 'hi', book: 'saber', review: 'bonk' })
  })

  export let assetID
</script>

<template lang="pug">
    h1 Asset ID:
    p {assetID}
    p { username }
    p { book }
    p { review }
    hr
</template>

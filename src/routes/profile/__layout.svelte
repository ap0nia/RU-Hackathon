<script lang="ts" context="module">
  export async function load({ session }) {
    return {
      props: {
        username: 'ricardo',
      },
    }
  }
</script>

<script lang="ts">
  export let username = ''
</script>

<template lang="pug">
  h1 profile page
  slot
</template>

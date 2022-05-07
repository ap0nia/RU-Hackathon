<script lang="ts" context="module">
  export async function load({ session }) {
    return {
      props: {
        username: session.username,
      },
    }
  }
</script>

<script lang="ts">
  import { session } from '$app/stores'
  const username = $session.username ? $session.username.given_name : ''
</script>

<template lang="pug">
  h1 hello {username}
</template>

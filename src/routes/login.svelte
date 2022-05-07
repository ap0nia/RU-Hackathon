<script lang="ts">
  import auth from '$lib/auth'
  import { session } from '$app/stores'

  let client

  async function login() {
    client = await auth.createClient()
    const res = await auth.loginWithPopup(client, {})
    $session.isAuthenticated = await client.isAuthenticated()
    $session.user(await client.getUser())
  }
</script>

<template lang="pug">
  h1 login page
  button(on:click='{login}') Login
</template>

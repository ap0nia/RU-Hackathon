<script lang="ts">
  import { createClient, loginWithPopup } from '$lib/auth'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'

  let client

  async function login() {
    client = await createClient()
    const res = await loginWithPopup(client, {})
    $session.isAuthenticated = await client.isAuthenticated()
    $session.username = await client.getUser()
    goto('/profile')
  }
</script>

<template lang="pug">
  h1 login page
  button(on:click='{login}') Login
</template>

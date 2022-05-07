<script lang="ts">
  import { createClient, loginWithPopup } from '$lib/auth'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'

  let client

  async function login() {
    client = await createClient()
    const res = await loginWithPopup(client, {})
    $session.isAuthenticated = await client.isAuthenticated()
    $session.user = await client.getUser()
    goto('/profile')
  }
</script>

<template lang="pug">
  .form
    h1 Login
    hr
    button(type='submit' on:click='{login}') Login
</template>

<style lang="stylus">
  .form
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-evenly

  hr
    width: 75%
    height: .25rem
    background: white
    border-radius: .125rem

  button
    width: 9rem
    height: 5rem
    background: secondary_color
    transition: 200ms
    border-radius: 0.5rem
    border: none

    &:hover
      background: green
      color: white
</style>

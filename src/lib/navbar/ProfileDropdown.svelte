<script lang="ts">
  import { createClient, logout } from '$lib/auth'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'
  let username = 'defaultusername'

  async function handleLogout() {
    const client = await createClient()
    await logout(client)
    $session.isAuthenticated = false
  }
  export let showProfileDropdown = true
</script>

<template lang="pug">
  .profileDropdown(class:hidden='{!showProfileDropdown}')
    ul
      li: a(href='/profile/') Account
      li: button() Settings
      li: button(on:click='{handleLogout}') Logout
</template>

<style lang="stylus">
  .profileDropdown
    position: absolute
    right: 0
    height: 8rem
    width: 7rem

    display: flex
    flex-direction: column
    align-items: center

    overflow: hidden
    transition: 300ms
    background: secondary_color

  .hidden
    height: 0

  ul
    height: 100%
    
    display: flex
    flex-direction: column
    justify-content: space-evenly
    align-items: center

    list-style: none

  a, button
    font-size: 1rem
    color: black
    text-decoration: none
    background: none
    border: none

    transition: 350ms
    &:hover
      cursor: pointer
      color: #555
</style>

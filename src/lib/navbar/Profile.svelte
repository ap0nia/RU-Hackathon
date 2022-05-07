<script lang="ts">
  let username = 'defaultusername'
  export let showProfileMenu = true
</script>

<template lang="pug">
  .profileMenu(class:hidden='{!showProfileMenu}')
    ul
      li: button() Account
      li: button() Settings
      li: button() Logout
</template>

<style lang="stylus">
  .profileMenu
    position: absolute
    right: 0
    height: 8rem
    width: 7rem

    display: flex
    flex-direction: column
    align-items: center

    overflow: hidden
    transition: 300ms
    background: red

  .hidden
    height: 0

  ul
    height: 100%
    
    display: flex
    flex-direction: column
    justify-content: space-evenly
    align-items: center

    list-style: none

  button
    background: none
    border: none
    color: white

    transition: 350ms

    &:hover
      cursor: pointer
      color: yellow
</style>

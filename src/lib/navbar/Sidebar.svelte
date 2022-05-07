<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let showSidebar = true
</script>

<template lang="pug">
  nav(class:hidden='{!showSidebar}')
    ul
      li: a(href='/') Home
      li: a(href='/data') Data page
      li: a(href='/form') Form page
</template>

<style lang="stylus">
  nav
    position: absolute
    width: 10rem
    height: 30vh

    transition: 400ms

    overflow: hidden
    white-space: nowrap
    background: hsl(14, 88, 59)

  ul
    height: 100%

    display: flex
    flex-direction: column
    justify-content: space-evenly
    align-items: center

    list-style: none

  a
    text-decoration: none
    color: black
    transition: 300ms

    &:hover
      color: red

  .hidden
    width: 0px
</style>

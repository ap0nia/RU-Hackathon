<script lang="ts">
  import { fade } from 'svelte/transition'

  export let showSidebar = true
</script>

<template lang="pug">
  nav(class:hidden='{!showSidebar}')
    ul
      li
        span.fa-solid.fa-house-chimney.fa-2x
        a(href='/') Home

      li
        span.fa-solid.fa-graduation-cap.fa-2x
        a(href='/about') About Us

      li
        span.fa-solid.fa-bomb.fa-2x
        a(href='/purpose') Purpose

  +if('showSidebar')
    .modal(transition:fade)
</template>

<style lang="stylus">
  nav
    position: absolute
    width: $sidenav-width

    transition: $sidenav-transition

    overflow: hidden
    white-space: nowrap
    background: secondary_color
    z-index: 1

  .hidden
    width: 0px

  ul
    height: 100%
    padding: 1rem 0

    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    row-gap: 2rem

    list-style: none

  span
    margin-right: 0.75rem

  a
    font-size: 1.2rem
    font-weight: 500

    text-decoration: none
    color: black
    transition: 300ms

    &:hover
      color: #555

  .modal
    background: hsla(0, 0, 0, 0.5)
    position: absolute
    width: 100%
    height: 100%
</style>

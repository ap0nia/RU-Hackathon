<script lang="ts">
  import Header from '$lib/Header.svelte'

  let shiftContentRight = false

  function chaChaSlide({ detail }) {
    shiftContentRight = detail.sideNavIsOpen
  }
</script>

<template lang="pug">
  Header(on:sideNavEvent='{chaChaSlide}')
  main: slot
</template>

<style lang="stylus">
  main
    transition: $sidenav-transition
    flex 1
    padding 40px
    background theme_color
    max-width: 500px;
    @media screen and (min-width: 500px)
      width: 80%;
      border-radius: 20px
      margin: 5% auto
  .shiftRight
    margin-left: $sidenav-width
</style>

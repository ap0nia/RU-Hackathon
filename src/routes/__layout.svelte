<script lang="ts">
  import Header from '$lib/Header.svelte'

  let shiftContentRight = false

  function chaChaSlide({ detail }) {
    shiftContentRight = detail.sideNavIsOpen
  }
</script>

<template lang="pug">
  Header(on:sideNavEvent='{chaChaSlide}')
  main(class:shiftRight='{shiftContentRight}'): slot
</template>

<style lang="stylus">
  main
    transition: $sidenav-transition
    flex 1
    width: 80%;
    padding 40px
    padding-top 5%
    background #FFFFFF
    max-width: 500px;
    margin: 0 auto

  .shiftRight
    margin-left: $sidenav-width
</style>

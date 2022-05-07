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
    margin-left: 0
    transition: $sidenav-transition
    flex 1

  .shiftRight
    margin-left: $sidenav-width
</style>

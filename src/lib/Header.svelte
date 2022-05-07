<script lang="ts">
  import Profile from '$lib/navbar/Profile.svelte'
  import Title from '$lib/navbar/Title.svelte'
  import Sidebar from '$lib/navbar/Sidebar.svelte'
</script>

<template lang="pug">
  header
    Sidebar
    .title: Title
    nav
      Profile
</template>

<style lang="stylus">
  header
    display: flex
    background: hsl(307, 82, 19)
    color: white
  .title
    display: flex
    justify-content: center
    align-items: center
    flex-grow: 1
</style>

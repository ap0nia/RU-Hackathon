<script lang="ts">
  import Profile from '$lib/navbar/Profile.svelte'
  import Title from '$lib/navbar/Title.svelte'
  import Sidebar from '$lib/navbar/Sidebar.svelte'

  function toggleSidebar() {
    showSidebar = !showSidebar
  }

  function toggleProfileMenu() {
    showProfileMenu = !showProfileMenu
  }

  let showSidebar = true
  let showProfileMenu = true
</script>

<template lang="pug">
  header
    i.fa-solid.fa-bars.fa-3x(on:click='{toggleSidebar}')
    .title: Title
    i.fa-solid.fa-user.fa-3x(on:click='{toggleProfileMenu}')
  .sidebar: Sidebar(showSidebar='{showSidebar}')
  .profile: Profile(showProfileMenu='{showProfileMenu}')
</template>

<style lang="stylus">
  header
    position: relative
    padding: 1rem 2rem

    display: flex
    align-items: center

    color: white
    background: hsl(307, 82, 19)

  i
    transition: 300ms

    &:hover
      color: blue

  .title
    display: flex
    justify-content: center
    align-items: center
    flex-grow: 1
</style>

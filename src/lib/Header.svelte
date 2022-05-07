<script lang="ts">
  import SideNav from '$lib/navbar/SideNav.svelte'
  import Title from '$lib/navbar/Title.svelte'
  import ProfileDropdown from '$lib/navbar/ProfileDropdown.svelte'

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  import clickOutside from '$lib/utils/clickOutside'

  let showSideNav = false
  let showProfileDropdown = false

  function toggleSideNav() {
    showSideNav = !showSideNav

    dispatch('sideNavEvent', { sideNavIsOpen: showSideNav })
  }

  function closeSideNav() {
    showSideNav = false
    dispatch('sideNavEvent', { sideNavIsOpen: false })
  }

  function toggleProfileDropdown() {
    showProfileDropdown = !showProfileDropdown
  }

  function closeProfileDropdown() {
    showProfileDropdown = false
  }
</script>

<template lang="pug">
  header
    .hamburger: span.fa-solid.fa-bars.fa-3x(
      on:click='{toggleSideNav}'
      use:clickOutside
      on:outclick='{closeSideNav}'
    )
    .title: Title
    .profileIcon: span.fa-solid.fa-user.fa-3x(
      on:click='{toggleProfileDropdown}'
      use:clickOutside
      on:outclick='{closeProfileDropdown}'
    )

  .sideNav: SideNav(showSidebar='{showSideNav}')
  .profileDropdown: ProfileDropdown(showProfileDropdown='{showProfileDropdown}')
</template>

<style lang="stylus">
  header
    position: relative
    padding: 1rem 2rem

    display: flex
    align-items: center

    color: white
    background: hsl(307, 82, 19)

  span
    transition: 300ms

    &:hover
      color: blue

  .title
    display: flex
    justify-content: center
    align-items: center
    flex-grow: 1
</style>

<script lang="ts" context="module">
  export async function load({ session }) {
    return {
      props: {},
    }
  }
</script>

<script lang="ts">
  import { createClient } from '$lib/auth'
  import { onMount } from 'svelte'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'

  let client

  onMount(async () => {
    if (!$session.isAuthenticated) {
      client = await createClient()
      const authAuthenticated = await client.isAuthenticated()

      console.log(authAuthenticated)

      if (!authAuthenticated) {
        goto('/login')
        return
      }

      $session.isAuthenticated = true
      $session.username = await client.getUser()
    }
  })
</script>

<template lang="pug">
  h1 profile page
  slot
</template>

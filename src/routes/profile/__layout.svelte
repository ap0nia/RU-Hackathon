<script lang="ts" context="module">
  export async function load({ session }) {
    session.username = 'ricardo'
    session.isAuthenticated = true

    return {
      props: {
        session,
      },
    }
  }
</script>

<script lang="ts">
  import auth from '$lib/auth'
  import { onMount } from 'svelte'
  import { session } from '$app/stores'
  import { goto } from '$app/navigation'

  onMount(async () => {
    if (!$session.isAuthenticated) {
      client = await auth.createClient()
      const authAuthenticated = await client.isAuthenticated()

      if (!authAuthenticated) {
        goto('/login')
      }

      $session.isAuthenticated = true
    }
  })

  export let username = ''
</script>

<template lang="pug">
  h1 profile page
  slot
</template>

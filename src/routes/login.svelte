<script lang="ts">
  async function auth() {
    await fetch('/api/authService', { method: 'GET' })
  }
</script>

<template lang="pug">
  form
    input Username
    input Password
</template>

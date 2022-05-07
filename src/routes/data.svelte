<script lang="ts">
  export let objects = [{ name: 'dummy object', description: 'very cool' }]
</script>

<template lang="pug">
  p list of objects: {JSON.stringify(objects)}
  +each('objects as object')
    h1 Name of Object: 
    p {object.name}
    h2 Description of Object: 
    p {object.description}
</template>

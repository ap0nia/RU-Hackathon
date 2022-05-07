<script lang="ts" context="module">
  export async function load({ url }) {
    const assetID = url.searchParams.get('id')
    //TODO: if the custom attributes aren't in the search params, try loading them from the API
    const customAttributes = JSON.parse(url.searchParams.get('attrs'))

    return {
      props: {
        assetID,
        ...customAttributes
      },
    }
  }
</script>

<script lang="ts">
  export let assetID
  export let name
  export let description
</script>

<template lang="pug">
    h1 {name}
    p {description}
    p {assetID}
</template>

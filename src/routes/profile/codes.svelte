<script lang="ts" context="module">
    export async function load({ url }) {
        const assets = await fetch('/api/assets')
        return {
            props: {assets}
        }
    }
</script>

<script lang="ts">
    export let assets
</script>

<template lang="pug">
    p {assets}
</template>
<script lang='ts' context='module'>
    export async function load({url, fetch}) {
        const scanId = url.searchParams.get('scanId')
        const res = await fetch(`/api/scan?scanId=${scanId}`).then(r=>r.json())
        const scan = res.scan
        if(!scan.asset.customAttributes?.registered)
            return  {
                status: 302,
                redirect:`/create?id=${scan.asset.assetId}`
            }
        const {name, description} = scan.asset
        const reviews = scan.asset.customAttributes.reviews
        const props = {reviews, name:scan.asset.customAttributes.name, description}
        return {
            props: {
                props
            },
        }
    }
</script>

<script lang='ts'>
    import Display from '$lib/Display.svelte'
    export let props
</script>

<template lang="pug">
    Display('{...props} showReviews=true')
</template>
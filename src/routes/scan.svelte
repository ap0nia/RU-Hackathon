<script lang='ts' context='module'>
    import {os} from '$lib/openscreen'
    export async function load({url}) {
        const scanId = url.searchParams.get('scanId')
        const scan = await os.scan(scanId).get();
        if(!scan.asset.customAttributes?.registered)
            return  {
                status: 302,
                redirect:`/create?id=${scan.asset.assetId}`
            }
        const {name, description} = scan.asset
        const reviews = scan.asset.customAttributes.reviews
        const props = {reviews, name, description}
        return {
            props: {
                props
            }
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
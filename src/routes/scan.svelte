<script lang='ts' context='module'>
    export async function load({url, fetch, session}) {
        const scanId = url.searchParams.get('scanId')
        // console.log(document.cookie)
        // console.log(user)
        const {scan, user} = await fetch(`/api/scan?scanId=${scanId}`).then(r=>r.json())
        const assetId = scan.asset.assetId
        const userId = user.email.slice(0,user.email.indexOf('@'))
        const {isOwner} = await fetch(`/api/checkOwnership?assetId=${assetId}&userId=${userId}`).then(r=>r.json())
        console.log(isOwner)
        if(!scan.asset.customAttributes?.registered)
            return  {
                status: 302,
                redirect:`/create?id=${scan.asset.assetId}`
            }
        const {name, description} = scan.asset
        const reviews = scan.asset.customAttributes.reviews
        const props = {}//{reviews, name:scan.asset.customAttributes.name, description}
        return {
            props: {
                props
            },
        }
    }
</script>

<script lang='ts'>
    import Display from '$lib/Display.svelte'
import type { assetID } from './edit.svelte'
    export let props
</script>

<template lang="pug">
    p hi
    //- Display('{...props} showReviews=true')
</template>
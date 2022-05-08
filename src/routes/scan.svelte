<script lang='ts' context='module'>
    export async function load({url, fetch, session}) {
        const scanId = url.searchParams.get('scanId')
        // console.log(document.cookie)
        // console.log(user)
        const {scan, user} = await fetch(`/api/scan?scanId=${scanId}`).then(r=>r.json())
        const assetId = scan.asset.assetId
        console.log(isOwner)
        if(!scan.asset.customAttributes?.registered)
            return  {
                status: 302,
                redirect:`/create?id=${assetId}`
            }
        const userId = user.email.slice(0,user.email.indexOf('@')).replaceAll('.','dot')
        const {isOwner} = await fetch(`/api/checkOwnership`,{
            body: {
                assetID, userId
            }
        }).then(r=>r.json())
        const {name, description} = scan.asset
        const reviews = scan.asset.customAttributes.reviews
        const props = {reviews, name:scan.asset.customAttributes.name, description}
        return {
            props: {
                props
            }
        }
    }
</script>

<script lang='ts'>
    import Display from '$lib/Display.svelte'
import type { loop_guard } from 'svelte/internal'
import type { assetID } from './edit.svelte'
    export let props
</script>

<template lang="pug">
    Display('{...props} showReviews=true')
</template>
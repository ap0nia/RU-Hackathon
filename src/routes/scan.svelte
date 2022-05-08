<script lang="ts" context='module'>
    let poggers = 'nope'
export async function load({url}) {
    const scanID = url.searchParams.get('scanId')
    
    console.log(scanID) //these log to the server
    const response = {//this is a placeholder. replace with openscreen api call
        asset: {
            assetId: 'abc123',
            name: 'Test asset',
            description: 'This should be replaced soon enough',
            customAttributes: {
                registered: true,
                reviews: [
                    {
                        rating: 5,
                        fulltext: 'This asset is so great. My review is long enough that it should wrap to multiple lines. I hope this doesn\'t mess up rendering!'
                    },
                    {
                        rating: 4,
                        fulltext: 'Meh, it\'s ok'
                    }
                ]  
            }
        },
        qrCode: {
            assetId: 'abc123',
            qrCodeId: 'qrabc123',
            scanCount: 69

        }
    }
    if(!response.asset.customAttributes.registered)
        return {
            status: 302,
            redirect: `/create?id=${response.asset.assetId}&attrs=${encodeURIComponent(JSON.stringify(response.asset.customAttributes))}`,
        }
    return {
        props: {
            name: response.asset.name,
            description: response.asset.description,
            reviews: response.asset.customAttributes.reviews
        }
    }
}
</script>

<script lang='ts'>
    import Display from '$lib/Display.svelte'
import type { get } from './api/qr'
    export let reviews
    export let name
    export let description
    const props = {reviews, name, description}
</script>

<template lang="pug">
    Display('{...props} showReviews=true')
</template>
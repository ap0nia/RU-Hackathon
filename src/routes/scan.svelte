<script lang="ts" context='module'>
    let poggers = 'nope'
export async function load({url}) {
    const scanID = url.search.slice(1)
    
    console.log(scanID) //these log to the server
    const response = {//this is a placeholder. replace with openscreen api call
        asset: {
            assetId: 'abc123',
            customAttributes: {
                registered: false,
                name: 'Test asset',
                description: 'This should be replaced soon enough',
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
    const path = response.asset.customAttributes.registered? 'display':'form';
    poggers='yep'
    return {
        status: 302,
        redirect: `/${path}?id=${response.asset.assetId}&attrs=${encodeURIComponent(JSON.stringify(response.asset.customAttributes))}`,
    }
}
</script>
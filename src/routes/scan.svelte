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
                description: 'This should be replaced soon enough'
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
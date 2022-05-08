import { os } from '$lib/openscreen'

export async function post({request}) {
    const {name, description, assetId} = await request.json()
    console.log(assetId)
    const customAttributes = {
        registered: true,
        name: name,
        reviews: []
    }
    const asset = await os.asset(assetId).update({
        description,
        customAttributes
    });
    console.log(asset)
    return {
        status: 200
    }
}

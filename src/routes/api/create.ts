import { os } from '$lib/openscreen'

export async function post({request}) {
    const {name, description, assetId} = await request.json()
    const customAttributes = {
        registered: true,
        name: name,
        reviews: []
    }
    await os.asset(assetId).update({
        description,
        customAttributes
    });
    return {
        status: 200
    }
}

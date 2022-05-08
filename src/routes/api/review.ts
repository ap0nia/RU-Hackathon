import {os} from '$lib/openscreen'

export async function post({request}) {
    const { reviewObject, assetId } = await request.json()
    const asset = await os.asset(assetId).get()
    const customAttributes = asset.asset.customAttributes
    //add reviewObject to customAttributes.reviews if it exists, or it to customAttributes as a one element list
    //then, use the openscreen sdk to update the asset with the given ID to override its custom attributes with this new one
    if ('reviews' in customAttributes) {
        customAttributes.reviews.push(reviewObject)
    }
    else{
        customAttributes.reviews = [reviewObject]
    }

    const result = await os.asset(assetId).update({customAttributes});
    console.log(result)
    return {
        status: 200
    }
}
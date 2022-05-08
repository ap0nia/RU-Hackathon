import { os } from '$lib/openscreen'

export async function post({ request }) {
  const { name, description, assetId } = await request.json()
  const customAttributes = {
    registered: true,
    reviews: [],
  }
  const asset = await os.asset(assetId).update({
    name,
    description,
    customAttributes,
  })
  console.log(asset)
  return {
    status: 200,
  }
}

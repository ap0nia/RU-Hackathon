import {os} from '$lib/openscreen'
export async function get() {
  const assetIds = [
    '004d38b4-c5f8-4588-b58c-a8c5b351e382',
    '012079da-6e67-4495-be53-1165d07cd056',
    '6aa6ab93-ba4f-4747-a328-40b2813a832e'
  ]
  const assets = await Promise.all(assetIds.map(assetId=> {
    return os.asset(assetId).get()
  }))
  return {
    body: {
      assets,
    },
  }
}

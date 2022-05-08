export async function get() {
  // TODO: make API call for RTDB
  // access RTDB at username
  // get list of objects at username
  // return in body
  const assetIDs = ['abcde', 'elysia', 'aponia']
  return {
    body: {
      assetIDs,
    },
  }
}

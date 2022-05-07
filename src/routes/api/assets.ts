import {os, projectId} from '$lib/openscreen'
export async function get() {
    const assets = await os.project(projectId).assets().get();
    return {
      body: {
        assets,
      },
    }
}
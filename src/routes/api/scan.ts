import {os} from '$lib/openscreen'

export async function get({url}) {
    const scanId = url.searchParams.get('scanId')
    const scan = await os.scan(scanId).get();
    return {
        status: 200,
        body: {
            scan
        }
    }
}
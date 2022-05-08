import {os} from '$lib/openscreen'
import cookie from 'cookie'
export async function get({url, request}) {
    const user = JSON.parse(cookie.parse(request.headers.get('cookie')).user)
    const scanId = url.searchParams.get('scanId')
    const scan = await os.scan(scanId).get();
    return {
        status: 200,
        body: {
            scan, user
        }
    }
}
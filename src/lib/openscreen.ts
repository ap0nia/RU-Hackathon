import { Openscreen } from '@openscreen/sdk'
export const os = new Openscreen().config({
  key: import.meta.env.VITE_OS_API_KEY,
  secret: import.meta.env.VITE_OS_API_SECRET,
})
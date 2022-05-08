import {os, projectId} from '$lib/openscreen'

async function main() {
  // Create an asset and generate a QR Code
  const asset = await os
    .project(projectId)
    .assets()
    .create({
      name: 'Generated Asset',
      qrCodes: [
        {
          intent: 'https://ru-hackathon.vercel.app/scan',
          intentType: 'DYNAMIC_REDIRECT',
          dynamicRedirectType: 'SCAN_ID_IN_QUERY_STRING_PARAMETER'
        },
      ],
    })

  // Returns the asset object you just created
  // console.log('Asset:', JSON.stringify(asset, '', 2))

  // Note: The qrCodeId within the asset object can be accessed through asset.asset.qrCodes[0].qrCodeId
  const { qrCodeId } = asset.asset.qrCodes[0]

  // Returns a scannable QR Code and saves the png file in your project folder
  const qrCode = await os.qrCode(qrCodeId).get({ format: 'png', dataUrl: true })
  await os.saveQrImageDataToFile(qrCode, 'my-first-qr-code.png')

  // Returns the Openscreen qrCode object
  // console.log('QR Code:', JSON.stringify(qrCode, '', 2))
  return { asset, qrCode }
}

export async function get() {
  const data = await main()

  return {
    body: {
      data,
    },
  }
}

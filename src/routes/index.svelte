<script lang="ts">
  async function getQrCode() {
    const res = await fetch('/api/qr')
    const {
      data: {
        qrCode: {
          image: { data: imageData },
        },
      },
    } = await res.json()
    localStorage.setItem('qr', imageData)
  }

  async function saveQrCode() {
    const saveOptions = {
      types: [
        {
          description: 'image',
          accept: { 'image/png': ['.png'] },
        },
      ],
    }

    const image = localStorage.getItem('qr')

    const imageBlob = new Blob([atob(image)], { type: 'image/png' })

    const newHandle = await window.showSaveFilePicker(saveOptions)

    const writeOptions = {}

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable(writeOptions)

    // write our file
    await writableStream.write(imageBlob)

    // close the file and write the contents to disk.
    await writableStream.close()
  }
</script>

<template lang="pug">
  h1 hello, RU hacks!
  button(on:click|preventDefault='{getQrCode}') Get QR Code
  button(on:click|preventDefault='{saveQrCode}') Save the QR Code
</template>

<style lang="stylus">

</style>

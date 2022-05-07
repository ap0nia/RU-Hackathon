<script lang="ts" context="module">
  export async function load({url}) {
    const assetID = url.searchParams.get('id')
    let didUpdate=false;
    if(url.searchParams.get('name')) {
      didUpdate=true;
      const customAttributes = {
        name: url.searchParams.get('name'),
        description: url.searchParams.get('description')
      }
      console.log(assetID, customAttributes)
      //use openscreen to update asset with new custom attributes
    }
    return {
      props: {
        assetID,
        didUpdate
      }
    }
  }
  async function submit() {
    console.log('submitted')
  }

  let name = ''
  let description = ''
</script>

<script lang="ts">
  export let assetID
  export let didUpdate
</script>

<template lang="pug">
  p {didUpdate}
  //only render the following if didUpdate is true
  p Success! You have registered the asset.
  form
    label(for='name') Name of Item
      input(type='text' name='name' bind:value='{name}')
    label(for='description') Description
      input(type='text' name='description' bind:value='{description}')
    input(type='hidden' name='id' value='{assetID}')
    button(type='submit' on:click='{submit}') Submit
  p {assetID}
  h1 current form state:
  p name: {name}
  p description: {description}
</template>

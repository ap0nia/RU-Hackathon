<script lang="ts" context="module">
  export async function load({ url }) {
    const assetID = url.searchParams.get('id')
    let didUpdate = false
    if (url.searchParams.get('name')) {
      didUpdate = true
      const customAttributes = {
        registered: true,
        name: url.searchParams.get('name'),
        description: url.searchParams.get('description'),
        reviews: []
      }
      console.log(assetID, customAttributes)
      //use openscreen to update asset with new custom attributes
    }
    return {
      props: {
        assetID,
        didUpdate,
      },
    }
  }

  let name = ''
  let description = ''
</script>

<script lang="ts">
  export let assetID
  export let didUpdate
</script>

<template lang="pug">
  +if('didUpdate')
    p Success! You have registered the asset.
    +else
      div.container
        form
          ul.flex-outer
            li
              label(for='name') Name of Item
                input(type='text' name='name' bind:value='{name}')
            li
              label(for='description') Description
                textarea(name='description' bind:value='{description}')
            input(type='hidden' name='id' value='{assetID}')
            li
              button(type='submit' on:click='{submit}') Submit
</template>

<style lang="stylus">
  .flex-outer{
    list-style-type: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .flex-outer li{
    justify-content center
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .flex-outer > li:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .flex-outer li label,
  .flex-outer li p {
    padding: 8px;
    font-weight: 300;
    letter-spacing: .09em;
    //text-transform: uppercase;
  }
  
  .flex-outer > li > label,
  .flex-outer li p {
    flex: 1 0 120px;
    max-width: 220px;
  }
  
  .flex-outer > li > label + *,
  .flex-inner {
    flex: 1 0 220px;
  }
  
  .flex-outer li p {
    margin: 0;
  }
  
  .flex-outer li input:not([type='checkbox']),
  .flex-outer li textarea {
    padding: 15px;
  }
  
  .flex-outer li button {
    margin-left: auto;
    margin-right auto
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    //text-transform: uppercase;
    letter-spacing: .09em;
    border-radius: 2px;
  }
  
  .flex-inner li {
    width: 100px;
  }
</style>

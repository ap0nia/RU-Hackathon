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
      const customAttributes = JSON.parse(url.searchParams.get('attrs'))
      console.log({
          assetID,
          didUpdate,
          ...customAttributes
        },)
      return {
        props: {
          assetID,
          didUpdate,
          ...customAttributes
        },
      }
    }
  </script>
  
  <script lang="ts">
    export let assetID
    export let didUpdate
    export let reviews
    export let name
    export let description
    const props = {reviews, name, description}
    import Form from './create.svelte'
    import Display from './display.svelte'
  </script>
  
  <template lang="pug">
      Display('{...props} showReviews=false')
      h1 Edit Asset
      Form
  </template>

  <style lang='stylus'>
    h1
        border-bottom: solid black
        margin-top 10px
  </style>
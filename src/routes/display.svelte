<script lang="ts" context="module">
  export async function load({ url }) {
    const assetID = url.searchParams.get('id')
    //TODO: if the custom attributes aren't in the search params, try loading them from the API
    const customAttributes = JSON.parse(url.searchParams.get('attrs'))
    console.log('load is running')
    return {
      props: {
        assetID,
        ...customAttributes,
        showReviews: false
      },
    }
  }
</script>

<script lang="ts">
  export let assetID
  export let name
  export let description
  export let reviews
  export let showReviews
</script>

<template lang="pug">
  h1 {name}
  p {description}
  +if('showReviews==="true"')
    h2 Reviews
    +each('reviews as {rating, fulltext}')
      div#rating
        h3 {rating}/5
        span {fulltext}
</template>

<style lang="stylus">
  h2 
    margin-top 10px
    border-bottom solid black 2px
    margin-bottom 10px
  #rating
    h3
      display inline
      margin-right 10px
    margin-bottom 10px
    background #EEEEEE
    border-radius 5px
    padding 5px

</style>
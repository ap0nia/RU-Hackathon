<script lang="ts" context="module">
  export async function load({ url }) {
    const assetID = url.searchParams.get('id')
    //TODO: if the custom attributes aren't in the search params, try loading them from the API
    const customAttributes = JSON.parse(url.searchParams.get('attrs'))

    return {
      props: {
        assetID,
        ...customAttributes
      },
    }
  }
</script>

<script lang="ts">
  export let assetID
  export let name
  export let description
  export let reviews
</script>

<template lang="pug">
  div.container
    h1 {name}
    p {description}
    h2 Reviews
    +each('reviews as {rating, fulltext}')
      div#rating
        h3 {rating}/5
        span {fulltext}
</template>

<style lang="stylus">
  .container
    min-height 100%
    width: 80%;
    padding 40px
    padding-top 5%
    background #FFFFFF
    max-width: 500px;
    margin: 0 auto
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
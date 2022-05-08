<script lang="ts">
  export let name
  export let description
  export let reviews
  export let showReviews
</script>

<template lang="pug">
  h1 {name}
  p {description}
  +if('showReviews==="true"&&reviews.length>0')
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
    background black
    border-radius 5px
    padding 5px

</style>

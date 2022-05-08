<script lang="ts">
  let name = ''
  let description = ''
</script>

<template lang="pug">
  form
    ul.flex-outer
      li
        label(for='name') Name of Item
          input(type='text' name='name' bind:value='{name}')
      li
        label(for='description') Description
          textarea(name='description' bind:value='{description}')
      li
        button(type='submit') Submit
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

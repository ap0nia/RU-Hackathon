<script lang="ts">
  export async function load({url}) {
    return {
      props: {
        id: url.searchParams.get('id')
      }
    }
  }
  async function submit() {
    console.log('submitted')
  }

  let name = ''
  let description = ''
</script>

<template lang="pug">
  form
    label(for='name') Name of Item
      input(type='text' name='name' bind:value='{name}')
    label(for='description') Description
      input(type='text' name='name' bind:value='{description}')
    button(type='submit' on:click='{submit}') Submit
  p {id}
  h1 current form state:
  p name: {name}
  p description: {description}
</template>

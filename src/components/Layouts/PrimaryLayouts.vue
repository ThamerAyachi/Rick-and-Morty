<template>
  <div>
      <h2 class="font-bold mt-12 pb-2 text-3xl">{{ title }}</h2>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: String
    }

}
</script>

<style>

</style>
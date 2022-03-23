<template>
    <router-link :to="`/character/${id}`" 
        class="bg-white rounded shadow my-2 md:w-64 w-full mx-2  hover:shadow-md"
    >
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="alt" class="w-full h-40 sm:48 object-cover">
    <div class="mx-2 my-2">
      <div class="">
        <span class="text-xl font-bold">Rick Sanchez</span>
      </div>
      <div class="flex items-center space-x-2">
        <svg class="w-2 h-2" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="19" fill="rgba(110, 231, 183)"/>
        </svg>
        <span class="">Alive - Human</span>
      </div>
    </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: String
    }
}
</script>

<style>

</style>
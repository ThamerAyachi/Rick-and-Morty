<template>
  <router-link :to="`/episode/${this.id}`" class="bg-white relative rounded shadow hover:shadow-md my-2 w-64 flex-none">
      <img :src="img.s1" alt="alt" class="w-full h-80 sm:48 object-cover">

      <div class="font-bold text-lg m-2">
          Auto Erotic Assimilation
      </div>

      <div class="badge">
          <span class="">S01E01</span>
      </div>

  </router-link>
</template>

<script>
export default {
    data(){return{
        img: {
            s1: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rick_and_Morty_season_1.png/250px-Rick_and_Morty_season_1.png",
            s2: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Rick_and_Morty_season_2.png/250px-Rick_and_Morty_season_2.png",
            s3: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png",
            s4: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Rick_and_Morty_season_4.jpg/250px-Rick_and_Morty_season_4.jpg",
            s5: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Rick_and_Morty_season_5.jpg/220px-Rick_and_Morty_season_5.jpg"
        }
    }},
    props: {
        id: String
    },
}
</script>

<style>

</style>
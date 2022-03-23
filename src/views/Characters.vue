<template>
  <Primary-layouts title="Charatres">
      <!-- cards -->
      <div class="gap-2 grid lg:grid-cols-4 grid-cols-2">
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
          <CharactersCard id="1"/>
      </div>

      <div class="flex justify-center my-5">
        <button class="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-secondary-100 text-secondary-200 hover:shadow-inner">Load more</button>
      </div>
  </Primary-layouts>
</template>

<script>
import PrimaryLayouts from '@/components/Layouts/PrimaryLayouts'
import CharactersCard from '@/components/cards/CharactersCard'


export default {
    components: {PrimaryLayouts, CharactersCard}
}
</script>

<style>

</style>
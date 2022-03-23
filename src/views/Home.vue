<template>
  <PrimaryLayouts title="The Rick and Morty" class="home">
    <!-- random character -->
    <div>
      <h4 class=" mt-12 pb-2 border-b border-gray-200 flex justify-between">
        <span class="font-bold">Random Characters</span>
        <router-link to="/characters" class="hover:bg-gray-200 px-2 rounded-lg flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </router-link>
      </h4>
      <!-- cards -->
      <div class="overflow-x-scroll mt-4 flex space-x-4">
        <CharactersCard id="1"/>
        <CharactersCard id="2"/>
        <CharactersCard id="3"/>
        <CharactersCard id="4"/>
        <CharactersCard id="5"/> 
      </div>
    </div>

    <!-- random episodes -->
    <div>
      <h4 class=" mt-12 pb-2 border-b border-gray-200 flex justify-between">
        <span class="font-bold">Random Episodes</span>
        <router-link to="/characters" class="hover:bg-gray-200 px-2 rounded-lg flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </router-link>
      </h4>
      <!-- cards -->
      <div class="overflow-x-scroll mt-4 flex space-x-4">
        <EpisodesCard id="1"/><EpisodesCard id="1"/>
        <EpisodesCard id="1"/><EpisodesCard id="1"/><EpisodesCard id="1"/>
      </div>
    </div>
  </PrimaryLayouts>
</template>

<script>
import PrimaryLayouts from '@/components/Layouts/PrimaryLayouts'
import CharactersCard from '@/components/cards/CharacterCard'
import EpisodesCard from '@/components/cards/EpisodesCard'

export default {
  name: 'Home',
  components: {
    PrimaryLayouts,
    CharactersCard,
    EpisodesCard
  }
}
</script>

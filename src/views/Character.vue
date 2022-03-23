<template >
<PrimaryLayouts title="Charecter" >
    <div class="flex justify-center">
        <div class=" md:w-3/4 lg:w-2/3 w-full">
                <div class="flex justify-center">
                    <!-- img -->
                    <div class="rounded-full overflow-hidden border-2">
                        <img src="https://rickandmortyapi.com/api/character/avatar/18.jpeg" alt="" class="w-52">
                    </div>
                </div>
                <div class="text-center font-bold text-xl mb-4 m-2">
                    <span>Antenna Morty</span>
                </div>
            <div class="mx-8 md:mx-20 lg:mx-48">

                <div class="m-2 grid grid-cols-2 gap-2">
                    <div class="flex items-center">
                        <span class="">Status: </span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <svg class="w-2 h-2" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19" cy="19" r="19" fill="rgba(110, 231, 183)"/>
                            </svg>
                            <span class="">Alive </span>
                        </div>
                    </div>
                </div>

                <div class="m-2 grid grid-cols-2 gap-2">
                    <div class="flex items-center ">
                        <span class="">Species: </span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="">Human </span>
                        </div>
                    </div>
                </div>

                <div class="m-2 grid grid-cols-2 gap-2">
                    <div class="flex items-center">
                        <span class="">Type: </span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="">Human with antennae </span>
                        </div>
                    </div>
                </div>

                <div class="m-2 grid grid-cols-2 gap-2">
                    <div class="flex items-center">
                        <span class="">Gender: </span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="">Male</span>
                        </div>
                    </div>
                </div>


                <div class="m-2 grid grid-cols-2 gap-2">
                    <div class="flex items-center">
                        <span class="">Location: </span>
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="">Citadel of Ricks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- episodes -->
    <div>
      <h4 class=" mt-12 pb-2 border-b border-gray-200 flex justify-between">
        <span class="font-bold">Episodes</span>
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
import EpisodesCard from '@/components/cards/EpisodesCard'

export default {
    data(){return{
        id: Number(this.$route.params.id)
    }},
    created(){
        if(isNaN(this.id)){this.$router.push('/404')}
    },
    components: {
        PrimaryLayouts,
        EpisodesCard
    }

}
</script>

<style>

</style>
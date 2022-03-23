<template>
    <PrimaryLayouts title="Episode">
        <div class="grid lg:grid-cols-4 grid-cols-1 bg-white p-2 rounded shadow-sm">
            <div class="lg:col-span-1 p-2 flex justify-center">
                <img class="w-64" :src="img.s1" :alt="img.s1">
            </div>
            <div class=" lg:col-span-3 p-2">
                <div class="font-bold text-xl mb-5">
                    <span>Vindicators 3: The Return of Worldender</span>
                </div>

                <div class="grid grid-cols-2 gap-2 my-2">
                    <span>Air Date:</span>
                    <span>August 13, 2017</span>
                </div>

                <div class="grid grid-cols-2 gap-2 my-2">
                    <span>Episode:</span>
                    <span>S03E04</span>
                </div>
            </div>
            
        </div>
        <div class="m-4">
            <router-link to="/episodes" 
            class="uppercase my-4 "
            >See all</router-link>
        </div>
    </PrimaryLayouts>
</template>

<script>
import PrimaryLayouts from '@/components/Layouts/PrimaryLayouts'

export default {
    data(){return{
        id: Number(this.$route.params.id),
        img: {
            s1: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rick_and_Morty_season_1.png/250px-Rick_and_Morty_season_1.png",
            s2: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Rick_and_Morty_season_2.png/250px-Rick_and_Morty_season_2.png",
            s3: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rick_and_Morty_season_3.png/250px-Rick_and_Morty_season_3.png",
            s4: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Rick_and_Morty_season_4.jpg/250px-Rick_and_Morty_season_4.jpg",
            s5: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Rick_and_Morty_season_5.jpg/220px-Rick_and_Morty_season_5.jpg"
        }
    }},
    created(){
        if(isNaN(this.id)){this.$router.push('/404')}
    },
    components: {
        PrimaryLayouts
    }
}
</script>

<style>

</style>
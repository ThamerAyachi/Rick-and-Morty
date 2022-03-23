<template>
    <Header/>
    <main class="mx-2 md:mx-20 my-5">
        <router-view/>
    </main>
    <Footer/>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components:{Header, Footer}
}
</script>

<style>

</style>
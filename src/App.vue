<template>
  <div class="w-full h-full relative">
    <Navigation />
      <Navbar />
      <router-view />
      <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
export default {
  name:'App',
    components: {
    Navbar,
    Footer,
    Navigation
  },
  data(){
    return{
    }
    
}
}
</script>


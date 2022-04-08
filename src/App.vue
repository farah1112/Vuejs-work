<template>
  <v-app>
    <v-main>
      <br>
      <home-view/>
      <router-view/>
      
    </v-main>
     <br>
  </v-app>
 
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView

    
    
  },

 
  
}
</script>

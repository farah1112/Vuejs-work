<template>
  <v-app>
    <v-main>
      <NavbarView />
      <br>
      <br>
      <router-view/>
      
    </v-main>
     <br>
     <FooterView/>
  </v-app>
 
</template>

<script>
import FooterView from "./components/FooterView.vue"
import NavbarView from "./components/NavbarView.vue"

export default {
  name: 'App',
  components: {
    NavbarView,
    FooterView
    
    
  },

 
  
}
</script>

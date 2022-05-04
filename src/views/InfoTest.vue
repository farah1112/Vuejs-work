<template>
<navbar-view/>
    <v-container>
        <h5 class="text-h4" style="color:#66BB6A"><v-icon color="black">mdi-marker</v-icon>You want  More Details?!</h5>
        <p>here we are:</p>
         <v-container>
    <h5>Mejri Med Ali</h5>
    <p>Tunis</p>
           <v-chip
      class="ma-2"
      color="success"
      variant="outlined"
    >
      <v-icon start icon="mdi-account-check"></v-icon>
      Applied 1y ago
    </v-chip>
    <br><br>
    <v-row>
    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
        rounded
        flat 
             color="#B9F6CA"
          v-bind="props"
            class="ma-2"
             style="padding-left:50px;padding-right:50px"
        >
          Rate as
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn
      variant="outlined"
      color="primary"
      rounded flat
      prepend-icon="mdi-email"
        class="ma-2"
    >
      Message via email
    </v-btn>
    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="#B9F6CA"
          v-bind="props"
          rounded flat 
            class="ma-2"
                style="padding-left:50px;padding-right:50px"
        >
         More..
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items1"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-row>
        </v-container>
        <v-divider></v-divider>
      <h5 style="color:#0277BD"><v-icon color="#EEFF41">mdi-folder-account-outline</v-icon>Insights from profile</h5>
      <v-row>
       <v-col cols="12" md="4">
         <p>Expérience:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
         <v-col cols="12" md="4">
            <p>Formation academique:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
         <v-col cols="12" md="4">
             <p>Formation academique:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
       <v-row>
         <v-col cols="12" md="4"></v-col>
         <v-col cols="12" md="8">
           <router-link to="ProfilCandidat" style="text-decoration:none"><v-btn
      rounded="pill"
      color="#B9F6CA"
      style="padding-left:100px;padding-right:100px"
    >
      See full Profil
    </v-btn>
    </router-link>
    </v-col>
    </v-row>
      </v-row>
            <v-row>
        <v-col cols="12" md="10">
          <p>Résumé</p>
        </v-col>
        <v-col cols="12" md="2">
   <v-btn flat prepend-icon="mdi-download" variant="outlined" rounded >
      Download
    </v-btn>
        </v-col>
      </v-row>
          <h5 style="color:#0277BD"><v-icon color="#EEFF41">mdi-check-underline-circle-outline</v-icon>Partie:Question/Réponse</h5>
       <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon color="#EEFF41">mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>yes</p>
                </v-col>
              </v-row>
                 <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon color="#EEFF41">mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>NO</p>
                </v-col>
              </v-row>
                 <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon color="#EEFF41">mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>yes</p>
                </v-col>
              </v-row>
    </v-container>
<footer-view/>
</template>


<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
    data(){
  return{
            items: [
        { title: 'Good Fit' },
        { title: 'Maybe' },
        { title: 'Not a Fit' },
      ],
       items1: [
        { title: 'see  your  profil ' },
        { title: 'MejriHamouda8@gmail.com' },
        { title: '25468975' },
      ],
  }
    },
  components: { NavbarView, FooterView },
    
}
</script>


<style>
</style>
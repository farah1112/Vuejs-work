<template>
        <navbar-view />
<br>
    <v-divider></v-divider>
    <div class="text-center" style="padding:4rem">
        <h1>POSTULER VOTRE CV</h1>
        <p>Ajouter votre CV vous permet de postuler très rapidement <br> à de nombreuses opportunités depuis n'importe quel appareil.</p>
    </div>
    <div>
        <v-container class="text-center">
            <v-row>
                <v-col cols="12" md="4" >
                     <img src=" https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png " style="width:150px; height:150px;  ">

                </v-col>
                <div style="margin-top:20px">
                  <h1>Télécharger votre CV</h1> 
                  
                  <p>Téléchargez votre CV et postulez en un seul clic!</p>
                  </div>
                  <v-row justify="center">
                 <v-btn
                    rounded color="blue" style="margin-top:50px" 
                      v-bind="props"
                      to="/TelechargerView"
                         >
                         Télecharger !
                              </v-btn>
          </v-row>
            </v-row>
     <v-divider></v-divider>
        </v-container>
         <v-container class="text-center">
            <v-row>
                <v-col cols="12" md="4" >
                     <img src="https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png" style="width:150px; height:150px; ">

                </v-col>
                <div style="margin-top:20px" >
                  <h1>Créer votre CV</h1> 
                  
                  <p>création rapide de CV pour en poster un.!</p>
                  </div>
                 <v-btn
        rounded color="blue" style="margin-top:50px ;margin-left:180px" 
         to="/CreerView">
         Créer un !
        </v-btn>           
            </v-row>
        </v-container>
    </div>
    <v-divider></v-divider>
 <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView'
export default {
        data () {
      return {
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    components:{NavbarView,FooterView}
}
</script>
<style>


</style>
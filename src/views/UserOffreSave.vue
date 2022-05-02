<template>
<navbar-view/>
<v-divider></v-divider>
<v-container>
<v-icon size="40" color="green">mdi-bookmark-multiple-outline</v-icon>
<h5 class="font-weight-medium">Enregistrement des Offres Préférées Par Utilisateur</h5> 
<v-divider></v-divider> 
<br>
<v-row>
        <v-banner
    lines="Three"
    color="deep-purple-accent-4"
  >
    <v-banner-text>
        <v-row>
            <v-col cols="12" md="10">
        <router-link to="DetailsPost" style="text-decoration:none"><h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5></router-link> 
        </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="2"></v-col>
         <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      </v-row>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français ...</p>
 </v-banner-text>
 <v-row>
     <v-col cols="12" md="8">
     </v-col>
         <v-col cols="12" md="4">
                    <v-tooltip
          v-model="show"
          top
        >
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              v-bind="props"
            >
              <v-icon color="grey lighten-1">
                mdi-delete-empty
              </v-icon>
            </v-btn>
          </template>
          <span>Supprimer</span>
        </v-tooltip>
        </v-col>
 </v-row>
  </v-banner>
</v-row>
<br><br>
      <div class="text-center">
    <v-btn
      color="green"
      rounded
      flat 
      @click="snackbar = true"
      prepend-icon="mdi-delete-empty"
    >
      Supprimer toute la liste
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      vertical
    >
      <p>Vous etes sur de Supprimer ce contenu?</p>

      <template v-slot:actions>
        <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Annuler
        </v-btn>
           <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
        Supprimer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</v-container> 
<v-container align="center">
<img src="https://us.123rf.com/450wm/gmast3r/gmast3r1705/gmast3r170501109/79018658-dessin-anim%C3%A9-visage-triste-personnes-n%C3%A9gatives-emotion-ic%C3%B4ne-vector-illustration.jpg?ver=6" style="width:200px;height:200px">
<h5 class="text-h4 font-italic" style="color:blue">Encore aucune offre dans votre liste</h5>
<p >Pour sauvegarder une offre, appuyez sur le bouton <br>"Sauvegarder cette offre" disponible dans la page <br>de description de l'offre.</p>
</v-container>
    <v-divider></v-divider>
    <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
    data: () => ({
          snackbar: false,
      messages: [
        {
          avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          name: 'Farah weslati',
          title: 'Vue js developer',
        },
      ],
      parag: 'je suis un developer vue js j ai 5 ans d expéerience .J ai un diplome en informatique.Je souhaite me spécialiser dans le domaine de Développement Web .Je suis assidue ,ambitieuse et Prête a mettre mes compétences et ma passion en pratique ',
      parag1:'Contact: Télephone:52214491 ',     
      parag2:'Email:farahweslati@gmail.com ',             
      parag3:'linkedin :https://www.linkedin.com/in/farah-weslati-52a5571bb/' 
     
    }),
}
</script>
<style>

</style>
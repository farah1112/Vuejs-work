HamouDa Méjri
<template>
<navbar-view/>
  <v-divider></v-divider>
  <v-container>
    <v-icon size="40" color="#FFE082">mdi-bookmark-multiple-outline</v-icon>
    <h5 class="font-weight-medium font-italic" style=" color:#546E7A">
      Enregistrement des Offres deja postulée Par Utilisateur
    </h5>
  </v-container>
  <v-divider></v-divider>
  <v-container>
                <v-row>
          <v-col cols="12" md="12">
 <h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5>
      <v-col cols="12">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français 
Vous êtes aussi à l’aise dans le Frontend que le Backend?<br> Vous aimez travailler avec les plus récentes technologies telles que ASP.NET Core, React.js, Typescript,...</p>
   <v-chip
      class="ma-2"
      color="#A1887F"
      variant="outlined"
    >
      <v-icon start icon="mdi-progress-clock"></v-icon>
      il y'a 14heures
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
      variant="outlined"
    >
      postuler facilement
      <v-icon end icon="mdi-face"></v-icon>
    </v-chip>
     <v-chip
      class="ma-2"
      color="green"
      variant="outlined"
    >
      postuler Déja
      <v-icon end icon="mdi-checkbox-marked-circle-outline"></v-icon>
    </v-chip>
     <v-chip
      class="ma-2"
      color="red"
      variant="outlined"
    >
      supprimer la candidature à cette poste
      <v-icon end icon="mdi-delete-empty"></v-icon>
    </v-chip>
</v-col>
  </v-col>
  </v-row>
  </v-container>
  <v-divider></v-divider>
  <v-container align="center">
       <div class="text-center">
    <v-btn
     class="ma-2"
      color="grey"
      rounded 
      @click="snackbar = true"
       prepend-icon="mdi-delete-empty"
    >
     supprimer la candidature pour toute les  postes
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      multi-line
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Supprimer
        </v-btn>
         <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Annuler
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  </v-container>
  <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView,FooterView },
   data: () => ({
      snackbar: false,
      text: `êtes-vous sûr de vouloir supprimer l'application dans cette offre?`,
    }),
    
}
</script>NavbarView
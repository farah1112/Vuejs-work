<template>
<navbar-view/>
  <div>
    <v-row>
      <v-col cols="12" md="4">    
<v-col>
   <p class="font-weight-bold"><v-icon color="green">mdi-briefcase-outline</v-icon> Emploi recherché</p>
           <v-text-field
            label="intitulé du poste,mots-clés"
            variant="outlined"
            style="width:350px"
          ></v-text-field>

   <p class="font-weight-bold"><v-icon color="green">mdi-map-marker</v-icon>Localité</p>
           <v-text-field
            label=""
            append-inner-icon="mdi-map-search"
            variant="outlined"
            style="width:350px"
          ></v-text-field>
        </v-col>
    <v-layout>
        <v-col>
        <p><v-icon color="green">mdi-code-tags</v-icon> Tri par</p>
            <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
          <p><v-icon color="green">mdi-clipboard-account-outline</v-icon>Poste</p>
         <router-link to="#" style="text-decoration :none"> <p>comptable</p></router-link>
          <router-link to="#" style="text-decoration :none"> <p>Assistance de Direction</p></router-link>
          <v-spacer></v-spacer>
             <p><v-icon color="green">mdi-map-marker</v-icon>Localité</p>
              <router-link to="#" style="text-decoration :none"> <p>Tunis</p></router-link>
          <p><v-icon color="green">mdi-file-document-edit-outline</v-icon>Type de contrat</p>
            <router-link to="#" style="text-decoration :none"> <p>Travail(5201)</p></router-link>
          <router-link to="#" style="text-decoration :none"> <p>Stage(444)</p></router-link>
          <router-link to="#" style="text-decoration :none"> <p>Freelancer(521)</p></router-link>
            <p><v-icon color="green">mdi-file-document-edit-outline</v-icon>Temps de travail</p>
            <router-link to="#" style="text-decoration :none"> <p>Temps-plein(3201)</p></router-link>
          <router-link to="#" style="text-decoration :none"> <p>Temps-partiel(444)</p></router-link>
            <p><v-icon color="green">mdi-city-variant-outline</v-icon>Entreprise</p>
             <router-link to="#" style="text-decoration :none"> <p>AMZ software</p></router-link>
              <p><v-icon color="green">mdi-skip-next-circle-outline</v-icon>Dernières Recherches</p>
             <router-link to="#" style="text-decoration :none"> <p>Assistante de Direction (Tunis)</p></router-link>
               <v-alert
      v-model="alert"
      border="start"
      variant="contained-text"
      closable
      close-label="Close Alert"
      color="deep-purple accent-4"
    >
    Êtes-vous sûr(e)?
    <br><br>
        <v-btn variant="outlined">ok</v-btn>
        <br><br>
            <v-btn variant="outlined">Annuler</v-btn>
    </v-alert>

    <div
      v-if="!alert"
      class="text-center"
    >
      <v-btn
      rounded
      flat
      prepend-icon="mdi-minus-circle"
        @click="alert = true"
      >
        Effacer les Recherches
      </v-btn>
    </div>
        </v-col>
      <v-main style="height: 750px"></v-main>
    </v-layout>
    </v-col>
    <v-col cols="12" md="8">
        <br><br>
        <v-row>
            <v-col cols="12" md="12">
      <h5 class="font-weight-bold">Offres d'emploi en Tunisie</h5>
      </v-col>
      <v-col cols="12" md="8">
           <v-btn
           flat
      rounded="pill"
      color="#DCE775"
    >
     Tous
    </v-btn>
        <v-btn
        flat
      rounded="pill"
      color="#7CB342"
    >
   Nouveaux
    </v-btn>
      </v-col>
      <v-col cols="12" md="4">
          <v-btn
          rounded 
          flat 
          prepend-icon="mdi-alert-decagram-outline"
      @click="snackbar = true"
    >
      Créer une alerte
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
      </v-col>
      </v-row>
      <v-divider></v-divider>
          <v-col cols="12" md="12">
          <v-row>
          <v-col cols="12" md="8">
 <router-link to="DetailsPost" style="text-decoration:none" ><h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5></router-link>
          </v-col>
            <v-col cols="12" md="2">
       <v-tooltip
          v-model="show1"
          top
        >
          <template v-slot:activator="{ props }">
 <v-btn flat rounded   v-bind="props"><v-icon size="30">mdi-heart-outline</v-icon></v-btn>
          </template>
            <span>Ajout Favoris!</span>
        </v-tooltip>
  </v-col>
      <v-col cols="12">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français 
Vous êtes aussi à l’aise dans le Frontend que le Backend?<br> Vous aimez travailler avec les plus récentes technologies telles que ASP.NET Core, React.js, Typescript,...</p>
   <v-chip
      class="ma-2"
      color="success"
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
      postuler Maitenant
      <v-icon end icon="mdi-face"></v-icon>
    </v-chip>
</v-col>
  </v-row>
  </v-col>
  <v-divider></v-divider>
  <v-container align="center">
        <p><v-icon color="red">mdi-alert-decagram-outline</v-icon> Recevez par email les dernièresOffres d'emploi en Tunisie</p>
        <p>Vous pouvez annuler vos alertes email à tout moment.</p>
         <v-btn
          rounded 
          flat 
          color="#B9F6CA"
          prepend-icon="mdi-alert-decagram-outline"
      @click="snackbar2 = true"
    >
      Créer une alerte
    </v-btn>
    <v-snackbar
      v-model="snackbar2"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar2 = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
    <v-row>
        <v-col cols="12" md="12">
            <p class="text-h5">Dernières Recherches</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="12">
                  <v-col cols="12" md="12">
 <h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5>
      <v-col cols="12">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
</v-col>
  </v-col>
  </v-col>
  <v-divider></v-divider>
        <v-col cols="12" md="12">
                  <v-col cols="12" md="12">
 <h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5>
      <v-col cols="12">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
</v-col>
  </v-col>
  </v-col>
    </v-row>
    </v-col>
    </v-row>
  </div>  
        <a class="gotopbtn" href="#"> <v-icon>mdi-arrow-up</v-icon> </a> 
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
      snackbar2: false,
      text: `Your alert is  created`,
         select: null,
              alert: false,
      items: [
        'Pertinence',
        'Date',
        'Salaire',
      ],
    }),
}
</script>
<style>
.gotopbtn{
  position: fixed;
  width: 50px;
  height: 50px;
  background:#8C9EFF;
  bottom: 40px;
  right: 50px;
  line-height: 50px;
  color: white;
}
</style>
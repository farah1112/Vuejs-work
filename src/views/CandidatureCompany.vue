<template>
<navbar-view/>
<v-divider></v-divider>
  <div>
    <v-row>
         <v-col
        cols="12"
        md="4"
      >
<v-col>
    <p class="font-weight-bold">
      Vos offres d'emploi
    </p>
        </v-col>
    <v-layout>
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav
        >
          <v-btn  flat rounded prepend-icon=" mdi-publish" title="  Publiez vos offres" value="  Publiez vos offres" to="PosteCompany" >Publiez vos offres</v-btn>
          <br><br>
          <v-btn   flat rounded prepend-icon="mdi-content-paste" title=" gérer vos offres" value=" gérer vos offres" to="GerePoste">gérer vos offres</v-btn>
          <br><br>
          <v-btn  flat rounded prepend-icon="mdi-forum" title="Statistiques" value="Statistiques" to="StatistCompany">Statistiques</v-btn>
          <br><br>
          <v-btn flat rounded prepend-icon="mdi-card-text-outline" title="Candidatures" value=" Candidatures" to="CandidatureCompany">Candidatures</v-btn>
            <br><br>
                  <v-col>
           <p class="font-weight-bold">
              Accès à la CVthèque
                </p>
                 </v-col>
            <v-btn  flat rounded prepend-icon="mdi-magnify" title=" Rechercher des CV's" value="Rechercher des CV's" to="RechercheCv">Rechercher des CV's</v-btn>
            <br><br>
          <v-btn  flat rounded prepend-icon=" mdi-briefcase-download-outline" title="CV's sauvgardés" value="CV's sauvgardés" to="SaveCv">CV's sauvgardés</v-btn>
          <br><br>
           <v-btn  flat rounded prepend-icon=" mdi-bookmark-multiple-outline" title="Offres sauvgardés" value="Offres sauvgardés" to="OffreSave">Offres sauvgardés</v-btn>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 750px"></v-main>
    </v-layout>
         </v-col>
      <v-col cols="12" md="8">
             <br>
             <v-row>
                 <v-col cols="12" md="12">
             <h5 class="font-weight-bold">Candidatures</h5>
             </v-col>
             </v-row>
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
         <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français ...</p>
 </v-banner-text>
 <v-row>
     <v-col cols="12" md="12">
     </v-col>
 </v-row>
  </v-banner>   
             </v-row>
             <br>
             <p><v-icon color="green">mdi-filter</v-icon>Rechercher Selon:</p>
             <v-row>
    <v-col cols="12" md="6">
          <v-text-field
            label="your profession or Name"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
          ></v-text-field>
    </v-col>
      <v-col cols="12" md="6">

          <v-text-field
            label="Your Locality"
            prepend-inner-icon="mdi-map-marker-check"
            variant="outlined"
          ></v-text-field>
    </v-col>
             </v-row>
             <v-row>
                 <v-col cols="12" md="12">
                     <v-tabs
                  v-model="tab"
                   >
      <v-tab value="one">Applicants[1]</v-tab>
    </v-tabs>
    <v-card-text>
   <v-card
  >
    <v-card-header>
      <div>
        <div class="text-overline mb-1">
    <v-avatar>
      <v-img
        src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/277557695_1903909926471236_8967778533381054765_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2SSdKduan0sAX8rZd4m&tn=1clkvO9iF4USnNVX&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_1xDS06EjLLsotLkgXmPedIey9Ob-hqm0HtzzYCoYODQ&oe=62764667"
        alt="Med Ali Mejri"
      ></v-img>
    </v-avatar>
        </div>
        <router-link to="ProfilCandidat" style="text-decoration:none"><div class="text-h6 mb-1">
         Med Ali Mejri
        </div></router-link>
        <div class="text-caption">Tunis</div>
        <div class="text-caption">stage d'initiation CNTE .2020</div>
        <div class="text-caption">Lycée Ben arous:Baccalauréat en sciences de l'informatique:2016 – 2019</div>
            <v-chip
      class="ma-2"
      color="success"
      variant="outlined"
    >
      <v-icon start icon="mdi-account-check"></v-icon>
      Applied 1y ago
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
      variant="outlined"
    >
       1/3 qualified
      <v-icon end icon="mdi-shield-check-outline"></v-icon>
    </v-chip>
      </div>
    </v-card-header>
        <router-link to="InfoTest" style="text-decoration:none"><v-btn variant="outlined" rounded flat 
      prepend-icon="mdi-marker">
      More Details
      </v-btn>
      </router-link>
      <br><br>
  </v-card>
    </v-card-text>
                 </v-col>
             </v-row>
             <v-row>
               <v-col cols="12" md="6"></v-col>
                <v-col cols="12" md="6">
                 <v-btn  prepend-icon="mdi-file-download-outline" rounded flat color="blue" to="PosteCompany">Publier une nouvelle Poste</v-btn>
             </v-col>
             </v-row>
              
         </v-col>
         </v-row>
  </div>   
    <v-divider></v-divider>
    <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
   data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        dialogm1: '',
        dialog1: false,
         dialogm2: '',
        dialog2: false,
         dialogm3: '',
        dialog3: false,
         dialogm4: '',
        dialog4: false,
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
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>
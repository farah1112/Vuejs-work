<template>
<navbar-view/>
<br>
<br>
    <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="10">
        <h5 class="text-h5 font-weight-bold">Assistant / Assistante technique (RH, Marketing, Ventes)</h5>
        </v-col>
        <v-row>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-map-marker</v-icon> Tunis</p>
            </v-col>
             <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-file-document-outline</v-icon> Stage</p>
            </v-col>
             <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-clock-outline</v-icon> Temps-plein</p>
            </v-col>
    <v-chip
       style="padding-left:80px ; padding-right:80px"
      class="ma-2"
       color="red"
      text-color="white"
      variant="outlined"
    >
      <v-icon start icon="mdi-account-clock-outline"></v-icon>
      il y a 2 jours
    </v-chip>
        </v-row>
    </v-row>
    <v-divider></v-divider>
    <p class=" font-italic">Chez PISQUARE nous avons pour ambition de devenir leader dans le conseil autour du cloud et du devops.
         Notre mission est de définir et de construire des infrastructures cloud hautement disponibles et scalables. 
         Nous intervenons en tant qu’experts pour conseiller, cadrer et mettre en place des infrastructures, afin que nos clients puissent garder le contrôle et tirer pleinement parti du cloud. Ce qui caractérise PISQUARE ? Des projets motivants, un excellent esprit d’équipe, un mindset d’amélioration continue et de fortes ambitions. Description du poste 
         : En tant qu'Assistant(e) tu seras un véritable bras droit du CEO, soyez prêt(e) à avoir des missions à forte responsabilité, sur des sujets très variés. Ton rôle sera d’assister le CEO dans son quotidien entre : Recrutement et RH Marketing Ventes Tes tâches seront partagées entre : Sourcer et trouver de nouveaux talents pour rejoindre l’équipe de l’étape d’identification des profils jusqu’au recrutement. 
         Gestion SEO du site et du blog, en rédigeant des articles techniques Community management, animation des réseaux sociaux et création de visuels Gestion humaine de l’équipe technique et participez à leurs gestion administrative Assister le CEO dans la phase de prospection et de ventes Profil recherché :
          Diplômé bac +4/5, en école de commerce ou équivalent universitaire. Tu as déjà une expérience en startup ou cabinet de conseil IT Bonne maîtrise de Gsuite, 
          Excel, Powerpoint À l’aise en français et anglais, écrit et oral</p>
    <v-row>
     <v-col cols="12" md="4">
     </v-col>
     <v-col cols="12" md="8">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
    <v-btn
    style="padding-left:100px ; padding-right:100px"
     prepend-icon="mdi-file-import"
    rounded
    flat
      variant="outlined"
      color="blue"
      v-bind="props"
    >
      postuler
    </v-btn>
           </template>
      <v-card>
        <v-toolbar
          dark
          color="#69F0AE"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>close</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       <v-container fluid align="center">
         <v-icon size="40">
             mdi-account-arrow-right-outline
         </v-icon>
         <h5 align="center">
            Postuler -vous!
         </h5>
        </v-container>
   <v-container fluid align="center">
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="green"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-row>
               <v-col
          cols="12"
          sm="12"
        >
         <v-icon>mdi-account-edit</v-icon>
          <v-text-field
            color="success"
            label="Entrer la première question:"
            placeholder="Placeholder"
            variant="outlined"
    
          ></v-text-field>
        </v-col>
               <v-col
          cols="12"
          sm="12"
        >
      <v-icon>mdi-account-question-outline</v-icon>
           <v-textarea
        auto-grow
        filled
        color="deep-purple"
        label="Repondez-vous"
        rows="1"
      ></v-textarea>
        </v-col>
        </v-row>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-container>
          <v-row>
            <v-col
               cols="12"
          sm="6">
          <v-icon>mdi-account-edit</v-icon>
          <v-text-field
            color="success"
            label="Nom"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
           <v-col
               cols="12"
          sm="6">
          <v-icon>mdi-account-edit</v-icon>
          <v-text-field
            color="success"
            label="Prénom"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col
               cols="12"
          sm="12">
          <v-icon>mdi-email</v-icon>
          <v-text-field
            color="success"
            label="Email"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
</v-row>
       <v-row>
          <v-col
               cols="12"
          sm="12">
          <v-icon>mdi-emoticon-outline</v-icon>
          <v-file-input
    accept="image/*"
    label="Put your CV here"
  ></v-file-input>
        </v-col>
</v-row>
        </v-container>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        v-if="step > 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="step < 2"
        color="black"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
       <v-btn
        v-if="step >1"
        color="black"
        depressed
        style="background-color:green"
      >
        Enregistrer
      </v-btn>
    </v-card-actions>
  </v-card>
   </v-container>
      </v-card>
    </v-dialog>
    <br><br>
       <v-btn
    style="padding-left:90px ; padding-right:90px"
     prepend-icon="mdi-file-download-outline"
    rounded
    flat
      variant="outlined"
      color="blue"
    >
      Sauvgarder </v-btn>
      <br><br>
        <v-btn
    style="padding-left:100px ; padding-right:100px"
     prepend-icon="mdi-share-outline"
    rounded
    flat
      variant="outlined"
      color="blue"
    >
      Partager
    </v-btn>
     </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-container>
        <v-row>
            <v-col cols="12" md="2"></v-col>
            <v-col cols="12" md="8">
              <p class="text-h6 font-italic text-decoration-underline">Les offres Similaires</p>
            </v-col>
        </v-row>
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-row>
          <v-col cols="12" md="10">
  <router-link to="DetailsPost"> <h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5></router-link>
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
  </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      </v-col>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français 
Vous êtes aussi à l’aise dans le Frontend que le Backend?<br> Vous aimez travailler avec les plus récentes technologies telles que ASP.NET Core, React.js, Typescript,...</p>
<v-row>
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
      postuler facilement
      <v-icon end icon="mdi-face"></v-icon>
    </v-chip>
</v-row>
    </v-row>
        </v-col>
      </v-row>
      <br>
      <v-divider></v-divider>
    </v-container>
<footer-view/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
     data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
           step: 1,
      }
    },
       computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Les Questions'
          default: return 'Postuler Maintenant'
        }
      },
    },
    
}
</script>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>
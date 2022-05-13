<template>
<navbar-view/>
<br>
    <v-container fluid align="center">
        <p class="text-h6 font-italic" style="color:red">Vous acceptez cet offre comme administrateur?</p>
<p><img src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08.gif" style="width:85px;height:85px">  <v-btn
    transparent flat rounded 
      @click="snackbar = true"
    >
     Accepter Cette Offre
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
         Accepter
        </v-btn>
          <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Annuler
        </v-btn>
      </template>
    </v-snackbar></p>

<p ><img src="https://c.tenor.com/hmbt9N7tR0gAAAAj/incorrect-nah.gif" style="width:70px;height:70px"> <v-btn
    transparent flat rounded 
      @click="snackbar1 = true"
    >
    Réfuser Cette Offre
    </v-btn>

    <v-snackbar
      v-model="snackbar1"
      multi-line
    >
      {{ text1 }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar1 = false"
        >
          Accepter
        </v-btn>
            <v-btn
          color="red"
          variant="text"
          @click="snackbar1 = false"
        >
         Annuler
        </v-btn>
      </template>
    </v-snackbar></p>
</v-container>
<v-container  fluid align="center">
    <v-row>
        <v-col cols="12" md="12">
        <h5 class="text-h5 font-weight-bold">Assistant / Assistante technique (RH, Marketing, Ventes)</h5>
        </v-col>
        <v-row>
            <v-col cols="12" md="3"></v-col>
            <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-map-marker</v-icon> Tunis</p>
            </v-col>
             <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-file-document-outline</v-icon> Stage</p>
            </v-col>
             <v-col cols="12" md="2">
                  <p><v-icon color="orange">mdi-clock-outline</v-icon> Temps-plein</p>
            </v-col>
        </v-row>
    </v-row>
    <v-container>
    <v-chip
    style="padding-left:80px; padding-right:80px"
      class="ma-2"
       color="#AED581"
      text-color="white"
      variant="outlined"
    >
      <v-icon start icon="mdi-account-clock-outline"></v-icon>
      il y a 2 jours
    </v-chip>
    </v-container>
    <v-divider></v-divider>
    <p class=" font-italic">Chez PISQUARE nous avons pour ambition de devenir leader dans le conseil autour du cloud et du devops.
         Notre mission est de définir et de construire des infrastructures cloud hautement disponibles et scalables. 
         Nous intervenons en tant qu’experts pour conseiller, cadrer et mettre en place des infrastructures, afin que nos clients puissent garder le contrôle et tirer pleinement parti du cloud. Ce qui caractérise PISQUARE ? Des projets motivants, un excellent esprit d’équipe, un mindset d’amélioration continue et de fortes ambitions. Description du poste 
         : En tant qu'Assistant(e) tu seras un véritable bras droit du CEO, soyez prêt(e) à avoir des missions à forte responsabilité, sur des sujets très variés. Ton rôle sera d’assister le CEO dans son quotidien entre : Recrutement et RH Marketing Ventes Tes tâches seront partagées entre : Sourcer et trouver de nouveaux talents pour rejoindre l’équipe de l’étape d’identification des profils jusqu’au recrutement. 
         Gestion SEO du site et du blog, en rédigeant des articles techniques Community management, animation des réseaux sociaux et création de visuels Gestion humaine de l’équipe technique et participez à leurs gestion administrative Assister le CEO dans la phase de prospection et de ventes Profil recherché :
          Diplômé bac +4/5, en école de commerce ou équivalent universitaire. Tu as déjà une expérience en startup ou cabinet de conseil IT Bonne maîtrise de Gsuite, 
          Excel, Powerpoint À l’aise en français et anglais, écrit et oral</p>
    </v-container>   
<footer-view/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
 data: () => ({
      snackbar: false,
      snackbar1: false,
      text: `Vous Voulez Vraiment accepter cette offre?`,
      text1: `Vous Voulez Vraiment Réfuser cette offre?`,

    }),
    
}
</script>

<style>
</style>
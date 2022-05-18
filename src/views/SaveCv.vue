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
<v-icon size="40" color="green">mdi-file-document</v-icon>
<h5 class="font-weight-medium">Enregistrement des CV's</h5> 
<v-divider></v-divider>


<v-row>
  <v-col cols="12" md="10">
  <v-expansion-panels variant="popout" class="pa-4">
    <v-expansion-panel
      v-for="(message, i) in messages"
      :key="i"
      hide-actions
    >
      <v-expansion-panel-title>
        <v-row
          align="center"
          class="spacer"
          no-gutters
        >
          <v-col
            cols="4"
            sm="2"
            md="1"
          >
            <v-avatar
              size="40px"
            >
              <v-img
                v-if="message.avatar"
                alt="Avatar"
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              ></v-img>
              <v-icon
                v-else
                :color="message.color"
                :icon="message.icon"
              ></v-icon>
            </v-avatar>
          </v-col>

          <v-col
            class="hidden-xs-only text-left ml-2"
            sm="5"
            md="3"
          >
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="text-grey"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-col>

          <v-col
            class="text-no-wrap text-left"
            cols="5"
            sm="3"
          >
            <v-chip
              v-if="message.new"
              :color="`${message.color}-lighten-1`"
              class="ml-0 mr-2 text-black"
              label
              small
            >
              {{ message.new }} new
            </v-chip>
            <strong v-html="message.title"></strong>
          </v-col>

          <v-col
            v-if="message.excerpt"
            class="text-grey text-truncate hidden-sm-and-down"
          >
            &mdash;
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-card-text class="text-body-1 font-italic" v-text="parag"></v-card-text>
         <v-card-text  class="font-weight-bold" v-text="parag1"></v-card-text>
          <v-card-text   class="font-weight-bold"  v-text="parag2"></v-card-text>
           <v-card-text   class="font-weight-bold" v-text="parag3"></v-card-text>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  
  </v-col>
</v-row>
         <v-row>
           <v-col  cols="12" md="4"></v-col>
             <v-col
          cols="12"
          md="6"
        >
       <v-btn flat rounded color="#B2FF59" style="padding-left:100px;padding-right:100px"    @click="snackbar = true"><v-icon>mdi-delete-circle-outline</v-icon> tous les CV</v-btn>
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
  components: { NavbarView, FooterView },
    data: () => ({
       snackbar: false,
      text: `would you like to delete all CV's?`,
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
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
          <v-btn   flat rounded prepend-icon="mdi-content-paste" title=" gérer vos offres" value=" gérer vos offres">gérer vos offres</v-btn>
          <br><br>
          <v-btn  flat rounded prepend-icon="mdi-forum" title="Statistiques" value="Statistiques">Statistiques</v-btn>
          <br><br>
          <v-btn flat rounded prepend-icon="mdi-card-text-outline" title="Candidatures" value=" Candidatures">Candidatures</v-btn>
            <br><br>
                  <v-col>
           <p class="font-weight-bold">
              Accès à la CVthèque
                </p>
                 </v-col>
            <v-btn  flat rounded prepend-icon="mdi-magnify" title=" Rechercher des CV's" value="Rechercher des CV's">Rechercher des CV's</v-btn>
            <br><br>
          <v-btn  flat rounded prepend-icon=" mdi-briefcase-download-outline" title="CV's sauvgardés" value="CV's sauvgardés">CV's sauvgardés</v-btn>
          <br><br>
             <v-col>
           <p class="font-weight-bold">
             En savoir Plus!
              </p>
              </v-col>     
             <v-btn flat rounded prepend-icon="mdi-email-open-outline" title="Nous contacter" value="Nous contacter" to="/ContactCompany">
             Nous contacter!
            </v-btn>
            <br>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 750px"></v-main>
    </v-layout>
         </v-col>
         <v-col cols="12" md="8">
<v-icon size="20">mdi-mailbox-open-up-outline</v-icon>
<h5 class="font-weight-medium">Nous contacter</h5> 
         <v-row>
             <v-col
          cols="12"
          md="6"
        >
        <p>Nom</p>
          <v-text-field
            label="Nom"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account-question-outline"
          ></v-text-field>
        </v-col>
             <v-col
          cols="12"
          md="6"
        >
        <p>Prénom</p>
          <v-text-field
            label="Prénom"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account-question-outline"
          ></v-text-field>
        </v-col>
         </v-row>
         <v-row>
             <v-col
          cols="12"
          md="6"
        >
        <p>Email</p>
          <v-text-field
            label="Email"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-email-variant"
          ></v-text-field>
        </v-col>
             <v-col
          cols="12"
          md="6"
        >
        <p>Téléphone</p>
          <v-text-field
            label="Téléphone"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-phone-settings"
          ></v-text-field>
        </v-col>
         </v-row>
          <v-row>
             <v-col
          cols="12"
          md="12"
        >
        <p>Sujet</p>
          <v-text-field
            label="Sujet"
            prepend-inner-icon="mdi-file-document-edit-outline"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
            <v-col
          cols="12"
          md="12"
        >
        <p>Votre Message!</p>
             <v-textarea
      prepend-inner-icon="mdi-file-document-edit-outline"
      background-color="grey lighten-2"
      color="cyan"
      label="Votre Message!"
    ></v-textarea>
        </v-col>
        <v-row>
          <v-col cols="12" md="4">

          </v-col>
          <v-col cols="12" md="8">
              <v-btn 
      variant="outlined"
      color="green"
    >
      Envoyer!
    </v-btn>
          </v-col>
        </v-row>
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
}
</script>
<style>

</style>
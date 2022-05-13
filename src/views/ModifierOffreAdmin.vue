<template>
<navbar-view/>
<v-container align="center">
    <h5 class="font-italic" style="color:#3E2723"><v-icon>mdi-border-color</v-icon> Modifier Les informations de l'Offre</h5>
    <v-container fluid align="center">
 <v-row>
         <v-col cols="12" md="12">
        <v-col
          cols="12"
          md="12"
        >
        <p>Poste</p>
          <v-text-field
            label="ex:developeur Web"
            prepend-inner-icon="mdi-account-network"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
         <v-row>
             <v-col
          cols="12"
          md="6"
        >
        <p>Lieu de Travail</p>
          <v-text-field
            label="Ville région ou département"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-ship-wheel"
          ></v-text-field>
        </v-col>
             <v-col
          cols="12"
          md="6"
        >
        <p>Pays</p>
          <v-text-field
            label="Pays"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-flag-variant-outline"
          ></v-text-field>
        </v-col>
         </v-row>
            <v-row>
             <v-col
          cols="12"
          md="6"
        >
        <p>Type de Contrat</p>
          <v-text-field
            label="Travail,Stage"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-feather"
          ></v-text-field>
        </v-col>
             <v-col
          cols="12"
          md="6"
        >
        <p>Temps du travail</p>
          <v-text-field
            label="Temps-partiel,Temps-plein"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-av-timer"
          ></v-text-field>
        </v-col>
         </v-row>
            <v-row>
             <v-col
          cols="12"
          md="6"
        >
        <p>Salaire</p>
          <v-text-field
            label="max/min tout les deux "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-cash-usd"
          ></v-text-field>
        </v-col>
             <v-col
          cols="12"
          md="3"
        >
        <p>Monnaie</p>
          <v-text-field
            label="DT(TND)"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-cash-usd"
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          md="3"
        >
        <p>Choisissez la période</p>
          <v-text-field
            label="Par mois,ans,semaine ou jour!"
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-flag-variant-outline"
          ></v-text-field>
        </v-col>
         </v-row>
         <v-row>
           <p>Description de l'offre d'emploi  </p>
           <v-col cols="12" md="12">
                <v-textarea
                    prepend-inner-icon="mdi-file-document-edit-outline"
      background-color="grey lighten-2"
      color="cyan"
      label="Votre message"
    ></v-textarea>
           </v-col>
         </v-row>
         <v-row>
           <v-col  cols="12" md="8">
            <p>À propos de la société</p>
           </v-col>
            <v-col cols="12" md="4">
              <v-switch
      v-model="people"
      color="green"
      label="Ignorer cette section"
      value="Ignorer cette section"
      hide-details
    ></v-switch>
           </v-col>
         </v-row>
          <v-row>
             <v-col
          cols="12"
          md="12"
        >
        <p>Nom de la société</p>
          <v-text-field
            label="Nom de la société"
            prepend-inner-icon="mdi-bullhorn"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
          </v-row>
            <v-col
          cols="12"
          md="12"
        >
        <p>Site Web de la société</p>
          <v-text-field
            label="ex:https://www.company.com"
            prepend-inner-icon="mdi-web"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-row>
           <v-col
          cols="12"
          md="6"
        >
        <p>Le nombre des Employees</p>
          <v-text-field
            label="Le nombre des Employees "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          md="6"
        >
        <p>Année de fondation</p>
          <v-text-field
            label="ex:1680 "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
        </v-row>
             <v-row>
           <p>Descriptif de la société</p>
           <v-col cols="12" md="12">
                <v-textarea
                    prepend-inner-icon="mdi-file-document-edit-outline"
      background-color="grey lighten-2"
      color="cyan"
      label="Votre message"
    ></v-textarea>
           </v-col>
         </v-row>
        <v-row>
          <v-col cols="12" md="12">
        <p> Allez-nous a la partie questionnaires?</p>
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
        color="blue"
        label="Repondez-vous"
        rows="1"
      ></v-textarea>
        </v-col>
          <v-col
          cols="12"
          sm="12"
        >
         <v-icon>mdi-account-edit</v-icon>
          <v-text-field
            color="success"
            label="Entrer la Deuxième question:"
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
        color="blue"
        label="Repondez-vous"
        rows="1"
      ></v-textarea>
        </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
          </v-col>
          <v-col cols="12" md="8">
               <v-btn
                prepend-icon=" mdi-truck-check"
      variant="outlined"
      color="green"
    >
    Valider le contenu!
    </v-btn>
          </v-col>
        </v-row>
    </v-col>
        </v-row>
        </v-container>
</v-container>
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
<template>
<navbar-view/>
<v-container align="center">
    <h5 class="font-italic" style="color:#3E2723"><v-icon>mdi-border-color</v-icon> Modifier Les informations de l'Entreprise</h5>
    <br><br>
 <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Nom de la société"
            prepend-inner-icon="mdi-bullhorn"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
          sm="6"
        >
           <v-text-field
            label="ex:https://www.company.com"
            prepend-inner-icon="mdi-web"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Le nombre des Employees "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account"
          ></v-text-field>
          </v-col>
             <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
            label="ex:1680 "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-account"
          ></v-text-field>
        </v-col>
        </v-row>
                <v-row>
          <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Le Headquarts "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-garage"
          ></v-text-field>
          </v-col>
             <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
            label="Location "
            placeholder="Placeholder"
            variant="outlined"
             prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="2">
          <v-text-field
            color="success"
            label="LinkedIn"
          prepend-inner-icon="mdi-linkedin"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
          </v-col>
              <v-col cols="12" md="2">
          <v-text-field
            color="success"
            label="Facebook"
           prepend-inner-icon="mdi-facebook"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
              <v-col cols="12" md="2">
          <v-text-field
            color="success"
            label="Twitter"
          prepend-inner-icon="mdi-twitter"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
          <v-col cols="12" md="6">
                 <v-textarea
        v-model="bio"
        auto-grow
        filled
        color="deep-purple"
        label="Description de la Société"
        rows="1"
      ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
            </v-col>
            <v-col cols="12" md="4">
                 <v-btn
                 rounded
      variant="outlined"
      color="#3E2723"
      prepend-icon="mdi-border-color"
    >
      Confirmer La modification
    </v-btn>
            </v-col>
        </v-row>
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
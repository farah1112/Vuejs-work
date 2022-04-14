<template>
<navbar-view/>
<v-divider></v-divider>
    <div>
    <v-container>
        
        <v-tooltip bottom>
          <template v-slot:activator="{ props }">
            <v-icon
              color="green"
              dark
              v-bind="props"
              size="90"
            >
             mdi-account-check-outline
            </v-icon>
          </template>
          <span>CV's</span>
        </v-tooltip>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <p>Rendre votre CV "consultable" permet aux recruteurs de vous trouver <br>grâce à notre outil de recherche de CV. </p>
      </v-col>
      <v-col
        cols="6"
        md="4"
      ><v-hover><v-btn rounded color="#64DD17" style="padding-left:30px; padding-right:30px" to="/PostuleCv">Ajouter</v-btn></v-hover>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-divider></v-divider>
  </v-container>
  <v-container>
      <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
    >
      <v-banner-text>
          <router-link to="/"><h5>Ingénieur</h5>  </router-link>
          <h6><v-icon icon="mdi-diamond-stone"></v-icon>Siliana</h6> 
           <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6> 
           <v-chip
      class="ma-2"
      color="black"
      variant="outlined"
    >
    12/004/2022
      <v-icon end icon="mdi-grease-pencil"></v-icon>
    </v-chip>  
      </v-banner-text>
      <template v-slot:actions>
        <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
           <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title v-text="'afficher'"></v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title v-text="'modifier'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'supprimer'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'Télécharger'"></v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
  </div>
      </template>
    </v-banner>
  </v-container>
  <v-divider>
  </v-divider>
  <v-container>
      <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
    >
      <v-banner-text>
          <router-link to="/"><h5>Ingénieur</h5>  </router-link>
          <h6><v-icon icon="mdi-diamond-stone"></v-icon>Siliana</h6> 
           <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6> 
           <v-chip
      class="ma-2"
      color="black"
      variant="outlined"
    >
    12/004/2022
      <v-icon end icon="mdi-grease-pencil"></v-icon>
    </v-chip>  
      </v-banner-text>
      <template v-slot:actions>
        <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
           <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title v-text="'afficher'"></v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title v-text="'modifier'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'supprimer'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'Télécharger'"></v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
  </div>
      </template>
    </v-banner>
  </v-container>
    </div> 
    <v-divider></v-divider>
    <v-container>
      <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
    >
      <v-banner-text>
          <router-link to="/"><h5>Ingénieur</h5>  </router-link>
          <h6><v-icon icon="mdi-diamond-stone"></v-icon>Siliana</h6> 
           <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6> 
           <v-chip
      class="ma-2"
      color="black"
      variant="outlined"
    >
    12/004/2022
      <v-icon end icon="mdi-grease-pencil"></v-icon>
    </v-chip>  
      </v-banner-text>
      <template v-slot:actions>
        <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
           <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title v-text="'afficher'"></v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title v-text="'modifier'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'supprimer'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'Télécharger'"></v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
  </div>
      </template>
    </v-banner>
  </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
    >
      <v-banner-text>
          <router-link to="/"><h5>Ingénieur</h5>  </router-link>
          <h6><v-icon icon="mdi-diamond-stone"></v-icon>Siliana</h6> 
           <h6><v-icon icon="mdi-file-check-outline"></v-icon>CATCH IT CV</h6> 
           <v-chip
      class="ma-2"
      color="black"
      variant="outlined"
    >
    12/004/2022
      <v-icon end icon="mdi-grease-pencil"></v-icon>
    </v-chip>  
      </v-banner-text>
      <template v-slot:actions>
        <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          color="primary"
          v-bind="props"
        >
           <v-icon>mdi-format-list-bulleted-type</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title v-text="'afficher'"></v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title v-text="'modifier'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'supprimer'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'Télécharger'"></v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
  </div>
      </template>
    </v-banner>
  </v-container>
    <footer-view/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
     data: () => ({
      model: 'default',
      options: ['label', 'outlined'],
    }), 
}
</script>
<style>

</style>
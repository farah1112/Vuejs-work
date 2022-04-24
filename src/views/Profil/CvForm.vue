<template>
<navbar-view/>
<v-container> 
    <v-row>
        <v-col cols="12" md="4" style="background-color:#EDE7F6">
        <v-img src="https://thumbs.dreamstime.com/b/image-de-profil-personnage-dessin-anim-d-avatar-femme-affaires-avec-la-conception-graphique-illustration-vecteur-portrait-anim%C3%A9-149127610.jpg" style="width:200px ;height:200px"></v-img> 
        <p class="text-h6 font-weight-bold"> Farah weslati</p> 
        <p class="text-h6 font-weight-light">Annalyst de systeme</p>
        <h5 class="text-uppercase" style="color:#2E7D32">Profil personnel</h5>  
        <p>Je suis un analyste de systèmes axés sur les résultats avec d'excellentes capacités de communication, de même qu'une connaissance approfondie des systèmes numériques et des processus de chaîne d'approvisionnement.</p>
           <h5 class="text-uppercase" style="color:#2E7D32">Compétences de base</h5> 
           <p><v-rating
             v-model="rating"
              clearable
              size="20"
             ></v-rating> Développement de logiciels de base</p>
               <p><v-rating
             v-model="rating1"
              clearable
              size="20"
             ></v-rating> Gestion de projet</p>
               <p><v-rating
             v-model="rating2"
              clearable
              size="20"
             ></v-rating> Budgétisation et analyse des coûts</p>
               <p><v-rating
             v-model="rating3"
              clearable
              size="20"
             ></v-rating> Planification des ressources d'entreprise</p>
               <p><v-rating
             v-model="rating4"
              clearable
              size="20"
             ></v-rating> Formation du personnel et de l'utilisateur</p>
               <p><v-rating
             v-model="rating5"
              clearable
              size="20"
             ></v-rating> Développement de logiciels de base</p>
             <h5 class="text-uppercase" style="color:#2E7D32">Coordonnées de contact</h5> 
             <p><v-icon>mdi-map-marker</v-icon>Adresse de l'entreprise : 12, rue des boulons,Aubervilliers 93330, France </p>
             <p><v-icon>mdi-email-check-outline</v-icon>E-mail : bonjour@sitevraimentsuper.fr </p>
             <p><v-icon>mdi-cellphone</v-icon>Téléphone:452547789</p>
             <p><v-icon>mdi-monitor</v-icon>https://github.com/</p>
             <p><v-icon>mdi-linkedin</v-icon>https://www.linkedin.com/</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>Expérience professionnelle</h5>
              <p class=" text-h6 font-weight-bold" style="color:#AB47BC">Analyste de systèmes</p>
              <p class="font-weight-thin">Entreprise Domarin | Oct 2017 - présent</p>
              <p>-Étudier les systèmes organisationnels des clients Translater des exigences commerciales en designs fonctionnels<br> - Formation du personnel et des utilisateurs sur différents logiciels d'ordinateur</p>
                 <p class=" text-h6 font-weight-bold" style="color:#AB47BC">Conceptrice UX principale</p>
              <p class="font-weight-thin">Pixelpoint et Cie. | Jan 2014 - Sept 2017</p>
              <p> Données collectées et analysées dans divers cadres <br>
                 - Dépannage des problèmes logiciels <br>
                  - Applications de techniques statistiques pour diagnostiquer les problèmes commerciaux</p>
             <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>FORMATIONS ACADEMIQUE </h5>
            <p class=" text-h6 font-weight-bold" style="color:#AB47BC">technologies de l'informatique|2019:</p>
            <p>ISTITUT SUPERIEUR DES ETUDESTECHNOLOGIQUES DE SILIANA</p>
           <p class=" text-h6 font-weight-bold" style="color:#AB47BC">baccalauréat en sciences expérimentales(mention bien ):</p>
           <p>LYCEE PILOTE SILIANA (2015-2019)</p>
            <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>ACTIVITES  COMMUNAUTAIRE</h5>
            <p>-CLUB FUTURE ACADEMY(2020-2021):Département ressource humaine</p>
              <p>-CLUB TECK UP(2019-2021) : Département administration & finance</p>
      <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>COMPETENCES INFORMATIQUE</h5>
        <p class=" text-h6 font-weight-bold" style="color:#AB47BC">Langages de codage :</p>
        <p>C#, c, java ,php, JavaScript, HTML/CSS, Python,PL/SQL</p>
         <p class=" text-h6 font-weight-bold" style="color:#AB47BC">Cadres / Systèmes :</p>
         <p>bootstrap,Visual Studio,Star UML,SQL developer, Eclipse, Netbeans,MicrosoftExcel, Microsoft Word,Microsoft Powerpoint,android studio,angular</p>
    <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>COMPETENCES LANGOUSTIQUE</h5>
    <p>ANGLAIS : Niveau avancé<br>FRANCAIS: Niveau intermédiaire<br>ARABE : Langue maternelle</p>
    <h5  class="text-uppercase" style="background-color:#EDE7F6"><v-icon color="green" size="30">mdi-clipboard-text-outline</v-icon>CENTRE D'INTERETS:</h5>
    <p>Lecture<br> Sports<br>Musique</p>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
    </v-container>
    <v-divider></v-divider>
    <footer-view/>
</template>



<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
      data: () => ({
      rating: 1,
       rating1: 1,
        rating2: 1,
         rating3: 1,
          rating4: 1,
           rating5: 1,
    }),
  components: {  NavbarView ,FooterView},
   
}
</script>

<style>

</style>
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
             <v-row>
               <v-dialog
      v-model="dialog1"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn
        prepend-icon="mdi-filter-outline"
          color="#E3F2FD"
          v-bind="props"
          rounded flat tranparant
           class="ma-2"
        >
         Sort by
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Sort By</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 200px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Relevance"
              value="Relevance"
            ></v-radio>
            <v-radio
              label="Date Apply"
              value="Date Apply"
            ></v-radio>
            <v-radio
              label="First Name"
              value="First Name"
            ></v-radio>
            <v-radio
              label="Last Name"
              value="Last Name"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog1 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog1 = false"
          >
            Show results
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-dialog
      v-model="dialog2"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn
        prepend-icon="mdi-star-outline"
          color="#E3F2FD"
          v-bind="props"
          rounded flat tranparant
           class="ma-2"
        >
        Ratings
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Ratings</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 250px;">
            <v-checkbox
            label="Unrated"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="Good Fit"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="Not a Fit"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="Maybe"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog2 = false"
          >
            Show results
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-dialog
      v-model="dialog3"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn
        prepend-icon="mdi-map-marker-radius"
          color="#E3F2FD"
          v-bind="props"
          rounded flat tranparant
           class="ma-2"
        >
        Location
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Show me Only</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 200px;">
            <v-checkbox
            label="Tunisia"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog3 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog3 = false"
          >
            Show results
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-dialog
      v-model="dialog4"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn
        prepend-icon="mdi-account-tie"
          color="#E3F2FD"
          v-bind="props"
          rounded flat tranparant
           class="ma-2"
        >
        Years Of experience
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Years Of experience</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
         <v-checkbox
            label="Less than 1 year"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="2 to 3 years"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="3 to 5 years"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="5 to 10 years"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
             <v-checkbox
            label="More than 10 years"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog4 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog4 = false"
          >
            Show results
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    max-width="380"
    variant="outlined"
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

    <v-card-actions>
          <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
      <v-btn variant="outlined" rounded flat 
      prepend-icon="mdi-marker"  v-bind="props">
      More Details
      </v-btn>
       </template>
      <v-card>
        <v-toolbar
          dark
          color="#E8EAF6"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Close</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
    <h5>Mejri Med Ali</h5>
    <p>Tunis</p>
           <v-chip
      class="ma-2"
      color="success"
      variant="outlined"
    >
      <v-icon start icon="mdi-account-check"></v-icon>
      Applied 1y ago
    </v-chip>
    <br><br>
    <v-row>
    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
        rounded
        flat 
          color="primary"
          v-bind="props"
        >
          Rate as
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn
      variant="outlined"
      color="primary"
      rounded flat
      prepend-icon="mdi-email"
    >
      Message via email
    </v-btn>
    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
         More..
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items1"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-row>
        </v-container>
        <v-divider></v-divider>
      <h5>Insights from profile</h5>
      <v-row>
       <v-col cols="12" md="4">
         <p>Expérience:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
         <v-col cols="12" md="4">
            <p>Formation academique:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
         <v-col cols="12" md="4">
             <p>Formation academique:</p>
        <p>stage d'initiation<br>CNTE<br>2020-2020</p>
       </v-col>
       <v-row>
         <v-col cols="12" md="4"></v-col>
         <v-col cols="12" md="8">
           <router-link to="ProfilCandidat" style="text-decoration:none"><v-btn
      rounded="pill"
      color="primary"
    >
      See full Profil
    </v-btn>
    </router-link>
    </v-col>
    </v-row>
      </v-row>
            <v-row>
        <v-col cols="12" md="8">
          <p>Résumé</p>
        </v-col>
        <v-col cols="12" md="4">
   <v-btn flat prepend-icon="mdi-download">
      Download
    </v-btn>
        </v-col>
      </v-row>
      </v-card>
    </v-dialog>


        <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
      <v-btn variant="outlined" rounded flat 
      prepend-icon="mdi-vote"   v-bind="props">
      question/reponse
      </v-btn>
      </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="#9FA8DA"
            >Screening question responses</v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon>mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>yes</p>
                </v-col>
              </v-row>
                 <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon>mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>NO</p>
                </v-col>
              </v-row>
                 <v-row>
                <v-col cols="12" md="8">
                  <p> <v-icon>mdi-account-check-outline</v-icon> you have a valid driver's license?</p>
                </v-col>
                   <v-col cols="12" md="4">
                     <p>yes</p>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

    </v-card-actions>
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
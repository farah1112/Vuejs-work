<template>
        <navbar-view />
<br>
    <v-divider></v-divider>
    <div class="text-center" style="padding:4rem">
        <h1>POSTULER VOTRE CV</h1>
        <p>Ajouter votre CV vous permet de postuler très rapidement <br> à de nombreuses opportunités depuis n'importe quel appareil.</p>
    </div>
    <div>
        <v-container class="text-center" fluid>
            <v-row>
                <v-col cols="12" md="4" >
                     <img src=" https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png " style="width:110px; height:110px;  ">

                </v-col>
                <div style="margin-top:20px">
                  <h1>Télécharger votre CV</h1> 
                  
                  <p>Téléchargez votre CV et postulez en un seul clic!</p>
                  </div>
                  <v-row justify="center">
                     <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
                 <v-btn
                    rounded color="blue" style="margin-top:50px" 
                      v-bind="props"            
                         >
                         Télecharger !
                              </v-btn>
                               </template>
      <v-card>
        <v-toolbar
          dark
          color="blue"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cancel</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      <div>
	<center>
		<form style="max-width:450px;margin:auto;">
            <div>
            <v-img src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" style="width:100px ;height:100px"> </v-img>
            <p>Ajouter votre CV vous permet de postuler très rapidement à de nombreuses opportunités depuis n'importe quel appareil.</p> 
            </div>
            <div  class="input-icons">
                 <v-file-input
              label="File input"
               outlined
                dense
           ></v-file-input>
            </div>
			<div class="input-icons">
			<v-icon>mdi-account</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Entrer Email">
			</div>
      <div class="input-icons">
			<v-icon>mdi-account-details</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Votre poste actuel ou profession">
			</div>

             <div class="input-icons">
			<v-icon>mdi-map-marker-radius</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Votre localité actuelle">
			</div>
            <br>
            <v-spacer></v-spacer>
               <v-hover> <v-btn color="blue" rounded  flat block tile>go!</v-btn> </v-hover>
               <br>
               <v-hover> <v-btn color="blue" rounded  flat block tile>cancel</v-btn> </v-hover>
              <br>
              </form>
	</center>
    </div>
      </v-card>
    </v-dialog>
          </v-row>
            </v-row>
     <v-divider></v-divider>
        </v-container>
         <v-container class="text-center" fluid>
            <v-row align="center">
                <v-col cols="12" md="4" >
                     <img src="https://icons.iconarchive.com/icons/inipagi/job-seeker/256/cv-icon.png" style="width:150px; height:150px; ">

                </v-col>
                <div style="margin-top:20px" >
                  <h1>Créer votre CV</h1> 
                  
                  <p>création rapide de CV pour en poster un.!</p>
                  </div>
                    <v-row justify="center">
    <v-dialog
      v-model="dialog1"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
                 <v-btn
                 v-bind="props"
        rounded color="blue" style="margin-top:50px ;margin-left:80px" 
     >
         Créer un !
        </v-btn>  
        </template>
      <v-card>
        <v-toolbar
          dark
          color="blue"
        >
          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cancel</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog1 = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
          <div>
        <v-container fluid style=" margin-top:50px">
<div>
	<center>
		<form style="max-width:450px;margin:auto;">
            <div>
            <v-img src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" style="width:80px ;height:80px"> </v-img>
            <p>Ajouter votre CV vous permet de postuler très rapidement à de nombreuses opportunités depuis n'importe quel appareil.</p> 
            </div>
			<div class="input-icons">
			<v-icon>mdi-account</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Entrer Email">
			</div>
      <div class="input-icons">
			<v-icon>mdi-account-details</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Votre poste actuel ou profession">
			</div>

             <div class="input-icons">
			<v-icon>mdi-map-marker-radius</v-icon>
				<input class="input-field"
					type="text"
					placeholder="Votre localité actuelle">
			</div>
            <br>
            <v-spacer></v-spacer>
               <v-hover> <v-btn color="blue" rounded  flat block tile>go!</v-btn> </v-hover>
               <br>
               <v-hover> <v-btn color="blue" rounded  flat block tile>cancel</v-btn> </v-hover>
              <br>
              </form>
	</center>
    </div>
    </v-container>
    <v-divider></v-divider>
        <footer-view/>
    </div>
       
      </v-card>
    </v-dialog>
  </v-row>         
            </v-row>
        </v-container>
    </div>
    <v-divider></v-divider>
 <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView'
export default {
        data () {
      return {
          dialog: false,
          dialog1:false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    components:{NavbarView,FooterView}
}
</script>
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>
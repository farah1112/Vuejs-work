<template>
<navbar-view/>
<v-divider></v-divider>
    <v-container>
    
<v-row align-content="center">
    <h5>Créer Votre CV</h5>
    <br>
    <p style="margin-left:850px"><v-icon>mdi-eye-check-outline</v-icon> Visualiser Ce CV</p>
     <v-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
    ></v-progress-linear>
    <br>
   </v-row>
    </v-container>
    <v-container>
        <div align="center" style="border-style: ridge;" >
            <v-avatar     size="90">
         <v-img src="https://toppng.com/uploads/preview/avatar-png-115540218987bthtxfhls.png" style=" width:100px;height:100px"></v-img>
         </v-avatar>
            <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
         <v-btn flat rounded v-bind="props"><v-icon size="20">mdi-marker</v-icon></v-btn>
                    </template>
        <template v-slot:default="{ isActive }">
          <v-card>   
           <v-icon style="margin-left:200px" size="50">
                  mdi-check-outline </v-icon>
                    <h5 align="center">Télécharger Votre Photo</h5>
            <v-card-text>
               <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
    style="width:400px"
  ></v-file-input>
            </v-card-text>
            <v-card-actions class="justify-end">
             <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >ENregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
         <h5>Farahweslati</h5>
         <h6>ingenieur</h6>
         <h6>siliana</h6>
         <br>


           <v-row justify="center">
    <v-dialog
      v-model="dialog2"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
          <v-btn flat rounded  v-bind="props"><v-icon size="20">mdi-marker</v-icon></v-btn>
           </template>
      <v-card>
        <v-toolbar
          dark
          color="green"
        >
          <v-btn
            icon
            dark
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>close</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
       <v-container fluid align="center">
         <v-icon size="50">
           mdi-account-off-outline
         </v-icon>
         <h5 align="center">
           Données personnelles
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
          sm="6"
           md="4"
        >
         <v-icon>mdi-account-edit</v-icon>
          <v-text-field
            color="success"
            label="Nom"
            placeholder="Placeholder"
            variant="outlined"
    
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
            <v-col
          cols="12"
          sm="6"
           md="4"
        >
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
          sm="6"
           md="4"
        >
         <v-icon>mdi-network-outline</v-icon>
          <v-text-field
            color="success"
            label="Votre poste actuel ou profession"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
               cols="12"
          sm="6"
           md="4">
            <v-icon>mdi-account-search-outline</v-icon>
                <v-autocomplete
            ref="country2"
            v-model="country2"
            :rules="[() => !!country2 || 'This field is required']"
            :items="countries2"
            label="where do youlive?"
            placeholder="Select..."
            required
          ></v-autocomplete>
        </v-col>
        </v-row>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
                 <v-card-text>
          <v-row>
               <v-col
          cols="12"
          sm="6"
           md="4"
        >
         <v-icon>mdi-email-check-outline</v-icon>
          <v-text-field
            color="success"
            label="Email"
            placeholder="Placeholder"
            variant="outlined"
    
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
            <v-col
          cols="12"
          sm="6"
           md="4"
        >
         <v-icon>mdi-cellphone-wireless</v-icon>
          <v-text-field
            color="success"
            label="Téléphone"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
            <v-col
          cols="12"
          sm="6"
           md="4"
        >
         <v-icon>mdi-map-marker-outline</v-icon>
          <v-text-field
            color="success"
            label="Adresse"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
               cols="12"
          sm="6"
           md="4">
          <v-icon>mdi-code-tags-check</v-icon>
          <v-text-field
            color="success"
            label="Code postal"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
             <v-col
               cols="12"
          sm="6"
           md="4">
          <v-icon>mdi-account-question-outline</v-icon>
          <v-text-field
            color="success"
            label="Etat"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
           <v-col
               cols="12"
          sm="6"
           md="4">
            <v-icon>mdi-airplane</v-icon>
                <v-autocomplete
            ref="country3"
            v-model="country3"
            :rules="[() => !!country3 || 'This field is required']"
            :items="countries3"
            label="Ville"
            placeholder="Select..."
            required
          ></v-autocomplete>
        </v-col>
        </v-row>
        </v-card-text>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <v-container>
          <v-row>
            <v-col
               cols="12"
          sm="12">
          <v-icon>mdi-map-minus</v-icon>
          <v-text-field
            color="success"
            label="Nationalité"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col
               cols="12"
          sm="12">
          <v-icon>mdi-update</v-icon>
          <v-text-field
            color="success"
            label="Date de naissance"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
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
        v-if="step < 3"
        color="black"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
       <v-btn
        v-if="step >2"
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
           </v-row>


         <v-divider></v-divider>
         <h5>farahwweslati1919@gmail.com</h5>
         </div>
         <br>
         <br>
         <h5 align="center">Compétences</h5>
      <v-container>
      <v-banner
      lines="six"
      icon="mdi-account-tie"
      color="grey"
      class="my-4"
    >
      <v-banner-text>
          <h6><v-icon icon="mdi-grease-pencil" color="red"></v-icon>write your thoughts baby </h6> 
          <br>
           <h6><v-icon icon="mdi-file-check-outline" color="green"></v-icon>3abi kes teeey b louuuuuz </h6> 
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
            <v-list-item-title v-text="'modifier'"></v-list-item-title>
            </v-list-item>
              <v-list-item>
            <v-list-item-title v-text="'supprimer'"></v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>
  </div>
      </template>
    </v-banner>
  </v-container>
        <h5>Langue du CV</h5>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
          rounded
            color="#EEFF41"
            v-bind="props"
          >From the bottom</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-text>
               <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-file"
  >
    <template v-slot:title>
     Langue CV
    </template>
      <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || 'This field is required']"
            :items="countries"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>
               </v-card>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
                text
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
    </v-container>
    <v-container>
       <div align="center">
           <v-row>
        <v-col>
             <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn  rounded flat  v-bind="props" > <v-icon>mdi-file-document-edit-outline</v-icon> Résumé </v-btn>
 </template>
        <template v-slot:default="{ isActive }">
          <v-card align="center"> 
              <br>
              <h5>Your CV Resume Please!</h5>
         <v-img src="https://static.vecteezy.com/ti/vecteur-libre/p1/2592733-avatar-figure-humaine-dans-cv-document-line-style-icon-gratuit-vectoriel.jpg" style="width:180px;height:180px;"></v-img>
             <v-textarea
      background-color="grey lighten-2"
      color="cyan"
      label="write your résumé "
       style="border-radius: 30px; width:600px;"

    ></v-textarea>
            <v-card-actions class="justify-end">
              <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
            style="background-color:green"
                text
                rounded
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
<br>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
<v-btn rounded flat  v-bind="props"><v-icon>mdi-briefcase-edit</v-icon> Expériences professionnelles</v-btn>
  </template>
      <v-card>
        <v-toolbar
          dark
          color="green"
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
         <h5>Expériences professionnelles</h5>
         <v-icon size="50" >mdi-clipboard-check-outline</v-icon>
 <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message3"
            label="Poste"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message4"
            label="Nom de société"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
        </v-row>
          <v-col
          cols="12"
          sm="6"
        >
            <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || 'This field is required']"
            :items="countries"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>
          </v-col>
          <v-row>
                    <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message5"
            label="Date Début"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message6"
            label="Date Fin"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
          </v-row>
          <v-row>
          <v-col
          cols="12"
          sm="6"
        >
          <v-checkbox
            v-model="ex4"
            label="Actuellement en poste"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
          </v-col>
          <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          filled
          auto-grow
          label="Describe your expérience"
          rows="2"
          row-height="20"
        ></v-textarea>
      </v-col>
          </v-row>  

          <v-row>
             <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
              <v-spacer></v-spacer>
                <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn> 
              </v-row>
      </v-container>
        
      </v-card>
    </v-dialog>
  </v-row>

<br><br>
  <v-row justify="center">
    <v-dialog
      v-model="dialog1"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
<v-btn rounded flat  v-bind="props" ><v-icon>mdi-wallpaper</v-icon> Formations et diplômes</v-btn>
  </template>
      <v-card>
        <v-toolbar
          dark
          color="green"
        >
          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>close</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
           <v-container fluid align="center">
         <h5>Formations et diplômes</h5>
         <v-icon size="50" >mdi-paper-cut-vertical</v-icon>
 <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message7"
            label="Établissement"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message8"
            label="Diplôme"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="12"
          sm="6"
        >
            <v-autocomplete
            ref="country"
            v-model="country1"
            :rules="[() => !!country1 || 'This field is required']"
            :items="countries1"
            label="Country"
            placeholder="Select..."
            required
          ></v-autocomplete>
          </v-col>
             <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message9"
            label="Discipline"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
        </v-row>
          <v-row>
                    <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message5"
            label="Date Début"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="message6"
            label="Date Fin"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-col>
          </v-row>
          <v-row>
          <v-col
          cols="12"
          sm="6"
        >
          <v-checkbox
            v-model="ex4"
            label="Actuellement Etudiant(e)"
            color="success"
            value="success"
            hide-details
          ></v-checkbox>
          </v-col>
          <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          filled
          auto-grow
          label="Describe"
          rows="2"
          row-height="20"
        ></v-textarea>
      </v-col>
          </v-row>  

          <v-row>
             <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
              <v-spacer></v-spacer>
                <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn> 
              </v-row>
      </v-container>
      </v-card>
    </v-dialog>
  </v-row>

<br>
 <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat  v-bind="props" ><v-icon>mdi-parachute</v-icon> Compétences</v-btn> <br><br>
</template>
        <template v-slot:default="{ isActive }">
          <v-card  align="center">
              <br>
        <v-icon size="40">mdi-set-left-center <h5>Give us YOUR capacities</h5></v-icon>
           <p>
               votre Compétences
                   <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="message4"
            label="compétences"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
            style="width:550px;"
          ></v-text-field>
        </v-col>
           </p>
           <p>
               Expériences
               
    <v-select
    style="border-style:ridge"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
           </p>
            <v-card-actions class="justify-end">
              <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
                <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
</v-col> 
<v-col>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat v-bind="props" ><v-icon>mdi-language-c</v-icon> Langues</v-btn>
</template>
        <template v-slot:default="{ isActive }">
          <v-card align="center">
      <v-icon size="50">mdi-fountain-pen<h5>Langues </h5></v-icon>
           <p>
         Langues
         <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="message4"
            label="compétences"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
            style="width:550px;"
          ></v-text-field>
        </v-col>
           </p>
           <p>
         Niveau          
    <v-select
    style="border-style:ridge"
      v-model="select"
      :items="items1"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
           </p>
            <v-card-actions class="justify-end">
              <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
                <v-btn
                text
                rounded
               style=" background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
</v-row>

  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat v-bind="props" ><v-icon>mdi-school</v-icon> Skills</v-btn>
   </template>
        <template v-slot:default="{ isActive }">
          <v-card align="center">
               <v-icon size="50">
                  mdi-check-outline </v-icon>
                  <h5>show us your skills</h5>
            <v-card-text>
               <v-col
                cols="12"
                sm="12"
              >
                <v-autocomplete
                  :items="['Coding','Creativity' ,'Persuasion' ,'Collaboration','Adaptability', 'Time Management', 'Effective communication' ,
                  'Emotional intelligence','Conflict management','Teamwork skills','Stress management','Problem-solving','Productivity & organization','Critical thinking']"
                  label="Your skills"
                  multiple
                  style="width:400px"
                ></v-autocomplete>
              </v-col>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    </v-row>           
<br>
<v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat v-bind="props" ><v-icon>mdi-link-variant</v-icon> Liens</v-btn><br><br>
 </template>
        <template v-slot:default="{ isActive }">
          <v-card align="center">
        <v-icon size="50">mdi-file-document-edit<h6>Liens</h6></v-icon>
           <p>
            Titre
            <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="message4"
            label="Titre"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
            style="width:600px"
          ></v-text-field>
        </v-col>
           </p>
           <p>
               URL
               <v-col
          cols="12"
          sm="12"
        >
          <v-text-field
            v-model="message4"
            label="URL"
            variant="outlined"
            clearable
            clear-icon="mdi-cancel"
          ></v-text-field>
        </v-col>
           </p>
                       
        <v-card-actions class="justify-end">
              <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    </v-row>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat v-bind="props"><v-icon>mdi-lightbulb-on-outline</v-icon> Intérêts</v-btn>
  </template>
        <template v-slot:default="{ isActive }">
          <v-card align="center">
               <v-icon size="50">mdi-account-heart<h6>Intérêts</h6></v-icon>
            <p>
                Intérêts
                <br>
                    <v-textarea
      background-color="amber lighten-4"
      color="orange orange-darken-4"
      label="Ecrire"
      style="width:600px;border-style:ridge"
    ></v-textarea>
            </p>
            <v-card-actions class="justify-end">
                <v-btn
                text
                rounded
                @click="isActive.value = false"
              >Annuler</v-btn>
               <v-btn
                text
                rounded
                style="background-color:green"
                @click="isActive.value = false"
              >Enregistrer</v-btn>
        
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    </v-row>
</v-col>
</v-row>
       </div>
    </v-container>
    <v-divider></v-divider>
    <footer-view/>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
    components:{
        NavbarView,
        FooterView
    },
    data () {
      return {
       countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        countries1: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        country1:null,
        country: null,
         dialog: false,
         dialog1: false,
        dialog2: false,
        notifications: false,
        sound: true,
        widgets: false,
        value: 10,
        bufferValue: 20,
        interval: 0,
        message3: 'ex:designer!',
        message4: 'Nom de la société!',
        message5:'tell us!',
        message6:'tell us!',
        message7:'Enter your Établissement!',
        message8:'Enter your Diplôme!',
        message9:'Discipline!',
        ex4:'success',
           step: 1,
         countries: ['Anglais','Arabe','Chinois','Espagnol',	'Français','Russe',	'Albanais','Allemand','Amazigh','Arménien','Aymara',
'Bengali','Catalan','Coréen','Croate','Danois','Guarani','Grec','Hongrois','Italien','Japonais','Kikongo','Kiswahili','Lingala','Malais','Mongol',
'Néerlandais','Occitan','Ourdou','Persan','Portugais','Quechua','Roumain','Samoan','Serbe','Sesotho','Slovaque','Slovène','Suédois','Tamoul','Turc','Afrikaans','Araona',
'Azéri','Baure','Bésiro','Bichelamar','Biélorusse','Birman','Bulgare','Canichana','Cavineña','Cayubaba','Chácobo','Chichewa','Chimane',
'Créole de Guinée-Bissau','Créole Antillais','Créole seychellois','Divehi','Dzongkha','Ese ejja','Estonien',],
           countries2:['Ariana',
 'Béja',
 'Ben Arous',
 'Bizerte',
 'Gabès' ,'Gafsa', 'Jendouba', 'Kairouan' ,'Kasserine', 'Kébili', 'Kef',
'Mahdia',
 'Manouba',
'Médenine',
 'Monastir',
 'Nabeul',
 'Sfax',
 'Sidi Bouzid',
' Siliana',
'Sousse',
' Tataouine',
 'Tozeur',
 'Tunis',
'Zaghouan',],
     countries3:['Ariana',
 'Béja',
 'Ben Arous',
 'Bizerte',
 'Gabès' ,'Gafsa', 'Jendouba', 'Kairouan' ,'Kasserine', 'Kébili', 'Kef',
'Mahdia',
 'Manouba',
'Médenine',
 'Monastir',
 'Nabeul',
 'Sfax',
 'Sidi Bouzid',
' Siliana',
'Sousse',
' Tataouine',
 'Tozeur',
 'Tunis',
'Zaghouan',],
            country2: null,
            country3: null,
            country:this.country,
            select: null,
      items: [
        '0.5an',
        '1 an',
        '2 an ',
        '3 an ',
        '4 an ',
        '5 an',
        '6 an ',
        '7 an',
        '8 an ',
        '9 an ',
        '10 an ',
        '11 an',
        '12 an ',
        '13 an',
        '14 an ',
        '15 an ',
        '16 an ',
        '17 an',
        '18 an ',
        '19 an',
        '20 an ',
        'i dont know exactly',
      ],
       items1: [
        'Débutant',
        'Courant',
        'Avancé',
        'Langue Maternelle',
        ],
       
      }
      
      
    },
     computed: {
      form () {
        return {
          country: this.country,
        }
      },
    },
   computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Profil'
          case 2: return 'Données personnelles'
          default: return 'Autres Informations'
        }
      },
    },
    watch: {
      value (val) {
        if (val < 100) return

        this.value = 0
        this.bufferValue = 10
        this.startBuffer()
      },
    },

    mounted () {
      this.startBuffer()
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },

    methods: {
      startBuffer () {
        clearInterval(this.interval)

        this.interval = setInterval(() => {
          this.value += Math.random() * (15 - 5) + 5
          this.bufferValue += Math.random() * (15 - 5) + 6
        }, 2000)
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

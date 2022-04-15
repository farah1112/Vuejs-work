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
         <h5>Farahweslati</h5>
         <h6>ingenieur</h6>
         <h6>siliana</h6>
         <br>
          <v-btn flat rounded><v-icon size="30">mdi-marker</v-icon></v-btn>
         <v-divider></v-divider>
         <h5>farahwweslati1919@gmail.com</h5>
         </div>
    </v-container>
    <v-container>
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
          color="grey"
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
         <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-card>
    </v-dialog>
  </v-row>
<br><br>

 <v-row justify="center">
    <v-dialog
      v-model="dialog"
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
          color="grey"
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
         <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-card>
    </v-dialog>
  </v-row>
<br><br>
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
<br>
 <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
      >
        <template v-slot:activator="{ props }">
<v-btn rounded flat v-bind="props" ><v-icon>mdi-school</v-icon> Skills</v-btn>
</template>
        <template v-slot:default="{ isActive }">
          <v-card  align="center">
              <br>
        <v-icon size="100" color="#03A9F4">mdi-account-star-outline<h5>Give us YOUR Skills</h5></v-icon>
           <p>
             Your skills!
                   <v-col
          cols="12"
          sm="12"
        >
        </v-col>
           </p>
               
    <v-select
    style="border-style:ridge ;width:520px"
      v-model="select"
      :items="items2"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
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
             dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        value: 10,
        bufferValue: 20,
        interval: 0,
         countries: ['Anglais','Arabe','Chinois','Espagnol',	'Français','Russe',	'Albanais','Allemand','Amazigh','Arménien','Aymara',
'Bengali','Catalan','Coréen','Croate','Danois','Guarani','Grec','Hongrois','Italien','Japonais','Kikongo','Kiswahili','Lingala','Malais','Mongol',
'Néerlandais','Occitan','Ourdou','Persan','Portugais','Quechua','Roumain','Samoan','Serbe','Sesotho','Slovaque','Slovène','Suédois','Tamoul','Turc','Afrikaans','Araona',
'Azéri','Baure','Bésiro','Bichelamar','Biélorusse','Birman','Bulgare','Canichana','Cavineña','Cayubaba','Chácobo','Chichewa','Chimane',
'Créole de Guinée-Bissau','Créole Antillais','Créole seychellois','Divehi','Dzongkha','Ese ejja','Estonien',],
            country: null,
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
        items2:[
        'Creativity', 'Persuasion' ,'Collaboration','Adaptability' ,'Time Management', 'Effective communication', 'Emotional intelligence','Conflict management','Teamwork skills','Stress management','Problem-solving','Productivity & organization','Critical thinking','Attention to detail','Data analysis',
'Web analytics' ,
'HTML & CSS',
'Wordpress',
'Email marketing',
'Web scraping',
'CRO and A/B Testing',
'B2B Marketing',
'The 4 P-s of Marketing',
'Consumer Behavior Drivers',
'Brand management',
'Creativity',
'Copywriting',
'Storytelling',
'Sales',
'CMS Tools',
'Adobe Creative Suite: Illustrator, InDesign, Photoshop',
'Dreamweaver',
'Infographics',
'Photo editing ',
'Typography: spacing, line height, layout, choosing fonts',
'Storyboarding',
'argeting and marketing through visual communications',
'Logo creation',
'Digital printing',
'Integration of visual communication in social media platforms',
'Creativity',
'Attention to detail & aesthetics',
'Interactive media design',
'Color sense & theory',
'Ad design',
'Active listening',
'Javascript',
'Graphic User Interfaces (GUI)',
'Git/Version control (Github, gitlab)',
'Search Engine Optimization (SEO)',
'Application Programming Interface (API)',
'Adobe Photoshop, InDesign',
'Content Management Systems (CMS)',
'Testing/Debugging',
'Responsive design principles',
'SQL (a must) and Hive (optional)',
'Programming language (R, Python, Scala, Matlab)',
'STATA, SPSS, SAS ',
'Data Mapping',
'Entity Relationship Diagrams',
'Wireframes',
'Big Data tools ',
'Microsoft Visio',
'Agile Business Analysis',
'Machine learning ',
'System Context Diagrams',
'Business Process Modeling',
'Technical and non-technical communication',
        ]
      }
      
      
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

<template>
<navbar-view/>
    <div class="slide">
          <v-container >
    <v-row class="r1">
      <v-col  cols="12" xs="12" sm="6" md="6" lg="6">
            <h3 class="test" style="color:white">Welcome to CATCH IT</h3>       
            <p style="color:whitesmoke">Hire expert developers & find internships
                Sign up and post a job or
                create your developer profile.
               We will find offers / candidates for you!.</p>
          <v-hover><v-btn style="background-color: #81C784 ; color:black" to="/SignUp">Create your Profile!</v-btn> </v-hover>    
      </v-col>
    </v-row>
   </v-container>
   <br><br>
    </div>
    <br>
    <br>
    <v-container align="center">
      <v-row>
           <v-col cols="12" md="12">
         <div>
        <v-tabs
      fixed-tabs
      background-color="#F5F5F5"
      dark
      >
    <v-tab><v-icon color="green" size="30">mdi-account-clock-outline</v-icon>
     work
    </v-tab>
    <v-tab> <v-icon color="green" size="30">mdi-account-box</v-icon>
   internships
    </v-tab>
    <v-tab><v-icon color="green" size="30">mdi-cash</v-icon>
      Freelancer work
    </v-tab>
  </v-tabs>
     </div>
     </v-col> 
       </v-row>
  </v-container>
       <br>
     <v-row  justify>
       <v-col cols="12" md="12">
       <div class="boxContainer" style="width:450px">
         <table class="elementContainer">
         <tr>
           <td>
             <input type="text" placeholder="Search" class="search">
           </td>
           <td>
            <v-icon class="icon">mdi-search-web</v-icon>
           </td>
         </tr>
         </table>
       </div>
       </v-col>
     </v-row>
       <br>
      <br>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="10">
          <v-row>
          <v-col cols="12" md="10">
  <router-link to="DetailsPost" style="text-decoration:none"> <h5 class="font-italic">Développeur web Full Stack / Développeur web React</h5></router-link>
  </v-col>
  <v-col cols="12" md="2">
       <v-tooltip
          v-model="show"
          top
        >
          <template v-slot:activator="{ props }">
 <v-btn flat rounded   v-bind="props"><v-icon size="30">mdi-heart-outline</v-icon></v-btn>
          </template>
            <span>Ajout Favoris!</span>
        </v-tooltip>
  </v-col>
  </v-row>
  <br>
    <v-row>
      <v-col cols="12" md="6">
        <v-icon color="yellow" size="30">mdi-flag-variant-outline</v-icon>
      <h6 class="font-weight-bold"> Tunis</h6>
      </v-col>
      <br>
      <p>On recrute un Développeur web Full Stack / Développeur web React.js - Français 
Vous êtes aussi à l’aise dans le Frontend que le Backend?<br> Vous aimez travailler avec les plus récentes technologies telles que ASP.NET Core, React.js, Typescript,...</p>
<v-row>
   <v-chip
      class="ma-2"
      color="success"
      variant="outlined"
    >
      <v-icon start icon="mdi-progress-clock"></v-icon>
      il y'a 14heures
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
      variant="outlined"
    >
      postuler facilement
      <v-icon end icon="mdi-face"></v-icon>
    </v-chip>
</v-row>
    </v-row>
        </v-col>
      </v-row> 
      <br>
      <v-divider></v-divider>
 <v-container>
  <v-row>
    <v-col cols="12" md="5">
    </v-col>
    <v-col cols="12" md="7">
       <v-btn
       rounded
      variant="outlined"
      color="green"
      prepend-icon="mdi-eye-circle-outline"

    >
      View all Jobs!
    </v-btn>
    </v-col>
  </v-row>
</v-container>
    <v-container>
   <h4  class="text-center"> We take care of everything</h4><br><br>
   <v-row>
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="300"
      v-bind="props"
    >
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://news.tradimo.com/wp-content/uploads/2020/01/131.jpg"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-green-darken-2 v-card--reveal text-h2 text-white"
            style="height: 100%;"
          >
            COME JOIN US!
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <h3 class="text-h4 font-weight-light text-green mb-2">
          opportunités large et variées
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          nous essayons de vous offrir différentes opportunités de travail <br>partout dans le monde et le reste est pour vous,<br> montrez-nous vos capacités
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
   <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="300"
      v-bind="props"
    >
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://www.primeum.com/hubfs/Transparence%20salaire%20entreprise.jpg"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-green-darken-2 v-card--reveal text-h2 text-white"
            style="height: 100%;"
          >
            COME JOIN US!
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <h3 class="text-h4 font-weight-light text-green mb-2">
         meilleures entreprises
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          vous trouverez sur notre site les meilleures entreprises<br> dans tous les domaines que vous souhaitez.
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
      <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto"
      color="grey-lighten-4"
      max-width="300"
      v-bind="props"
    >
      <v-img
        :aspect-ratio="16/9"
        cover
        src="https://www.plussept.com/wp-content/uploads/2016/07/24230067_s.jpg"
      >
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-green-darken-2 v-card--reveal text-h2 text-white"
            style="height: 100%;"
          >
            COME JOIN US!
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <h3 class="text-h4 font-weight-light text-green mb-2">
         Respectant votre objectif de stage
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          nous vous proposons différents stages variés dans tous les domaines.<br> donnez-lui une chance copain.
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</v-row>
    </v-container>
    <br>
    <br>
    <div >
        <v-container>
            <v-row >             
                  <v-col cols="12" xs="12" md="6" lg="6">
                       <v-img rounded src="https://i0.wp.com/mobility-work.com/wp-content/uploads/2021/02/laptop-features-list.png?fit=600%2C416&ssl=1" style="border-radius:20px"   ></v-img>
                </v-col>
                <v-col cols="12" xs="12" md="6" lg="6">
                    <p style="color:blue">CATCH IT APPLICATION</p>
                    <h1>
                       Bénéficiez d'un accompagnement <br> dans votre téléphone
                    </h1>
                    <p>
                     vous pouvez trouver notre site sur votre téléphone sans avoir <br> besoin de vous connecter avec un ordinateur.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
      <br>
       <div class="offer">
          <v-container style="background-color:#C5E1A5">
           <p style="color:black; text-align:center"> WHAT WE OFFER</p> 
           <h2 style=" text-align:center" class="best"> The best standards <br> anywhere. </h2>
           <br>
           <br>
           <br>
            <v-row>
              <v-col v-for="offer in Offers" :key="offer.icon" class="text-center" xs="4" md="3">
              <v-icon class="text-center" style="color:yellow">{{offer.icon}}</v-icon>
              <h5 class="text-center" style="color:black" >{{offer.title}}</h5>
              <p style="color:black">{{offer.des}}</p>
              </v-col>
              </v-row>
                  </v-container>
       </div>
      <br>
      <a class="gotopbtn" href="#"> <v-icon>mdi-arrow-up</v-icon> </a>
      <v-divider></v-divider>
         <footer-view/>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue"
import FooterView from '@/components/FooterView.vue';


export default {
    data() {
        return {
            cycle: false,
             show: false,
             show1: false,
             show2: false,
             show3: false,
            Offers: [
                { icon: "mdi-check-underline", title: "Recherche", des: " Atteignez vos objectifs et profitez de votre temps"},
                { icon: "mdi-amplifier", title: "Publier poste", des: "Recevez vos repas chez vous tous les soirs." },
                { icon: "mdi-telegram", title: "Télécharger CV", des: "Atteignez vos objectifs et profitez de votre temps" },
                { icon: "mdi-book-outline", title: "Créer CV", des: "Atteignez vos objectifs et profitez de votre temps" },
            ],  

        };
    },
    components: { NavbarView, FooterView }
}
</script>



<style>
html{
  scroll-behavior: smooth;
}
.gotopbtn{
  position: fixed;
  width: 50px;
  height: 50px;
  background:gray;
  bottom: 40px;
  right: 50px;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 22px;
}
.container {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
 
}
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
  .left {
    width: 100%;
    height: 400px;
  }
  .right {
    width: 70%;
    margin: 0;
    margin-top: -100px;
  }
}

.offer{
  background-color: transparent;
  min-height: 75vh;
}
.slide{
 
   background-image: url("https://i.gifer.com/embedded/download/BXe0.gif");
    min-height: 85vh;
    min-width: 75vh;
    background-size: cover !important;
    background-position: center !important;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
    background-color:transparent;
  
}

h3{
    font-size: 60px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
}
h4{
    font-size: 40px;
    font-weight: bold;
    font-family: cursive;
    color: #444;
}
p{
  font-size: 19;
  font-family: cursive;
  margin: 25px 0px;
  
  
}
.boxContainer{
  margin:auto;
  position: relative;
  border: 4px solid #2980b9;
  padding: 0px 10px;
  border-radius: 50px;
}
.elementContainer{
  width: 100%;
  height: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  font-size: 18px;
  font-family: "Nunito";
  color: #424242;
  font-weight: 500;
}
.search:focus{
  outline: none;
}
.icon{
  font-size: 25;
  color: #2980b9;
}
.article{
   border-style: solid;
   color:#444;
  border-width: 1px;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style> 
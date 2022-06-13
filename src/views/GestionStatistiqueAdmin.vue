<template>
<navbar-view/>
<br>
<v-row>
  <v-col cols="12" md="6"></v-col>
   <v-col cols="12" md="4">
       <v-text-field
            label="Search with a name"
            prepend-inner-icon="mdi-magnify-minus-outline"
            variant="outlined"
          ></v-text-field>
   </v-col>
     <v-col cols="12" md="2">
       <router-link to="AddAdmin" style="text-decoration:none">
        <v-tooltip
          v-model="show"
          top
        >
          <template v-slot:activator="{ props }">
            <v-btn
            flat 
              icon
              v-bind="props"
            >
              <v-icon color="#FF9800">
               mdi-account-multiple-plus-outline
              </v-icon>
            </v-btn>
          </template>
          <span>Add Admin</span>
        </v-tooltip>
        </router-link>
        </v-col>
</v-row>
<v-container align="center">
<h5 class="text-h5  font-italic" style=" color:blueviolet"><img src="https://i.pinimg.com/originals/58/54/cc/5854ccbf23126f8d56c0347624f9f312.gif" style="width:100px ;height:100px"> Welcome to The AdminPanel</h5>
</v-container>
<v-row>
  <v-col cols="12" md="4">
 <v-card
 flat 
    class="mx-auto"
    max-width="300"
  >
    <v-list shaped>
      <router-link to="AdminDashboard" style="text-decoration:none"> <v-list-subheader color="green">ADMIN DASHBOARD</v-list-subheader></router-link>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        router :to="item.route"
        active-color="#00E676"
        rounded="shaped"
      >
        <v-list-item-avatar start>
          <v-icon :icon="item.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
  </v-col>
  <v-col cols="12" md="7">
    <v-tabs
    fixed-tabs
    theme="dark"
  >
    <v-tab class="text-h5 font-italic" color="#64DD17">
     All statestiques:
    </v-tab>
  </v-tabs> 
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items1" :key="i">
        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
              <v-img
                :src="item.img"
                height="220px"
                cover
              >
                <v-card-title class="text-h6 text-white d-flex flex-column" align="center">
                  <p class="mt-4 font-weight-bold ">
                    {{ item.title }}
                  </p>
                  <br><br>
                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold">
                      {{ item.text }}
                    </p>
                  </div>
                </v-card-title>
                <div class="align-self-center">
                  <v-btn
                    v-for="(index) in icons"
                    :key="index"
                    variant="text"
                    :class="{ 'show-btns': isHovering }"
                    :color="transparent"
                  ></v-btn>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-col>
</v-row>
  <footer-view/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
     data: () => ({
       snackbar: false,
      text: ` Would you like to remove this user?`,
      selectedItem: 1,
      items: [
        { text: 'Gestion Admins', icon: 'mdi-account-check-outline' , route: '/GestionAdmins'},
        { text: 'Gestion users', icon: 'mdi-account-check-outline' , route: '/GestionUsers'},
        { text: 'Gestion Entreprises', icon: 'mdi-contacts' , route: '/GestionEntreprise' },
        { text: 'Gestions Offres', icon: 'mdi-wallet-membership' ,route: '/GestionOffreAdmin'},
        { text: 'Les statestiques', icon: 'mdi-chart-line' ,route: '/GestionStatistiqueAdmin'},
      ],
          messages: [
        {
          avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          name: 'Farah weslati',
          title: 'Vue js developer',
        },
      ],
         items1: [
        {
          title: 'Administrateurs du site ',
          text: `20 Administrateurs`,
          img: 'https://info.everteam.com/hs-fs/hubfs/An%20illustration%20of%20virtual%20data.jpeg?width=1000&height=563&name=An%20illustration%20of%20virtual%20data.jpeg',
        },
        {
          title: 'Utilisateurs',
          text: '300 utilisateurs',
          img: 'https://dailygeekshow.com/wp-content/uploads/2018/08/une-dark-web.jpg',
        },
        {
          title: 'Entreprises',
          text: '10000 entreprises',
          img: 'https://freedesignfile.com/upload/2014/01/business-backgrounds-3.jpg',
        },
        {
          title: 'Offres',
          text: '50000 offres',
          img: 'http://www.villeneuvelesmaguelone.fr/wp-content/uploads/2016/06/alejandro_escamillo_unsplash.jpg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
         }),  
}
</script>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }
  .v-card:not(.on-hover) {
    opacity: 0.6;
  }
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>
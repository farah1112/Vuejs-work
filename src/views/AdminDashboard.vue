<template>
<navbar-view/>
<br>
<v-row>
  <v-col cols="12" md="6"></v-col>
   <v-col cols="12" md="4">
       <v-text-field
            label="Search "
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
    <v-tab>
     All Users:
    </v-tab>
  </v-tabs>
  <v-expansion-panels variant="popout" class="pa-4">
    <v-expansion-panel
      v-for="(message, i) in messages"
      :key="i"
      hide-actions
    >
      <v-expansion-panel-title>
        <v-row
          align="center"
          class="spacer"
          no-gutters
        >
          <v-col
            cols="4"
            sm="2"
            md="1"
          >
            <v-avatar
              size="40px"
            >
              <v-img
                v-if="message.avatar"
                alt="Avatar"
                src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/245462097_1542057339472925_6344033447496594175_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=68oGQCzLwqAAX-_4_Xo&tn=1HPkFl2ekD9QHK_o&_nc_ht=scontent.ftun8-1.fna&oh=00_AT_Ig03aaEX9D3jcNWtnK3scjT_A1iyC_qqlhI0Qoz-9sg&oe=6282E778"
              ></v-img>
              <v-icon
                v-else
                :color="message.color"
                :icon="message.icon"
              ></v-icon>
            </v-avatar>
          </v-col>

          <v-col
            class="hidden-xs-only text-left ml-2"
            sm="5"
            md="3"
          >
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="text-grey"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-col>

          <v-col
            class="text-no-wrap text-left"
            cols="5"
            sm="3"
          >
            <v-chip
              v-if="message.new"
              :color="`${message.color}-lighten-1`"
              class="ml-0 mr-2 text-black"
              label
              small
            >
              {{ message.new }} new
            </v-chip>
            <strong v-html="message.title"></strong>
          </v-col>

          <v-col
            v-if="message.excerpt"
            class="text-grey text-truncate hidden-sm-and-down"
          >
            &mdash;
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
    <v-card-text class="text-body-1 font-italic" v-text="paragA"></v-card-text>
          <v-card-text class="text-body-1 font-italic" v-text="paragB"></v-card-text>
           <v-card-text class="text-body-1 font-italic" v-text="paragC"></v-card-text>
            <v-card-text class="text-body-1 font-italic" v-text="paragD"></v-card-text>
         <v-card-text  class="font-weight-bold" v-text="parag1"></v-card-text>
          <v-card-text   class="font-weight-bold"  v-text="parag2"></v-card-text>
           <v-card-text   class="font-weight-bold" v-text="parag3"></v-card-text>
            <v-card-text   class="font-weight-bold" v-text="parag4"></v-card-text>
            <v-card-text   class="font-weight-bold" v-text="parag5"></v-card-text>
             <v-spacer></v-spacer>
             <router-link to="ModifierUser"  style="text-decoration:none">
       <v-btn
       class="ma-2"
      rounded="pill"
      color="#F1F8E9"
      prepend-icon="mdi-update"
    >
      Modifier user
    </v-btn>
    </router-link>

      <v-btn
       @click="snackbar = true"
      class="ma-2"
      rounded="pill"
      color="#F1F8E9"
      prepend-icon="mdi-delete-empty"
    >
     Supprimer User
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      multi-line
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="#FF6F00"
          variant="text"
          @click="snackbar = false"
        >
          Supprimer
        </v-btn>
          <v-btn
          color="#FF6F00"
          variant="text"
          @click="snackbar = false"
        >
         Annuler
        </v-btn>
      </template>
    </v-snackbar>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  
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
      paragA:'Nom :Weslati', 
      paragB:'Prénom:Farah', 
      paragC:'Civilité:Tunisienne', 
      paragD:'Ville: Tunis ', 
      parag1:'Contact: Télephone:52214491 ',     
      parag2:'Email:farahweslati@gmail.com ',             
      parag3:'linkedin :https://www.linkedin.com/in/farah-weslati-52a5571bb/' ,
      parag4:'Twitter :https://twitter.com/?lang=fr' ,
      parag5:'Facebbok:https://www.facebook.com/' ,
    }),  
}
</script>

<style>

</style>
<template>
<navbar-view/>
<v-container align="center">
<h5 class="text-h5  font-italic" style=" color:blueviolet"><img src="https://i.pinimg.com/originals/58/54/cc/5854ccbf23126f8d56c0347624f9f312.gif" style="width:100px ;height:100px"> Welcome to The AdminPanel</h5>
</v-container>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://www.mcicon.com/wp-content/uploads/2021/01/People_User_1.jpg"
            title="Admin Admin"
            subtitle="Admin-Admin@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" color="#81C784" title="Gestion Users" value="Gestion Users"></v-list-item><br>
          <v-list-item prepend-icon="mdi-account-multiple" color="#81C784" title="Gestion Entreprises" value="shared"></v-list-item><br>
          <v-list-item prepend-icon="mdi-star"  color="#81C784" title="Gestion offres" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 350px"></v-main>
    </v-layout>
  </v-card>
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
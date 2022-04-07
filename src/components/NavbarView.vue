<template>

    <v-toolbar dense  app color="transparent">
      <v-toolbar-title class="text-uppercase-title" ><router-link to="/">CATCH IT </router-link> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
      class="flex-row"  
      right="22em"
      rounded
      color="grey"
      dark
      to="/"
    > <v-icon color="grey">mdi-volume-high</v-icon>
    Publier Poste
    </v-btn>
     <v-btn 
      right="45em"
      rounded
      color="grey"
      dark
      to="/"
    > <v-icon color="grey">mdi-volume-high</v-icon>
    chercher 
    </v-btn>
 <v-btn 
      rounded
      color="grey"
      dark
      to="/PostuleCv"
    > <v-icon color="grey">mdi-tab-plus</v-icon>
    Postuler votre CV
    </v-btn>
       <v-btn 
      rounded
      color="green"
      dark
      to="/SignIn"
    >
    Sign In
    </v-btn>

        <v-btn class="v-btn-signIn"
      rounded
      color="white"
      dark
         to="/SignUp"
    >
   Sign Up
    </v-btn>
    </v-toolbar>
    <v-img src="test.jpg" style="width:100px"></v-img>
</template>
<script>
export default {
    
}
</script>
<style>
.text-uppercase-title{

background-color: transparent;
}
.v-btn-signIn{
  background-color: rgb(11, 155, 11);
}
p{
  font-size: 19;
  font-family: cursive;
  margin: 25px 0px;
}
</style>
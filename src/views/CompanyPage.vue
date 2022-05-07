<template>
<navbar-view/>
<v-container align="center">
<h5 class="text-h4  font-italic" style="color:darkslateblue"><v-icon>mdi-card-text-outline</v-icon>Voici le profil du société</h5>
<img src="https://www.codeyourbusiness.com/img/logo.jpg" style="height:200px; width:200px border:bold">
<p class="text-h6 font-italic" style="color:dodgerblue">Welcome to  Catch It profil!</p>
</v-container>
<v-container>
    <h6  style="color:brown"> <v-icon>mdi-pencil-outline</v-icon> to know us more:</h6>
    <p> Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a</p>
</v-container>
<v-container>
 <h6  style="color:brown"> <v-icon>mdi-comment-processing-outline</v-icon> Here you can find more details:</h6> 
 <v-row>
     <v-col cols="12" md="3"></v-col>
     <v-col cols="12" md="4">
     <p><v-icon color="green">mdi-web</v-icon>catchit@gmail.com</p>
      <p><v-icon color="green">mdi-teach</v-icon>catchit foundation</p>
     </v-col>
       <v-col cols="12" md="4">
     <p><v-icon color="green">mdi-account-tie</v-icon>244 Employees</p>
      <p><v-icon color="green">mdi-map</v-icon>our Headquarts is in Tunis</p>
     </v-col>
     <v-row>
         <v-col cols="12" md="5">
         </v-col>
         <v-col cols="12" md="6">
  <p><v-icon color="green">mdi-map-marker</v-icon>Our Location is in Nabeul</p>
         </v-col>
     </v-row>
 </v-row>  
</v-container>
<v-container>
  <h6  style="color:brown"> <v-icon>mdi-webpack</v-icon> Here are our social Media Pages:</h6>    
  <v-row>
      <v-col cols="12" md="3">
        <p><v-icon color="green">mdi-linkedin</v-icon>https://www.linkedin.com/</p>
        </v-col>
          <v-col cols="12" md="3">
        <p><v-icon color="green">mdi-facebook</v-icon>https://www.Facebook.com/</p>
        </v-col>
          <v-col cols="12" md="3">
        <p><v-icon color="green">mdi-twitter</v-icon>https://www.Twitter.com/</p>
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
  components: { NavbarView, FooterView },
    
}
</script>



<style>

</style>
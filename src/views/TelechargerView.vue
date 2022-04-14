<template>
    <div>
        <navbar-view/>
        <v-container fluid style=" margin-top:50px">
<div>
	<center>
		<form style="max-width:450px;margin:auto;">
            <div>
            <v-img src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" style="width:150px ;height:150px"> </v-img>
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
    </v-container>
    <v-divider></v-divider>
        <footer-view/>
    </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { NavbarView, FooterView },
    
}
</script>
<style>
.input-icons i {
            position: absolute;
        }
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }
          
        .icon {
            padding: 10px;
            color: green;
            min-width: 50px;
            text-align: center;
        }
          
        .input-field {
            width: 100%;
            padding: 10px;
            text-align: center;
        }
          
        h2 {
            color: green;
        }
</style>
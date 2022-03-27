<template>
  <v-container style="margin-top:-30px">
      <div class="shape1"></div>
            
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">         
               <v-row >
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center"
                        >Sign Up for an Account</h1>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Company Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                         input type="password" id="pass" name="password"
           minlength="8" required
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            label="CEO Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            label="website"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            label="phone Number"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"             />
                           </v-col>
                            <v-col cols="12" sm="6">
                            <v-text-field
                            label="adresse"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                             <v-col cols="12" sm="6">
                            <v-text-field
                            label="Logo"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          input type="file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
                          />
                           </v-col>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            label="Description"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            label="Identifiant-unique"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                               <v-col cols="12" sm="6">
                            <v-text-field
                            label="Activity"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           
                           
                           </v-row>
                        
                        <v-btn color="dark"  dark block tile>Sign up</v-btn> <br>
                    <div align="center" justify="center" > 
                          <v-btn  style="background-color: rgb(15, 128, 209) ; width:350px ; border-radius:30px" color="white " ><v-icon>mdi-facebook</v-icon> Facebook</v-btn> <br>
                          <br>
                           <v-btn  style="background-color: rgb(248, 64, 80); width:350px ; border-radius:30px" color="white" ><v-icon>mdi-google</v-icon> Google</v-btn> <br>
                           <br>
                             <v-btn  style="background-color: black ; width:350px ; border-radius:30px" color="white" ><v-icon>mdi-github</v-icon> Github</v-btn>
                     
                      </div>                       
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
  
  export default {
   data: () => ({
    step: 1
  }),
  props: {
    source: String
  } 
    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}

</style>
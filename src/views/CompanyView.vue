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
                            label="Website"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>                      
                           </v-row>
                        
                        <v-btn color="dark"  dark block tile>Sign up</v-btn> <br>                     
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
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">Akun</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-navigation-drawer color="blue darken-4" v-model="drawer" app dark>
        <v-list dense>
          <v-subheader class="mb-4">
            <b>NAVIGASI</b>
          </v-subheader>
          <v-divider></v-divider>
          <v-list-item-group v-model="item">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-tachometer-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>DASHBOARD</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-database</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>DATA BARANG</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-database</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>DATA BARANG</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-database</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>DATA BARANG</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-container>
      
             <router-view />
   
        
      </v-container>
    </v-content>
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; Rohim Mustofa {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>


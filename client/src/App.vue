<template>
  <v-app>
    <v-navigation-drawer app>
    <v-list>
      <v-list-item link>
        <router-link exact active-class="active" to="/user" tag="li">user</router-link>
      </v-list-item>
      <v-list-item link>
        <router-link exact active-class="active" to="/operator" tag="li">operator</router-link>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-icon>mdi-github-box</v-icon>
      <a href="https://github.com/coldrain96/webservice-fullstack" target="_blank">webservice-fullstack-app</a>
    </v-app-bar>

    <v-content>

      <v-container fluid>

        <router-view/>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
</script>

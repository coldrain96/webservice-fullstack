<template>
  <v-app>
    <v-navigation-drawer app>
    <v-list>
      <v-list-item link>
        <router-link exact active-class="active" to="/" tag="li">index</router-link>
      </v-list-item>
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
      <router-link to="">webservice-fullstack-app</router-link>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ['/', '/user', '/operator'],
  }),
};
</script>

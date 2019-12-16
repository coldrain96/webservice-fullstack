<template>
  <div>
  <h1>operator</h1>
      <v-btn>Download users data</v-btn>

    <v-btn
      @click="switchCurrentTable('guestsTable')"
    >
      Guests Table
    </v-btn>
    <v-btn
      @click="switchCurrentTable('quizTable')"
    >
      Quiz Table
    </v-btn>

    <component :is="currentTable"></component>

  </div>
</template>

<script>
import guestsTable from '@/components/guestsTable.vue';
import quizTable from '@/components/quizTable.vue';

export default {
  components: {
    guestsTable,
    quizTable,
  },
  data: () => ({
    guestsTableActive: true,
    quizTableActive: false,
    currentTable: guestsTable,
  }),
  methods: {
    switchCurrentTable(view) {
      this.currentTable = view;
    },
  },
};
</script>
<style lang="scss">
  button {
    margin: 0 10px 0 10px;
  }
</style>

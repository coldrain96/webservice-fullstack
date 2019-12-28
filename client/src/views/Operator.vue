<template>
  <div>
  <h1>operator</h1>
      <v-btn @click="toExport">
        Download users data
      </v-btn>
    <v-btn @click="updateData">
      Update data
    </v-btn>
    <v-btn @click="switchCurrentTable('guestsTable')">
      Guests Table
    </v-btn>
    <v-btn @click="switchCurrentTable('quizTable')">
      Quiz Table
    </v-btn>

    <component :is="currentTable"></component>

  </div>
</template>

<script>
import XLSX from 'xlsx';
import { mapGetters } from 'vuex';
import guestsTable from '@/components/operator/guestsTable.vue';
import quizTable from '@/components/operator/quizTable.vue';

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
  mounted() {
    this.updateData();
  },
  computed: mapGetters([
    'currentLocalDate',
  ]),
  methods: {
    switchCurrentTable(view) {
      this.currentTable = view;
    },
    toExport() {
      const guestsWS = XLSX.utils.json_to_sheet(this.$store.guestsArr);
      const quizWS = XLSX.utils.json_to_sheet(this.$store.quizArr);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, guestsWS, 'По гостям');
      XLSX.utils.book_append_sheet(wb, quizWS, 'По вопросам');
      XLSX.writeFile(wb, `Отчет за ${this.currentLocalDate}.xlsx`);
    },
    updateData() {
      this.$store.dispatch('getResponseArr');
    },
  },
};

</script>

<style lang="scss">
  button {
    margin: 0 10px 0 10px;
  }
</style>

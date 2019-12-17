<template>
  <div>
  <h1>operator</h1>
      <v-btn @click="toExport">
        Download users data
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
import Service from '@/service/service';
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
    guestsArr: [],
    quizArr: [],
  }),
  created() {
    this.getResponseArr();
  },
  methods: {
    switchCurrentTable(view) {
      this.currentTable = view;
    },
    async getResponseArr() {
      const response = await Service.fetchBackendArr();
      const [guestsArr, quizArr] = response.data;
      this.guestsArr = guestsArr;
      this.quizArr = quizArr;
    },
    localDate() {
      const d = new Date();
      const split = `${d.getFullYear()}-${d.getDate()}-${d.getMonth() + 1}`;
      return split;
    },
    toExport() {
      const guestsWS = XLSX.utils.json_to_sheet(this.guestsArr);
      const quizWS = XLSX.utils.json_to_sheet(this.quizArr);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, guestsWS, 'По гостям');
      XLSX.utils.book_append_sheet(wb, quizWS, 'По вопросам');
      XLSX.writeFile(wb, `Отчет за ${this.localDate()}.xlsx`);
    },
  },
};

</script>

<style lang="scss">
  button {
    margin: 0 10px 0 10px;
  }
</style>

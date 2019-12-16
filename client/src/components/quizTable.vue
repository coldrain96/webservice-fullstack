<template>
  <v-data-table
    style="margin-top: 15px"
    :headers="headers"
    :items="quizArr"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import Service from '@/service/service';

export default {
  data: () => ({
    quizArr: [],
    headers: [
      {
        text: 'Дата',
        align: 'left',
        sortable: false,
        value: 'Дата',
      },
      { text: 'Тип', value: 'Тип' },
      { text: 'Вопрос', value: 'Вопрос' },
      { text: 'Количество респондентов', value: 'Количество респондентов' },
      { text: 'Общее количество голосов', value: 'Общее количество голосов' },
      { text: 'A', value: 'A' },
      { text: 'B', value: 'B' },
      { text: 'C', value: 'C' },
    ],
  }),
  mounted() {
    this.getResponseArr();
  },
  methods: {
    async getResponseArr() {
      const response = await Service.fetchBackendArr();
      const [, quizArr] = response.data;
      this.quizArr = quizArr;
      console.log(response.data);
    },
  },
};
</script>

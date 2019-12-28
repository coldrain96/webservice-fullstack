<template>
  <v-data-table
    style="margin-top: 15px"
    :headers="headers"
    :items="allQuiz"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
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
  computed: mapGetters(['allQuiz']),
};
</script>

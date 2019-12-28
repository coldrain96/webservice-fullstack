<template>
  <v-data-table
    style="margin-top: 15px"
    :headers="headers"
    :items="allGuests"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    headers: [
      {
        text: 'Дата презентации',
        align: 'left',
        sortable: false,
        value: 'Дата Презентации',
      },
      { text: 'Фамилия', value: 'Фамилия' },
      { text: 'Имя', value: 'Имя' },
      { text: 'Отчество', value: 'Отчество' },
      { text: 'Место работы', value: 'Место работы' },
      { text: 'Email', value: 'email' },
      { text: 'Телефон', value: 'телефон' },
      { text: 'Регистрация', value: 'Регистрация' },
      { text: 'Опрос 1', value: 'Опрос 1' },
      { text: 'Опрос 2', value: 'Опрос 2' },
      { text: 'Опрос 3', value: 'Опрос 3' },
      { text: 'Опрос 4', value: 'Опрос 4' },
    ],
  }),
  computed: {
    allGuests() {
      return this.$store.getters.allGuests;
    },
  },
  // async mounted() {
  //   this.$store.dispatch('getResponseArr');
  // },
};
</script>

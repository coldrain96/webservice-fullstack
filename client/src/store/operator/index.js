import Service from '@/service/service';

export default {
  state: {
    guestsArr: [],
    quizArr: [],
    d: new Date(),
  },
  getters: {
    currentLocalDate(state) {
      return `${state.d.getFullYear()}-${state.d.getDate()}-${state.d.getMonth() + 1}`;
    },
    allGuests(state) {
      return state.guestsArr;
    },
    allQuiz(state) {
      return state.quizArr;
    },
  },
  mutations: {
    updateGuestsArr(state, [guestsArr, quizArr]) {
      state.guestsArr = guestsArr;
      state.quizArr = quizArr;
    },
  },
  actions: {
    async getResponseArr(context) {
      const response = await Service.fetchBackendArr();
      const [guestsArr, quizArr] = response.data;
      this.guestsArr = guestsArr;
      this.quizArr = quizArr;
      context.commit('updateGuestsArr', [guestsArr, quizArr]);
    },
  },
};

import api from '@/service/api';

export default {
  fetchBackendArr() {
    return api().get('response');
  },
};

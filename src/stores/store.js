import { createStore } from 'vuex'
import gateway from '@/api/gateway'

export default createStore({
    state: {},
    mutations: {},
    actions: {
        prosesRequestQuestions(context, method, data) {
            try {
                const response = gateway.prosesRequestQuestions(data, method);
                return response.data;
            } catch (error) {
                throw error;
            }
        }
    }
})

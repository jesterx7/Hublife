import { createStore } from 'vuex'
import gateway from '@/api/gateway'

export default createStore({
    state: {},
    mutations: {},
    actions: {
        prosesRequestQuestions(context, method, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestQuestions(data, method)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        }
    }
})

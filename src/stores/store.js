import { createStore } from 'vuex'
import gateway from '@/api/gateway'

export default createStore({
    state: {
        backgroundValue: null,
        profile: null,
    },
    mutations: {
        updateBackground(state, _backgroundValue) {
            state.backgroundValue = _backgroundValue;
        },
        updateProfile(state, _profile) {
            state.profile = _profile;
        }
    },
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
        },
        prosesRequestCareers(context, method, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestCareers(method, data)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        prosesRequestElementQuestions(context, seq, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestElementQuestions(seq, data)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        prosesRequestValues(context, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestValues(data)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        prosesRequestActions(context, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestActions(data)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
        prosesRequestFormHeader(context, data) {
            return new Promise((resolve, reject) => {
                gateway.prosesRequestFormHeader(data)
                    .then(res => {
                        const data = res
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
            })
        },
    }
})

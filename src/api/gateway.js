"use strict"
import axios from "axios"

const URL_PREFIX = import.meta.env.VITE_BASE_URL;
const URL_QUESTIONS = URL_PREFIX + import.meta.env.VITE_QUESTIONS_URL;
const URL_CAREERS = URL_PREFIX + import.meta.env.VITE_CAREERS_URL;
const URL_ELEMENT_QUESTIONS = URL_PREFIX + import.meta.env.VITE_ELEMENT_QUESTIONS_URL;
const URL_VALUES = URL_PREFIX + import.meta.env.VITE_VALUES_URL;
const URL_ACTIONS = URL_PREFIX + import.meta.env.VITE_ACTIONS_URL;

export default {
	prosesRequestQuestions(method, data) {
		switch (method) {
            case "post":
                return axios.post(`${URL_QUESTIONS}`, data);
            default:
                return axios.get(`${URL_QUESTIONS}`, data);
        }
	},
    prosesRequestCareers(method, data) {
		switch (method) {
            case "post":
                return axios.post(`${URL_CAREERS}`, data);
            default:
                return axios.get(`${URL_CAREERS}`, data);
        }
	},
    prosesRequestElementQuestions(seq, data) {
		return axios.get(`${URL_ELEMENT_QUESTIONS}/${seq}`, data);
	},
    prosesRequestValues(data) {
		return axios.get(`${URL_VALUES}`, data);
	},
    prosesRequestActions(data) {
		return axios.get(`${URL_ACTIONS}`, data);
	},
}
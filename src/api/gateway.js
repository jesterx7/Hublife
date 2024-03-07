"use strict"
import axios from "axios"

const URL_PREFIX = import.meta.env.VITE_BASE_URL;
const URL_QUESTIONS = URL_PREFIX + import.meta.env.VITE_QUESTIONS_URL;

export default {
	prosesRequestQuestions(method, data) {
		switch (method) {
            case "post":
                return axios.post(`${URL_QUESTIONS}`, data);
            default:
                return axios.get(`${URL_QUESTIONS}`, data);
        }
	}
}
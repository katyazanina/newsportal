import { defineStore } from "pinia";
import Repositories from "@/repositories";

export const useNewsStore = defineStore("news", {
	state: () => ({
		menu: [],
		content: [],
		error: "",
		detail: {}
	}),
	actions: {
		async getMenu() {
			try {
				const { data } = await Repositories.news.getSectionList();
				this.menu = data.results || [];
			} catch (e) {
				this.error = e.message;
			}
		},
		async getTop(code) {
			try {
				const { data } = await Repositories.news.getTop(code);
				this.content = data.results || [];
			} catch (e) {
				this.error = e.message;
			}
		},
		async getSection(code) {
			try {
				const { data } = await Repositories.news.getSection(code);
				this.content = data.results || [];
			} catch (e) {
				this.error = e.message;
			}
		},
		async getDetail(code) {
			try {
				const { data } = await Repositories.news.getSection(code);
				this.detail = data.results || [];
			} catch (e) {
				this.error = e.message;
			}
		}
	},
	getters: {},
});

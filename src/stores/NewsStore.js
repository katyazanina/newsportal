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
				
				this.error = "";
			} catch (e) {
				this.error = e.message;
			}
		},
		async getTop(code) {
			try {
				const { data } = await Repositories.news.getTop(code);

				this.content = data.results || [];
				
				this.error = "";
			} catch (e) {
				this.error = e.message;
			}
		},
		async getSection({path, query}) {
			try {
				const params = query || {};
				const { data } = await Repositories.news.getSection({ path, params });
				const results = data.results || [];
				this.content = [...this.content, ...results] || [];	

				this.error = "";
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

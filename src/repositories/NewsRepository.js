const resource = ".json";

export default (Axios) => ({
	getTop(code) {
		return Axios.get(`/topstories/v2/${code}${resource}`)
	},
	getSectionList() {
		return Axios.get(`/news/v3/content/section-list${resource}`)
	},
	getSection({path, params}) {
		return Axios.get(`/news/v3/content/all/${path}${resource}`, { params } )
	},
	// TODO: AddDetail repo
	getDetail(path) {
		return Axios.get(`https://www.nytimes.com${path}.html` )
	}
})
import Axios from "@/plugins/axios.js";

import NewsRepository from "./NewsRepository";

export default {
	news: NewsRepository(Axios),
};

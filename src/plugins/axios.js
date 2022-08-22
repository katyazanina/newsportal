import axios from "axios";

const API_KEY = "swtVfUImfjRM1EdATRmt19VTTF1jBaE4";

export default axios.create({
	baseURL: "https://api.nytimes.com/svc",
	params: {
		"api-key": API_KEY
	}
});

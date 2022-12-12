import { computed } from "vue";

class DataFromProps {
	constructor(props) {
		this.props = props;
	}

	getImage() {
		const image = computed(() => {
			if (this.props.multimedia) {
				let arr = [...this.props.multimedia];

				arr = arr.sort(function (a, b) {
					return b.width - a.width;
				});

				return arr[0].url;
			} else {
				return "";
			}
		});

		return image;
	}

	getLink() {
		const link = computed(() => {
			if (this.props.url) {
				var url = new URL(this.props.url);
				return url.pathname.replace(/.html/g, "");
			} else {
				return "";
			}
		});

		return link;
	}
}

export { DataFromProps };

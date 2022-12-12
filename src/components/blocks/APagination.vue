<template>
<span
	class="fs-title-3 text-center"
	ref="more"
	v-if="pagination !== max">
	{{ error || 'Loading...' }}
</span>
</template>

<script setup>
import {useRouter, useRoute } from "vue-router";
import { ref, defineProps } from "vue";

const router = useRouter();
const route = useRoute();

const props = defineProps({
	max: {
		type: Number,
		required: true,
	},
	offset: {
		type: Number,
		required: true,
	}
});

const more = ref(null);

const pagination = ref(Number(route.query.offset) + props.offset || props.offset);

intersectionObserver.observe(more.value);
// TODO: Add directive
const intersectionObserver = new IntersectionObserver((entries) => {
	if (entries[0].intersectionRatio <= 0) return;
	loadMore();
});

async function loadMore() {
	const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

	delay(1800)
		.then(() => {
			router.push({ query: { offset: pagination.value } });

			const result = pagination.value + props.offset;
			pagination.value = result.value > props.max ? props.max : result;
		});
}

</script>

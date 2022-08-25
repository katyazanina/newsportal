<template>
	<!-- <img :src="detail.thumbnail_standard" :alt="detail.title" />
	<p class="fs-title-1">{{ detail.title }}</p>
	<div class="d-block text-bg-grey">{{ detail.abstract }}</div> -->
	<section class="section">
		{{ code}}
		{{ detail }}
		{{ error }}
	</section>
	
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import { defineProps } from "vue";

const store = useNewsStore();
const { detail, error } = storeToRefs(store);

const props = defineProps({
	code: {
		type: Array,
		required: true,
	},
});

async function init() {
	await store.getDetail(props.code);
}

init();
</script>

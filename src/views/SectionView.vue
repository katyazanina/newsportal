<template>
	<div class="row">
		<div v-for="item in content" :key="item.slug_name" class="col-12 col-sm-4">
			<router-link :to="{ name: 'detail', params: { code: item.url }}">
				<img :src="item.thumbnail_standard" :alt="item.title">
				<p class="fs-title-1">{{item.title}}</p>
				<div class="d-block text-bg-grey">{{item.abstract}}</div>
			</router-link>
		</div>
	</div>

	<div> {{ error }}</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";
import { defineProps } from "vue";

const store = useNewsStore();
const { content, error } = storeToRefs(store);

const props = defineProps({
	code: {
		type: String,
		required: true
	}
})

async function init() {
	await store.getSection(props.code);
}

init();



</script>
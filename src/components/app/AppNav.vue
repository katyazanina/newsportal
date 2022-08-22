<template>
	<button>
		<span>-</span>
		<span>-</span>
		<span>-</span>
	</button>
	<nav class="d-none">
		<ul>
			<li v-for="item in menu" :key="item.section">
				<ALink :to="{ name: 'section', params: { code: item.section }}">{{ item.display_name }}</ALink>
			</li>
		</ul>
	</nav>
</template>


<script setup>
import { storeToRefs } from "pinia";
import { useNewsStore } from "@/stores/NewsStore";

const store = useNewsStore();
const { menu } = storeToRefs(store);
</script>
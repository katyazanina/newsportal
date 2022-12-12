<template>
	<AppLayout>
		<router-view v-slot="{ Component }">
			<!-- <transition> -->
				<component :is="Component" :key="route.path"></component>
			<!-- </transition> -->
		</router-view>
	</AppLayout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout";
import { useNewsStore } from "@/stores/NewsStore";
import { useRoute } from "vue-router";

const store = useNewsStore();

const route = useRoute();

async function init() {
	await store.getMenu();
}

init();

</script>

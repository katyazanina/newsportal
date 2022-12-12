<template>
	<router-link class="app-nav__button" :to="{name: menu}" @click="goBack">
		<span></span>
		<span></span>
		<span></span>
	</router-link>
</template>

<script setup>
import {  ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const menu = ref("menu");

function goBack () {
	if(route.name === menu.value) {
		router.go(-1);
	}
}
</script>

<style lang="scss">
.app-nav__button {
	width: 2rem;
	height: 2rem;

	position: relative;

	& span {
		position: absolute;
		
		left: 0;

		width: 100%;
		height: 0.2rem;

		background-color: color(main-black);
		transition: all 0.5s ease;

		&:first-child {
			top: 0;
		}

		&:nth-child(2) {
			top: 50%;
			transform: translateY(-50%);
		}

		&:last-child {
			bottom: 0;
		}

	}

	&.router-link-active {

		& span {
			&:first-child {
				top: 50%;
				transform: translateY(-50%) rotate(45deg);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:last-child {
				bottom: auto;
				top: 50%;
				transform: translateY(-50%) rotate(-45deg);
			}
		}
	}
}
</style>

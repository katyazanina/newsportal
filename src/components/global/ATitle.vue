<template>
  <component :is="`h${is}`" class="fw-bold" :class="[`fs-title-${is}`, `mb-${64 / is}`]"><slot/></component>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
	is: {
		type: Number,
		required: true
	},
});
</script>

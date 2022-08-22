<template>
  <component :is="`h`" class="fs-title-1 fw-bold mb-64"><slot/></component>
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

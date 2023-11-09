<template>
  <productItem v-for="product in products" :key="product.id" cols="4" :product="product"></productItem>
</template>
<script setup>
import productItem from "./productItem.vue"
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss"></style>

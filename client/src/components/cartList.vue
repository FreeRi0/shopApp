<template>
  <CartItem
    v-if="products.length > 0"
    v-for="product in products"
    :key="product.id"
    :product="product"
  ></CartItem>
  <p v-else>You haven't added anything to your cart yet</p>
</template>
<script setup>
import CartItem from "./cartItem.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss"></style>

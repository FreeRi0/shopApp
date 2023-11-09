<template>
  <v-main>
    <v-col>
      <h2 class="text-center">Cart</h2>
      <v-row> <cartList :products="cartItems"></cartList></v-row>
      <div class="d-flex justify-space-between align-center pt-6">
        <h3>Total: ${{ totalPrice }}</h3>
        <v-btn color="primary">Proceed to Checkout</v-btn>
      </div>
    </v-col>
  </v-main>
</template>
<script setup>
import { cartItems } from "@/goods";
import { ref, computed } from "vue";
import cartList from "@/components/cartList.vue";

const totalPrice = computed(() => {
  return cartItems.reduce((sum, item) => sum + Number(item.price), 0);
});
</script>
<style lang="scss" scoped>
</style>

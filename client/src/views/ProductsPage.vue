<template>
  <v-main>
    <v-row>
      <products-list :products="products"></products-list>
    </v-row>
  </v-main>
</template>
<script setup>
import { products } from "@/goods";
import productsList from  "@/components/productsList.vue"
</script>
<style lang="scss"></style>

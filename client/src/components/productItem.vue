<template>
  <v-col>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="align-end"
        height="300"
        :src="product.photo"
        alt="logo"
        cover
      >
      </v-img>

      <v-card-text class="d-flex justify-space-between">
        <h3>{{ product.name }}</h3>

        <div>${{ product.price }}</div>
      </v-card-text>

      <v-card-actions>
        <router-link :to="'/products/' + product.id">
          <v-btn color="primary"> View Details </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    require: true
  }
});
</script>
<style lang="scss"></style>

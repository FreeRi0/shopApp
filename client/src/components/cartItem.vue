<template >
 <v-col cols="12">
    <v-card color="primary">
      <div class="d-flex flex-no-wrap justify-space-between align-center">
        <div>
          <v-card-title class="text-h5">
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle>${{ product.price }}</v-card-subtitle>

          <v-card-actions>
            <v-btn class="ms-2" variant="outlined" size="small">
              Remove from cart
            </v-btn>
          </v-card-actions>
        </div>

        <v-avatar class="ma-3" size="150" rounded="0">
          <v-img :src="product.photo"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    require: true
  }
})
</script>
<style lang="scss">

</style>
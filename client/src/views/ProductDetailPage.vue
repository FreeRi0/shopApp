<template>
  <v-main>
    <v-col>
      <v-row justify="space-around" v-if="product">
        <v-card width="400">
          <v-img height="300" :src="product.photo" cover> </v-img>
          <v-card-text class="d-flex justify-space-between">
            <h3>{{ product.name }}</h3>

            <div>${{ product.price }}</div>
          </v-card-text>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div>{{ product.desc }}</div></v-row
            ></v-card-text
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="product.rating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">{{ product.rating }}</div>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary"> Add to Cart </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <NotFound v-else></NotFound>
    </v-col>
  </v-main>
</template>
<script setup>
import { products } from "@/goods";
import NotFound from "./NotFound.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();

const product = products.find((p) => p.id === route.params.id);
</script>
<style lang="scss"></style>

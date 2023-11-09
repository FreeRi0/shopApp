<template>
  <v-app-bar flat color="primary">
    <v-container class="mx-auto d-flex align-center justify-center">
      <router-link to="/">
        <v-avatar
          class="me-4"
          color="white"
          size="32"
          icon="mdi-augmented-reality"
        ></v-avatar
      ></router-link>

      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <router-link to="/cart" class="cart">
          <v-col cols="auto">
            <v-btn density="default" icon="mdi-cart"></v-btn>
          </v-col>
        </router-link>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
<script setup>
const links = ["About", "Dasboard"];
</script>
<style lang="scss">
.cart {
  color: white;
}
</style>

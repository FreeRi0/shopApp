<template>
  <v-app>
    <navbar></navbar>
    <v-container>
      <default-view />
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import navbar from "@/components/navbar.vue";
</script>

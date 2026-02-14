//npx nuxi@latest module add vuetify-nuxt-module
<template>
  <v-app>
    <NavBarByTab />
    <v-main class="mt-n8">
      <nuxt-page></nuxt-page>
    </v-main>

    <WhatsappHelpDesk />
    <ScrollToTop />
    <AppFooter />
  </v-app>
</template>
<script setup>
import NavBarByTab from "~/components/NavBars/ProNavBarByTab.vue";
</script>

<style scoped></style>

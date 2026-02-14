<template>
  <v-card
    class="portfolio-item"
    elevation="4"
    rounded="lg"
    height="100%"
    :href="link"
    target="_blank"
  >
    <NuxtImg
      :src="imageUrl"
      :alt="title"
      cover
      height="250"
      class="portfolio-image"
      format="webp"
      densities="x1"
    >
    </NuxtImg>
    <v-card-item class="pa-4">
      <v-card-title class="text-h6 font-weight-bold mb-2 pa-0">
        {{ title }}
      </v-card-title>
      <v-card-text class="text-body-2 text-medium-emphasis pa-0">
        {{ description }}
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
</script>

<style scoped>
.portfolio-item {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  overflow: hidden;
}

.portfolio-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2) !important;
}

.portfolio-image {
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.05);
}
</style>

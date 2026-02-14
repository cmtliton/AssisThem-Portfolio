<template>
  <v-container class="services-section">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">
          How We Can Help Your Business
        </h2>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col
        cols="12"
        md="6"
        class="mb-4 mb-md-0"
        v-for="(item, index) in items"
        :index="index"
      >
        <v-card class="service-card" elevation="4" rounded="lg" height="100%">
          <v-card-item class="pa-6">
            <template v-slot:prepend>
              <v-avatar color="primary" size="64" class="mb-4">
                <v-icon :icon="item.icon" size="32" color="white"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5 font-weight-bold mb-3 text-wrap">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="text-body-1 text-medium-emphasis">
              {{ item.text }}
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Services Section Component
const items = [
  {
    id: 1,
    title: "Headless WooCommerce Store Design-The Future of Retail",
    subtitle: "Don't Just Build a Store, Build a High-Performance Asset.",
    text: " We build modern, fast, and mobile-friendly online stores. A good design helps customers trust you and makes your products look great.",
    icon: "mdi-store",
    status: true,
  },
  {
    id: 2,
    title: "Facebook Ads & Marketing",
    subtitle: "",
    text: " A beautiful store needs customers. We use targeted Facebook Ads to find the right people for your products and bring them to your website.",
    icon: "mdi-bullhorn",
    status: true,
  },
  {
    id: 3,
    title: "Portfolio Website for Everyone",
    subtitle: "",
    text: " We create stunning, professional portfolio websites for individuals and businesses to showcase their work and skills effectively.",
    icon: "mdi-briefcase-outline",
    status: true,
  },
  {
    id: 4,
    title: "Landing Page Design",
    subtitle: "",
    text: "A great landing page can turn visitors into paying customers.Transform Your Business with a High-Converting Landing Page",
    icon: "mdi-rocket-launch",
    status: true,
  },
];
</script>

<style scoped>
.services-section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 960px) {
  .services-section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>

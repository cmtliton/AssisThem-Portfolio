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
      <v-col cols="12" md="6" class="mb-4 mb-md-0">
        <v-card
          class="service-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <template v-slot:prepend>
              <v-avatar
                color="primary"
                size="64"
                class="mb-4"
              >
                <v-icon
                  icon="mdi-store"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5 font-weight-bold mb-3">
              WooCommerce Store Design
            </v-card-title>
            <v-card-text class="text-body-1 text-medium-emphasis text-justify">
              We build modern, fast, and mobile-friendly online stores. A good design helps customers trust you and makes your products look great.
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card
          class="service-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <template v-slot:prepend>
              <v-avatar
                color="primary"
                size="64"
                class="mb-4"
              >
                <v-icon
                  icon="mdi-bullhorn"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5 font-weight-bold mb-3">
              Facebook Ads & Marketing
            </v-card-title>
            <v-card-text class="text-body-1 text-medium-emphasis text-justify">
              A beautiful store needs customers. We use targeted Facebook Ads to find the right people for your products and bring them to your website.
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card
          class="service-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <template v-slot:prepend>
              <v-avatar
                color="primary"
                size="64"
                class="mb-4"
              >
                <v-icon
                  icon="mdi-briefcase-outline"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="text-h5 font-weight-bold mb-3">
              Portfolio Website for Everyone
            </v-card-title>
            <v-card-text class="text-body-1 text-medium-emphasis text-justify">
              We create stunning, professional portfolio websites for individuals and businesses to showcase their work and skills effectively.
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
// Services Section Component
</script>

<style scoped>
.services-section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

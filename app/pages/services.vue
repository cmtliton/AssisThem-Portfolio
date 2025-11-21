<template>
  <v-container class="services-page">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">
          Our Services for Your Business
        </h1>
      </v-col>
    </v-row>
    
    <v-row>
      <!-- WordPress & WooCommerce Store Design Section -->
      <v-col cols="12" md="6" class="mb-6 mb-md-0">
        <v-card
          class="service-section-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar
                color="primary"
                size="64"
                class="mr-4"
              >
                <v-icon
                  icon="mdi-store"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
              <v-card-title class="text-h5 font-weight-bold pa-0">
               WooCommerce Store Design
              </v-card-title>
            </div>
            <v-list class="pa-0">
              <v-list-item
                v-for="(feature, index) in storeDesignFeatures"
                :key="index"
                class="px-0"
              >
                <template v-slot:prepend>
                  <v-icon
                    icon="mdi-check-circle"
                    color="success"
                    class="mr-3"
                  ></v-icon>
                </template>
                <v-list-item-title class="text-body-1">
                  {{ feature }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-item>
        </v-card>
      </v-col>
      
      <!-- Facebook Ads & Marketing Section -->
      <v-col cols="12" md="6">
        <v-card
          class="service-section-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar
                color="primary"
                size="64"
                class="mr-4"
              >
                <v-icon
                  icon="mdi-bullhorn"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
              <v-card-title class="text-h5 font-weight-bold pa-0">
                Facebook Ads & Marketing
              </v-card-title>
            </div>
            <v-list class="pa-0">
              <v-list-item
                v-for="(feature, index) in marketingFeatures"
                :key="index"
                class="px-0"
              >
                <template v-slot:prepend>
                  <v-icon
                    icon="mdi-check-circle"
                    color="success"
                    class="mr-3"
                  ></v-icon>
                </template>
                <v-list-item-title class="text-body-1">
                  {{ feature }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <!-- Portfolio Website Design Section -->
      <v-col cols="12">
        <v-card
          class="service-section-card"
          elevation="4"
          rounded="lg"
        >
          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-avatar
                color="primary"
                size="64"
                class="mr-4"
              >
                <v-icon
                  icon="mdi-application-brackets-outline"
                  size="32"
                  color="white"
                ></v-icon>
              </v-avatar>
              <v-card-title class="text-h5 font-weight-bold pa-0">
                Portfolio Website Design for Everyone
              </v-card-title>
            </div>
            <p class="text-body-1 mb-4">
              Crafted with lightweight Vue.js components so your personal or agency portfolio loads instantly and feels modern on every device.
            </p>
            <v-list class="pa-0">
              <v-list-item
                v-for="(feature, index) in portfolioFeatures"
                :key="index"
                class="px-0"
              >
                <template v-slot:prepend>
                  <v-icon
                    icon="mdi-briefcase-outline"
                    color="success"
                    class="mr-3"
                  ></v-icon>
                </template>
                <v-list-item-title class="text-body-1">
                  {{ feature }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const storeDesignFeatures = [
  'Custom design that matches your brand',
  'Responsive layout (mobile, tablet, desktop)',
  'Easy payment setup (BKash, Nogod, Paypal, Stripe, etc.)',
  'Product uploads and category setup',
  'Fast website',
  'Basic SEO (Keywords, Meta tags, etc.)'
]

const marketingFeatures = [
  'Finding your target audience',
  'Creating good ads',
  'Managing campaigns',
  'Simple reports'
]

const portfolioFeatures = [
  'Vue.js SPA with reusable components and transitions',
  'Optimized bundles for lightning-fast load times',
  'Dark/light friendly UI with accessible color choices',
  'SEO-ready routing, meta tags, and Open Graph previews',
  'Easy CMS/data hookup for dynamic project galleries'
]
</script>

<style scoped>
.services-page {
  padding-top: 80px;
  padding-bottom: 80px;
}

.service-section-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 960px) {
  .services-page {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>

<script setup lang="ts">
/**
 * SEO & Meta Management
 * Nuxt 4 uses useSeoMeta for best-in-class performance and type safety.
 */
useSeoMeta({
  title: "Premium Web Services | Headless WooCommerce & Marketing Analytics",
  ogTitle: "Premium Web Services | High-Performance Digital Solutions",
  description:
    "Specializing in Nuxt.js 4 Headless WooCommerce, High-Converting Landing Pages, and Meta/Facebook Ads with Server-Side Tracking.",
  ogDescription:
    "Transform your retail business with ultra-fast Headless stores and data-driven marketing.",
  ogImage: "https://assisthem.netlify.app/images/logo_new.png", // Replace with your actual OG image
  twitterCard: "summary_large_image",
});

// Service Data Array for cleaner template logic
const services = [
  {
    title: "Headless WooCommerce Store Design",
    subtitle: "The Future of Retail",
    headline: "Don't Just Build a Store, Build a High-Performance Asset.",
    icon: "mdi-storefront-outline",
    color: "primary",
    features: [
      {
        text: "Ultra-Fast Performance",
        desc: "We use Nuxt.js 4 and Vue.js to make your store load in under 1 second, improving your Google ranking.",
      },
      {
        text: "Headless Architecture",
        desc: "Decouple your frontend from WordPress for superior security and unlimited design flexibility.",
      },
      {
        text: "Global Payment Ready",
        desc: "Seamless integration with BKash, Nagad, Stripe, and PayPal.",
      },
      {
        text: "SEO Built-in",
        desc: "Automated schema markup to show prices directly in search results.",
      },
    ],
  },
  {
    title: "High-Converting Landing Pages",
    subtitle: "Sales Machine",
    headline: "Turn Clicks into Customers with Data-Driven Landing Pages.",
    icon: "mdi-rocket-launch-outline",
    color: "secondary",
    features: [
      {
        text: "Focused UI/UX",
        desc: "Minimalist Vuetify 3 designs leading users directly to the Buy button.",
      },
      {
        text: "Mobile-First Approach",
        desc: "Flawless experience for the 80% of shoppers on mobile devices.",
      },
      {
        text: "A/B Testing Ready",
        desc: "Clean component structure to easily test layouts for maximum ROI.",
      },
    ],
  },
  {
    title: "Marketing Analytics & Facebook Ads",
    subtitle: "Scale Your Sales",
    headline: "Stop Guessing. Start Tracking. Scale Your Sales.",
    icon: "mdi-chart-line",
    color: "success",
    features: [
      {
        text: "Server-Side Tracking",
        desc: "GA4 and Facebook CAPI setup to bypass iOS 14+ tracking issues.",
      },
      {
        text: "Audience Research",
        desc: "Precision targeting to find buyers ready for your specific products.",
      },
      {
        text: "Full Funnel Reports",
        desc: "Transparent reports showing exactly your spend vs. earnings.",
      },
    ],
  },
];
</script>

<template>
  <v-container class="py-12">
    <!-- Section Header -->
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12" md="8">
        <h2 class="text-h3 font-weight-bold mb-4">Our Professional Services</h2>
        <p class="text-grey-darken-1 text-body-1">
          Leveraging cutting-edge technology to build faster, more secure, and
          highly profitable digital experiences.
        </p>
      </v-col>
    </v-row>

    <!-- Services Grid -->
    <v-row>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        lg="4"
        md="6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 12 : 2"
            class="transition-swing rounded-xl h-100 d-flex flex-column"
            border
          >
            <v-card-item class="pa-6">
              <div class="d-flex align-center mb-4">
                <v-avatar
                  :color="service.color"
                  variant="tonal"
                  size="56"
                  class="me-4"
                >
                  <v-icon :icon="service.icon" size="32"></v-icon>
                </v-avatar>
                <div>
                  <div class="text-overline mb-n1">{{ service.subtitle }}</div>
                  <h3 class="text-h6 font-weight-bold">{{ service.title }}</h3>
                </div>
              </div>

              <p
                class="text-subtitle-1 font-weight-medium mb-6 italic text-primary"
              >
                "{{ service.headline }}"
              </p>

              <v-divider class="mb-6"></v-divider>

              <div
                v-for="(feature, fIndex) in service.features"
                :key="fIndex"
                class="mb-4"
              >
                <div class="d-flex align-start">
                  <v-icon
                    color="success"
                    icon="mdi-check-circle"
                    size="small"
                    class="mt-1 me-2"
                  ></v-icon>
                  <div>
                    <span class="font-weight-bold text-body-2"
                      >{{ feature.text }}:</span
                    >
                    <span class="text-body-2 text-grey-darken-2 ms-1">{{
                      feature.desc
                    }}</span>
                  </div>
                </div>
              </div>
            </v-card-item>

            <v-spacer></v-spacer>

            <v-card-actions class="pa-6 pt-0">
              <v-btn
                block
                :color="service.color"
                variant="flat"
                size="large"
                class="text-none"
                to="/portfolio"
              >
                Inquire Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.transition-swing {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Custom italics for the headline to make it pop */
.italic {
  font-style: italic;
}
</style>

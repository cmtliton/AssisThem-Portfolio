<script setup lang="ts">
// Stats to build credibility
const stats = [
  { label: "Site Speed Increase", value: "300%", icon: "mdi-lightning-bolt" },
  { label: "Security Rating", value: "A+", icon: "mdi-shield-check" },
  { label: "Mobile Conversion", value: "+45%", icon: "mdi-cellphone-check" },
];

const techStack = [
  { name: "Nuxt 4", color: "green-darken-2" },
  { name: "Vue.js 3", color: "green-accent-4" },
  { name: "Vuetify 3", color: "blue-lighten-1" },
  { name: "WooCommerce", color: "purple-darken-1" },
  { name: "GraphQL", color: "pink-accent-3" },
  { name: "Node.js", color: "green-lighten-1" },
];
</script>

<template>
  <section class="py-16">
    <v-container>
      <v-row align="center" justify="center">
        <!-- Left Side: Image/Branding -->
        <v-col cols="12" lg="5" class="mb-8 mb-lg-0">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 20 : 5"
              class="about-image-card rounded-xl overflow-hidden"
              border
            >
              <v-img
                src="/images/about_us.avif"
                cover
                height="500"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%"
              >
                <div class="pa-6 text-white">
                  <div class="text-h4 font-weight-black mb-2">Since 2021</div>
                  <div class="text-subtitle-1">
                    Revolutionizing Digital Retail
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>

        <!-- Right Side: Content -->
        <v-col cols="12" lg="7" class="ps-lg-12">
          <h2
            class="text-h3 text-overline text-primary font-weight-bold mb-2 tracking-widest"
          >
            WHO WE ARE
          </h2>
          <h3 class="text-h3 font-weight-bold text-white mb-6">
            We Build Web Assets, <br />
            <span class="text-gradient">Not Just Websites.</span>
          </h3>

          <p class="text-body-1 text-grey-lighten-1 mb-6 leading-relaxed">
            Standard WordPress sites are slow, vulnerable, and limited. We
            specialize in
            <strong>Headless Architecture</strong>, decoupling the backend from
            the frontend using Nuxt 4. This allows us to deliver the speed of a
            modern app with the management ease of WooCommerce.
          </p>

          <p class="text-body-1 text-grey-lighten-1 mb-8">
            Our mission is simple: To provide businesses with a competitive edge
            through ultra-fast performance, superior SEO, and data-driven
            marketing tools that actually convert visitors into loyal customers.
          </p>

          <!-- Expertise Chips -->
          <div class="d-flex flex-wrap gap-2 mb-10">
            <v-chip
              v-for="tech in techStack"
              :key="tech.name"
              :color="tech.color"
              variant="tonal"
              class="font-weight-bold"
              size="large"
            >
              {{ tech.name }}
            </v-chip>
          </div>

          <!-- Quick Stats -->
          <v-row>
            <v-col v-for="stat in stats" :key="stat.label" cols="4">
              <div class="text-center text-lg-start">
                <v-icon
                  :icon="stat.icon"
                  color="primary"
                  class="mb-2"
                  size="32"
                ></v-icon>
                <div class="text-h4 font-weight-black text-white">
                  {{ stat.value }}
                </div>
                <div class="text-caption text-grey-lighten-1 text-uppercase">
                  {{ stat.label }}
                </div>
              </div>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            size="x-large"
            variant="flat"
            class="mt-10 rounded-lg text-none px-10"
            append-icon="mdi-arrow-right"
            to="/portfolio"
          >
            Work With Us
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #0a0a0a; /* Deep black to match WhyWorkWithUs */
}

.text-gradient {
  background: linear-gradient(45deg, #2196f3, #00e676);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-image-card {
  border-color: rgba(255, 255, 255, 0.1) !important;
  background: #111;
  transition: all 0.4s ease-in-out;
}

.about-image-card:hover {
  transform: scale(1.02);
}

.leading-relaxed {
  line-height: 1.8;
}

.gap-2 {
  gap: 8px;
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

/* Nuxt 4 transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

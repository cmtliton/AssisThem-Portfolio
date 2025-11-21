<template>
  <v-container class="why-work-section">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">
          What You Get When You Work With Us
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="(benefit, index) in benefits"
        :key="index"
        class="mb-4 mb-md-0"
      >
        <v-card
          class="benefit-card"
          elevation="4"
          rounded="lg"
          height="100%"
        >
          <v-card-item class="pa-6">
            <div class="d-flex align-start">
              <v-avatar
                color="primary"
                size="56"
                class="mr-4 flex-shrink-0"
              >
                <v-icon
                  :icon="benefit.icon"
                  size="28"
                  color="white"
                ></v-icon>
              </v-avatar>
              <div class="flex-grow-1">
                <v-card-title class="text-h6 font-weight-bold mb-2 pa-0">
                  {{ benefit.title }}
                </v-card-title>
                <v-card-text class="text-body-1 text-medium-emphasis pa-0">
                  {{ benefit.description }}
                </v-card-text>
              </div>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const benefits = [
  {
    title: 'A Complete Solution',
    description: 'We provide both website design and marketing. You don\'t need to hire multiple people.',
    icon: 'mdi-package-variant'
  },
  {
    title: 'Focus on Sales',
    description: 'Our main goal is to help you increase your sales and grow your business.',
    icon: 'mdi-trending-up'
  },
  {
    title: 'Smart Advertising',
    description: 'We use data to run ads, so your money is spent wisely to get the best results.',
    icon: 'mdi-chart-line'
  },
  {
    title: 'A Partner in Your Business',
    description: 'We care about your success and work closely with you.',
    icon: 'mdi-handshake'
  }
]
</script>

<style scoped>
.why-work-section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.benefit-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 960px) {
  .why-work-section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>

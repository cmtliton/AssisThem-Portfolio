<template>
  <v-sheet class="d-flex justify-center align-center text-center flex-column py-5 py-sm-2 bg-blue-lighten-4" id="hero" min-height="600">
    <v-row justify="center" align="center" class="min-height-screen">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h1 class="text-h3 text-md-h2 text-lg-h1 font-weight-bold mb-6">
          We Build Online Stores That Sell
        </h1>
        <p class="text-h6 text-md-h5 text-lg-h6 text-medium-emphasis mb-8">
          Our team will design a professional WooCommerce store for your business and bring customers to it using targeted Facebook Ads.
        </p>
        <v-btn
          color="primary"
          size="large"
          class="text-h6 px-8 py-3"
          rounded="xl"
          elevation="4"
          href="https://wa.link/q5ruqv"
            target="blank"
          
        >
          Start Your Project
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
// Hero Section Component
</script>

<style scoped>
  #hero {
    background-image: url('~/assets/sprike.png');
    background-repeat: no-repeat;
    background-position: fixed;
    animation-name: example1;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .ass-animation {
    animation-name: ass-text-animation;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes ass-text-animation {
    from {
      color: red;
    }
    to {
      color: rgb(244, 236, 236);
    }
  }

  @keyframes example1 {
    from {
      background-size: 100%;
    }
    to {
      background-size: 400%;
    }
  }
.hero-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.min-height-screen {
  min-height: 70vh;
}

@media (max-width: 960px) {
  .hero-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  .min-height-screen {
    min-height: 60vh;
  }
}
</style>

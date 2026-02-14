<template>
  <v-container class="contact-section">
    <v-row justify="center" class="mb-6">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold mb-4">
          Let's Talk About Your Project
        </h1>
        <p class="text-body-1 text-md-h6 text-medium-emphasis">
          Do you have an idea for your business? Do you need a website or help
          with marketing? Fill out the form below or send us an email.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="contact-form-card" elevation="4" rounded="lg">
          <v-card-item class="pa-6">
            <v-form ref="form" @submit.prevent="handleSubmit">
              <v-text-field
                v-model="form.name"
                label="Your Name"
                variant="outlined"
                required
                class="mb-4"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                label="Your Email"
                type="email"
                variant="outlined"
                required
                class="mb-4"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-textarea
                v-model="form.message"
                label="Your Message"
                variant="outlined"
                required
                rows="6"
                class="mb-6"
                :rules="[rules.required]"
              ></v-textarea>

              <v-btn
                type="submit"
                color="primary"
                size="large"
                class="text-h6 px-8"
                rounded="lg"
                elevation="2"
                block
              >
                Send Message
              </v-btn>
            </v-form>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const rules = {
  required: (value) => !!value || "This field is required",
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Please enter a valid email address";
  },
};

const handleSubmit = () => {
  // Handle form submission here
  console.log("Form submitted:", form.value);
  // You can add your form submission logic here
};
useSeoMeta({
  title: "Top Headless Ecommerce Developer in Bangladesh | AssisThem",
  ogTitle: "Premium Web Services | High-Performance Digital Solutions",
  description:
    "Specializing in Nuxt.js 4 Headless WooCommerce, High-Converting Landing Pages, and Meta/Facebook Ads with Server-Side Tracking.",
  ogDescription:
    "Transform your retail business with ultra-fast Headless stores and data-driven marketing.",
  ogImage: "https://assisthem.netlify.app/images/logo_new.png", // Replace with your actual OG image
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.contact-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact-form-card {
  transition: box-shadow 0.3s ease;
}

.contact-form-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

@media (max-width: 960px) {
  .contact-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>

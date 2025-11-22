<template>
    <v-app theme="dark">
    <!-- Navigation Bar -->
    <v-app-bar flat color="black" height="80" class="px-md-10">
      <template v-slot:prepend>
        <div class="d-flex align-center">
          <v-icon color="purple-accent-2" class="mr-2">mdi-cube-scan</v-icon>
          <span class="text-h6 font-weight-bold text-white tracking-wide">BULK GADGET</span>
        </div>
      </template>

      <v-spacer></v-spacer>

      <!-- Desktop Menu -->
      <div class="d-none d-md-flex align-center gap-4">
        <v-btn variant="text" class="text-capitalize" @click="scrollToHome">Home</v-btn>
        <v-btn variant="text" class="text-capitalize" @click="scrollToProductDetails">Product Details</v-btn>
        
        <!-- Special Offers with Blue Background -->
        <v-btn 
          class="text-capitalize bg-cyan-darken-1 text-white mx-2" 
          flat 
          rounded="sm"
        >
          Special Offers
        </v-btn>
        
        <v-btn variant="text" class="text-capitalize" @click="scrollToReviews">Customer Reviews</v-btn>
      </div>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn 
          rounded="pill" 
          class="gradient-btn px-6 text-capitalize"
          color="primary"
          height="45"
          variant="flat"
          @click="scrollToCheckout"
        >
          Contact us
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
        <slot />
    </v-main>
    <BulkAppFooter/>
    </v-app>
    </template>
    <script setup>
    import BulkAppFooter from '~/components/Bulk/AppFooter.vue';
    import { nextTick } from 'vue';
    
    // Generic scroll function with header offset
    const scrollToSection = (sectionId) => {
        nextTick(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Calculate offset for fixed header (80px height)
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    const scrollToHome = () => {
        scrollToSection('hero-section');
    }
    
    const scrollToProductDetails = () => {
        scrollToSection('product-details-section');
    }
    
    const scrollToReviews = () => {
        scrollToSection('reviews-section');
    }
    
    const scrollToCheckout = () => {
        scrollToSection('checkout-section');
    }
    </script>
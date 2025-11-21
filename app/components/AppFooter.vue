<template>
  <v-footer class="border rounded-b-xl">
    <v-row class="pt-12">
      <v-col cols="12" md="4" class="text-h6">
        <v-card flat>
          <template v-slot:prepend>
            <v-img
              src="~/assets/logo_new.png"
              width="55"
              @click="home()"
              class="cursor-pointer"
            ></v-img>
            <p class="ps-2 text-h4 cursor-pointer" @click="home">
              AssisThem
            </p>
          </template>
          <p class="ps-4 text-subtitle-1">
           Excel Your Business with WooCommerce Store Design!
          </p>
          <p class="ps-4 text-body-2 text-medium-emphasis mb-4">
            Portfolio-first design, WooCommerce builds, and growth partners for the ideas that matter most to you.
          </p>
          <v-btn
            v-for="icon in icons"
            :key="icon.id"
            :icon="icon.src"
            class="mx-0"
            variant="text"
            :href="icon.url"
            target="blank"
          ></v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="6"
            class="text-h6 font-weight-bold"
            v-for="section in footerSections"
            :key="section.id"
          >
            {{ section.title }}

            <v-row
              class="mx-0 mt-3 my-3 text-body-1 text-medium-emphasis"
              v-for="item in section.items"
              :key="item.id"
            >
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <NuxtLink :to="item.url">
                    <div
                      v-bind="props"
                      :class="isHovering ? 'font-weight-bold text-success cursor-pointer rounded-xl' : undefined"
                    >
                      {{ item.title }}
                    </div>
                  </NuxtLink>
                </template>
              </v-hover>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" sm="6" class="text-h6 font-weight-bold">
            Featured Projects
            <div
              v-for="project in featuredProjects"
              :key="project.id"
              class="my-3 pa-3 rounded-lg project-pill"
            >
              <p class="text-subtitle-1 mb-1">
                {{ project.title }}
              </p>
              <p class="text-body-2 text-medium-emphasis mb-2">
                {{ project.summary }}
              </p>
              <NuxtLink :to="project.url" class="text-success text-body-2 font-weight-bold">
                View case study →
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-row class="ma-2 border-t-thin">
        <v-col cols="12" md="6">
          <p class="text-subtitle-1 text-medium-emphasis text-start">
            Stay in the studio loop
          </p>
          <p class="text-subtitle-2 text-medium-emphasis text-start">
            Receive quarterly snapshots of new portfolio drops, UX experiments, and available collaboration slots.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex newsletter-wrapper">
            <v-text-field
              v-model.email="Email"
              variant="outlined"
              placeholder="Enter your email"
              density="compact"
              color="success"
            ></v-text-field>
            <v-btn
              variant="tonal"
              class="ml-2 bg-success text-white rounded-lg"
            >
              Subscribe
            </v-btn>
          </div>
        </v-col>

        <v-row class="border-t-thin">
          <v-col cols="12" md="6">
            <p class="text-medium-emphasis text-center">
              Ready to collaborate? <strong>Call:</strong> +880 1515-650818
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-medium-emphasis text-center">
              ©2024-{{ new Date().getFullYear() }} <strong>AssisThem Studio.</strong> All rights reserved.
            </p>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-footer>
</template>
  
  <script setup>
    import { ref } from 'vue'
  
    const Email = ref()
  const icons = ref([
    {
      id: 1,
      name: 'Facebook',
      title: 'Facebook',
      src: 'mdi-facebook',
      url: 'https://www.facebook.com/profile.php?id=61561974574121',
      desc: '',
      status: true,
    },
    {
      id: 2,
      name: 'Whatsapp',
      title: 'Whatsapp',
      src: 'mdi-whatsapp',
      url: 'https://wa.link/q5ruqv',
      desc: '',
      status: true,
    },
    {
      id: 3,
      name: 'Instagram',
      title: 'Instagram',
      src: 'mdi-instagram',
      url: '',
      desc: '',
      status: true,
    },
    {
      id: 4,
      name: 'Twitter',
      title: 'Twitter',
      src: 'mdi-twitter',
      url: '',
      desc: '',
      status: true,
    },
    {
      id: 5,
      name: 'LinkedIn',
      title: 'LinkedIn',
      src: 'mdi-linkedin',
      url: 'https://www.linkedin.com/in/md-liton-miah-61a77b33b/',
      desc: '',
      status: true,
    },
  ])

  const footerSections = ref([
    {
      id: 1,
      title: 'Studio Services',
      items: [
        { id: 1, title: 'WooCommerce Store Design', url: '/services' },
        { id: 2, title: 'Portfolio Website Design', url: '/services' },
        { id: 3, title: 'Facebook Ads & Growth', url: '/services' },
        { id: 4, title: 'Maintenance & Care Plans', url: '/services' },
      ],
    },
    {
      id: 2,
      title: 'Portfolio Highlights',
      items: [
        { id: 1, title: 'Case Studies', url: '/portfolio' },
        { id: 2, title: 'UI Motion Library', url: '/portfolio' },
        { id: 3, title: 'Brand Kits', url: '/portfolio' },
        { id: 4, title: 'Testimonials', url: '/about' },
      ],
    },
    {
      id: 3,
      title: 'Resources',
      items: [
        { id: 1, title: 'About Me', url: '/about' },
        { id: 2, title: 'Blog & Notes', url: '/blog' },
        { id: 3, title: 'Book a Call', url: '/contact' },
        { id: 4, title: 'Press Kit', url: '/contact' },
      ],
    },
  ])

  const featuredProjects = ref([
    {
      id: 1,
      title: 'AssisThem Portfolio Hub',
      summary: 'Vue-powered personal OS highlighting multi-service expertise.',
      url: '/portfolio',
    },
    {
      id: 2,
      title: 'Shopify → Woo Migration',
      summary: 'Scaled a handmade brand to 3x revenue with a bespoke Woo build.',
      url: '/portfolio',
    },
  ])
    function home() {
      useRouter().push('/')
    }
  </script>
  <style scoped>
    a {
      text-decoration: none;
    }

  .project-pill {
    background-color: rgba(76, 175, 80, 0.08);
    border: 1px solid rgba(76, 175, 80, 0.15);
  }

  .newsletter-wrapper {
    flex-wrap: wrap;
  }
  </style>
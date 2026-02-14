<template>
  <!-- ১. ব্লগ হিরো সেকশন -->
  <v-sheet color="purple-darken-1" class="py-16 text-center" flat>
    <v-container>
      <h1 class="text-h3 text-md-h2 font-weight-black text-white mb-4">
        Insights & Inspiration
      </h1>
      <p
        class="text-h6 text-grey-lighten-2 font-weight-light mx-auto"
        style="max-width: 700px"
      >
        Discover tips on headless commerce, high-converting landing pages, and
        how to scale your business with modern tech.
      </p>
    </v-container>
  </v-sheet>

  <v-container class="py-12">
    <v-row>
      <!-- ২. মেইন ব্লগ লিস্ট (বাম পাশ) -->
      <v-col cols="12" lg="8">
        <!-- ফিচারড পোস্ট (সবচেয়ে নতুনটি বড় দেখাবে) -->
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="mb-10 overflow-hidden"
            rounded="xl"
            elevation="0"
            border
            to="/blog/headless-woocommerce-benefits"
          >
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                  height="100%"
                  cover
                  :class="{ 'scale-105': isHovering }"
                  class="transition-swing"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pa-8 d-flex flex-column justify-center"
              >
                <v-chip
                  color="#3b2822"
                  size="small"
                  class="mb-4 font-weight-bold"
                  >FEATURED</v-chip
                >
                <h2 class="text-h4 font-weight-bold mb-4">
                  Why Headless WooCommerce is the Future of Online Stores
                </h2>
                <p class="text-body-1 text-grey-darken-1 mb-6">
                  Learn how decoupling your WordPress backend from a Nuxt.js
                  frontend can skyrocket your site speed and SEO...
                </p>
                <div class="d-flex align-center">
                  <v-avatar
                    size="32"
                    class="mr-3"
                    image="https://i.pravatar.cc/100?u=admin"
                  />
                  <span class="text-caption font-weight-bold"
                    >Admin • Oct 24, 2025</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>

        <!-- অন্যান্য ব্লগের গ্রিড -->
        <v-row>
          <v-col v-for="blog in blogs" :key="blog.id" cols="12" sm="6">
            <v-card
              flat
              rounded="xl"
              border
              class="h-100 shadow-hover transition-swing"
              :to="`/blog/${blog.slug}`"
            >
              <v-img :src="blog.image" height="220" cover />
              <v-card-text class="pa-6">
                <v-chip
                  size="x-small"
                  variant="tonal"
                  class="mb-3 font-weight-bold"
                  :color="brandColor"
                >
                  {{ blog.category }}
                </v-chip>
                <h3 class="text-h6 font-weight-bold mb-3 leading-tight">
                  {{ blog.title }}
                </h3>
                <p class="text-body-2 text-grey-darken-1 mb-4 text-truncate-2">
                  {{ blog.excerpt }}
                </p>
                <v-divider class="mb-4" />
                <div class="d-flex justify-space-between align-center">
                  <span class="text-caption text-grey">{{ blog.date }}</span>
                  <v-btn
                    variant="text"
                    color="#3b2822"
                    size="small"
                    class="font-weight-bold"
                    >Read More</v-btn
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- পেজিনেশন -->
        <v-pagination
          v-model="page"
          :length="5"
          class="mt-12"
          color="#3b2822"
          rounded="circle"
        />
      </v-col>

      <!-- ৩. সাইডবার (ডান পাশ) -->
      <v-col cols="12" lg="4" class="ps-lg-10">
        <!-- সার্চ বক্স -->
        <v-text-field
          placeholder="Search articles..."
          variant="outlined"
          rounded="lg"
          prepend-inner-icon="mdi-magnify"
          bg-color="white"
          class="mb-8"
          hide-details
        />

        <!-- ক্যাটাগরি কার্ড -->
        <v-card flat rounded="xl" border class="pa-6 mb-8">
          <h3
            class="text-h6 font-weight-bold mb-4"
            :style="{ color: brandColor }"
          >
            Categories
          </h3>
          <v-list density="compact" class="pa-0">
            <v-list-item
              v-for="cat in categories"
              :key="cat.name"
              link
              rounded="lg"
              class="mb-1"
            >
              <v-list-item-title class="text-body-2">{{
                cat.name
              }}</v-list-item-title>
              <template #append>
                <v-chip size="x-small" variant="flat" color="grey-lighten-3">{{
                  cat.count
                }}</v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-card>

        <!-- নিউজলেটার কার্ড -->
        <v-card
          flat
          rounded="xl"
          color="purple-darken-2"
          class="pa-8 text-white text-center"
        >
          <v-icon icon="mdi-email-open-outline" size="48" class="mb-4" />
          <h3 class="text-h5 font-weight-bold mb-2">Weekly Newsletter</h3>
          <p class="text-caption opacity-80 mb-6">
            Get the latest ecommerce growth tips directly in your inbox.
          </p>
          <v-text-field
            placeholder="Email address"
            variant="solo"
            density="compact"
            rounded="lg"
            flat
            hide-details
            class="mb-4 text-black"
          />
          <v-btn
            block
            color="white"
            class="font-weight-bold"
            :style="{ color: brandColor }"
            >Subscribe</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const brandColor = "purple-darken-2";
const page = ref(1);

const blogs = [
  {
    id: 1,
    title: "How to Build a High-Converting Landing Page",
    slug: "high-converting-landing-page-tips",
    category: "Marketing",
    date: "Oct 15, 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
    excerpt:
      "Explore the 5 essential elements every landing page must have to turn visitors into leads.",
  },
  {
    id: 2,
    title: "Google Analytics 4 for Ecommerce Owners",
    slug: "ga4-ecommerce-tracking",
    category: "Analytics",
    date: "Oct 10, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    excerpt:
      "Step-by-step guide to setting up conversion tracking and understanding customer behavior.",
  },
  {
    id: 3,
    title: "Scaling Furniture Business with Facebook Ads",
    slug: "facebook-ads-furniture-business",
    category: "Ads",
    date: "Oct 05, 2025",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070",
    excerpt:
      "Strategies for finding the right audience for your furniture products and reducing ad spend.",
  },
];

const categories = [
  { name: "Headless Commerce", count: 12 },
  { name: "Landing Pages", count: 8 },
  { name: "Marketing", count: 15 },
  { name: "Success Stories", count: 5 },
];

useSeoMeta({
  title: "Blog | Ecommerce Growth & Web Development Insights",
  description:
    "Learn how to boost your sales with Headless WooCommerce, high-converting landing pages, and professional marketing strategies.",
  ogImage: "https://assisthem.netlify.app/images/logo_new.png",
});
</script>

<style scoped>
.scale-105 {
  transform: scale(1.05);
}
.shadow-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;
  border-color: #3b2822 !important;
}
.text-truncate-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-height-1 {
  line-height: 1.2 !important;
}
</style>

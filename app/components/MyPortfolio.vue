<template>
  <v-container class="portfolio-section">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">Our Work</h1>
        <p class="text-h5 text-medium-emphasis text-center py-4">
          Explore the Projects That Showcase Our Expertise.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="mb-4"
      >
        <PortfolioItem
          :title="item.title"
          :description="item.description"
          :image-url="item.imageUrl"
          :link="item.linkUrl"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const portfolioItems = [
  {
    title: "E-Commerce Store Design",
    description:
      "A modern WooCommerce store with responsive design and optimized user experience.",
    imageUrl: "/images/e-commerce-store.jpg",
    linkUrl: "https://emcfurniture.com/",
  },
  {
    title: "Facebook Ads Campaign",
    description:
      "Targeted advertising campaign that increased sales by 150% in the first quarter.",
    imageUrl: "/images/campaign_1.jpg",
    linkUrl: "",
  },
  {
    title: "Online Fashion Boutique",
    description:
      "Complete store design and marketing solution for a fashion retail business.",
    imageUrl: "/images/boutique_strore.jpg",
    linkUrl: "https://shareelungi.shop/",
  },
  {
    title: "Tech Product Store",
    description:
      "Professional WooCommerce store for electronics with advanced product filtering.",
    imageUrl: "/images/tech.jpg",
    linkUrl: "https://bulkgadget-assisthem.netlify.app/",
  },
  {
    title: "Marketing Success Story",
    description:
      "Data-driven Facebook Ads strategy that reduced cost per acquisition by 40%.",
    imageUrl: "/images/success_media.jpg",
    linkUrl: "https://emcfurniture.com/",
  },
  {
    title: "Home Decor Store",
    description:
      "Beautiful online store design with seamless checkout and mobile optimization.",
    imageUrl: "/images/home_decor.jpg",
    linkUrl: "https://emcfurniture.com/",
  },
];
</script>

<style scoped>
.portfolio-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

@media (max-width: 960px) {
  .portfolio-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>

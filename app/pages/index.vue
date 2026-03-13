<template>
  <MyHero />
  <MyPortfolio />
  <my-services />
  <why-work-with-us />
  <AboutUs />
</template>
<script setup>
useHead({
  title: "AssisThem - Excel Your Business with WooCommerce Store Design!",
  meta: [
    {
      name: "description",
      content:
        "AssisThem is a team of WordPress developers and digital marketers. We started by designing websites because we love creating beautiful things. But we soon learned that a great website is not enough if no one visits it. That's why we mastered Facebook Ads. Now, our goal is to help businesses succeed online. We combine good design with smart marketing to get real results.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "AssisThem - Excel Your Business with WooCommerce Store Design!",
        image: "https://assisthem.netlify.app/images/logo_new.png",
        url: "https://assisthem.netlify.app",
        telephone: "+8801515650818",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Soyadhangora",
          addressLocality: "Sirajganj",
          addressRegion: "Rajshahi",
          addressCountry: "BD",
        },
        serviceType: [
          "Headless WooCommerce",
          "Landing Page Design",
          "Facebook Ads",
        ],
        priceRange: "$$",
      }),
    },
  ],
});
useSeoMeta({
  title:
    "Headless WooCommerce & High-Converting Landing Page Expert | AssisThem",
  ogTitle: "Boost Your Sales with Headless Commerce & Nuxt.js Solutions",
  description:
    "Specializing in ultra-fast Headless WooCommerce stores, high-converting landing pages, and advanced Google Analytics tracking for Facebook Marketing. Built with Nuxt.js for lightning speed.",
  ogDescription:
    "Expert Headless WooCommerce store design and Facebook Marketing. I build high-performance stores that convert visitors into customers.",
  ogImage: "https://assisthem.netlify.app/images/logo_new.png",
  twitterCard: "summary_large_image",
});
</script>

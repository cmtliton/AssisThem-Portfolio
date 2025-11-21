<template>
  <v-container class="about-section">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 text-md-h3 text-lg-h2 font-weight-bold">
          About AssisThem
        </h1>
      </v-col>
    </v-row>
    <v-row align="center" class="mb-4">
      <v-col cols="12" md="6" class="mb-4 mb-md-0">
        <v-img
          src="~/assets/about_us.jpg"
          alt="AssisThem Team"
          cover
          class="about-image rounded-lg"
          height="400"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <div class="about-content">
          <p class="text-body-1 text-md-h6 line-height-2 text-justify">
            Hello, we are AssisThem, a team of WordPress developers and digital marketers. We started by designing websites because we love creating beautiful things. But we soon learned that a great website is not enough if no one visits it. That's why we mastered Facebook Ads. Now, our goal is to help businesses succeed online. We combine good design with smart marketing to get real results.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// About Us Page
</script>

<style scoped>
.about-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.about-image {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.about-image:hover {
  transform: scale(1.02);
}

.about-content {
  padding: 20px 0;
}

.line-height-2 {
  line-height: 1.8;
}

@media (max-width: 960px) {
  .about-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  .about-content {
    padding: 0;
  }
}
</style>

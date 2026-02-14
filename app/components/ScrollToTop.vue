<template>
  <v-fade-transition class="mb-16">
    <!-- v-show এর বদলে v-if অনেক সময় মোবাইলে ভালো কাজ করে -->
    <v-btn
      v-if="visible"
      @click.stop="scrollToTop"
      class="scroll-btn elevation-8"
      icon
      color="white"
      size="50"
      location="bottom right"
    >
      <v-icon color="grey-darken-3" size="30">mdi-chevron-up</v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

const handleScroll = () => {
  // মোবাইলের জন্য পিক্সেল কিছুটা বাড়িয়ে ১০০-২০০ করা ভালো
  visible.value = window.scrollY > 200;
};

const scrollToTop = (e) => {
  // ইভেন্ট বাবলিং বন্ধ করতে
  if (e) e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-btn {
  position: fixed !important;
  /* হোয়াটসঅ্যাপ বাটন সাধারণত নিচে থাকে, তাই এটিকে একটু উপরে রাখা হয়েছে */
  bottom: 100px !important;
  right: 25px !important;
  /* সবচেয়ে উপরে রাখার জন্য অনেক বড় z-index */
  z-index: 99999 !important;
  border: 1.5px solid #eeeeee !important;
  /* মোবাইলে ক্লিক এলাকা নিশ্চিত করতে */
  cursor: pointer;
  touch-action: manipulation;
}

/* হোভার ইফেক্ট শুধুমাত্র কম্পিউটারের জন্য */
@media (min-width: 960px) {
  .scroll-btn:hover {
    transform: translateY(-5px);
    background-color: #f8f8f8 !important;
  }
}

/* মোবাইলের জন্য পজিশন অ্যাডজাস্টমেন্ট */
@media (max-width: 600px) {
  .scroll-btn {
    bottom: 90px !important; /* হোয়াটসঅ্যাপ বাটনের উপরে থাকবে */
    right: 20px !important;
    width: 45px !important;
    height: 45px !important;
  }
}
</style>

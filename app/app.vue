<template>
  <div>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</div>
</template>
<script setup>
import { useHead } from '#app'
useHead({
  title: 'AssisThem - Excel Your Business with WooCommerce Store Design!',
  meta: [
    { name: 'description', content: 'AssisThem is a team of WordPress developers and digital marketers. We started by designing websites because we love creating beautiful things. But we soon learned that a great website is not enough if no one visits it. That\'s why we mastered Facebook Ads. Now, our goal is to help businesses succeed online. We combine good design with smart marketing to get real results.' }
  ]
})
onMounted(() => {
  useTheme().global.name.value = 'dark'
})
</script>
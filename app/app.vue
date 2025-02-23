<script setup>
const links = [{
  label: 'Learning Paths',
  to: '/#learning-paths',
  exactHash: true
}, {
  label: 'Blogs',
  to: '/blogs',
}, {
  label: 'About Me',
  to: '/about-me',
}]

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Code With Nitesh'
const description = 'Code With Nitesh is a blog where you can learn about web development, programming, and more.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Code With Nitesh
    </template>

    <template #right>
      <UColorModeButton />

      <UButton to="https://github.com/niteshpk" target="_blank" icon="i-simple-icons-github" aria-label="GitHub"
        color="gray" variant="ghost" />
    </template>
  </UHeader>

  <UMain class="bg-linear-to-r from-gray-800 via-blue-700 to-gray-900">
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>
      All rights reserved @ {{ title }}
    </template>
  </UFooter>
</template>

<script setup>

const description = `What is [slug].vue in Nuxt 3?
In Nuxt 3, a[slug].vue file is a dynamic route component that captures URL parameters.This is useful for creating pages where the content changes based on the URL, such as:

Blog posts(/blog/my - first - post)
Product pages(/products/smartphone - xyz)
User profiles(/user/johndoe)
The[slug] acts as a wildcard, dynamically matching any value in that URL segment.

  vue
Copy
Edi.`;

</script>

<template>
  <UContainer class="my-5 px-5">
    <UBlogPost title="Nuxt 3.9" :description="description" date="Dec 25, 2023" orientation="vertical"
      :image="{ src: 'https://picsum.photos/1200/900', alt: 'Nuxt 3.9' }" :authors="[
        {
          name: 'Daniel Roe',
          avatar: { src: 'https://github.com/danielroe.png' },
          to: 'https://twitter.com/danielcroe',
          target: '_blank',
        },
      ]" :badge="{ label: 'Release' }"></UBlogPost>
  </UContainer>
</template>

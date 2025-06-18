<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

// Fetch post based on slug
const {
  status,
  data: post,
  pending,
  error,
} = await useAsyncData(`post-${route.params.slug}`, () =>
  $fetch(`/api/posts/${route.params.slug}`)
);
</script>

<template>
  <UContainer class="my-16 sm:py-8 px-4 p-8 space-y-8 max-w-7xl gap-8 sm:px-6 lg:px-8 sm:gap-y-8 flex flex-col mx-auto">
    <!-- Loader -->
    <Loader v-if="status === 'pending'" />

    <!-- Error -->
    <div v-else-if="error">
      <div class="text-red-600 text-lg font-semibold">
        {{ error.statusMessage || "Post not found." }}
      </div>
      <UButton
        icon="i-lucide-arrow-left"
        @click="router.push('/blogs')"
        color="gray"
        variant="soft"
      >
        Back to Blogs
      </UButton>
    </div>

    <!-- Blog Post -->
    <div v-else>
      <UBlogPost
        :title="post.title"
        :description="post.null"
        :date="post.createdAt"
        orientation="vertical"
        :image="{
          src: post.image,
          alt: post.title,
        }"
        :badge="post.badge"
      />


      <!-- Render content safely -->
      <div class="mt-6" v-html="post.content"></div>

      <UButton
        icon="i-lucide-arrow-left"
        class="mt-4"
        @click="router.push('/blogs')"
        color="primary"
        variant="soft"
      >
        Back to Blogs
      </UButton>
    </div>
  </UContainer>
</template>

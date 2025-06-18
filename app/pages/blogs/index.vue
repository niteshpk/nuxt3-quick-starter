<script setup lang="ts">
import type { Post } from "@mytypes/post.types";

const {
    status,
    data: posts,
    error,
} = await useLazyAsyncData<Post[]>("list", () => $fetch("/api/posts?length=6"));
const page = ref(1)
const total = ref(1)
</script>

<template>
    <ULandingSection>
        <Loader v-if="status === 'pending'" />

        <p class="text-red-500" v-if="status === 'error'">{{ error }}</p>

        <UBlogList v-if="status === 'success'" orientation="horizontal">
            <UBlogPost v-for="(post, index) in posts" :key="index" :title="post.title" :description="post.excerpt"
                :image="post.image" :date="post.createdAt" :authors="post.authors" :to="`/blogs/${post.slug}`"
                :badge="post.badge" target="_blank" :variant="'soft'" />

        </UBlogList>

        <UPagination v-model="page" :total="total" :items-per-page="1" show-edges color="neutral" variant="subtle" />
    </ULandingSection>
</template>

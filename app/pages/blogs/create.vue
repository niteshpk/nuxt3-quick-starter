<template>
  <UContainer class="py-12 space-y-6 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold">Create New Blog</h1>

    <UInput v-model="title" label="Title" placeholder="Enter blog title" required />
    <UTextarea v-model="content" label="Content (HTML allowed)" placeholder="Content (HTML allowed)" :rows="8" required />
    <UInput v-model="image" label="Image URL" placeholder="https://..." />

    <USelectMenu
      v-model="badgeId"
      :options="badges"
      option-attribute="label"
      value-attribute="id"
      label="Select a badge"
      placeholder="Choose badge"
    />

    <div class="flex gap-4">
      <UButton color="primary" :loading="loading" @click="handleSubmit">
        Create Blog
      </UButton>
      <UButton color="primary" variant="soft" @click="router.back()">Cancel</UButton>
    </div>

    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <p v-if="success" class="text-green-600 text-sm">Blog created successfully!</p>
  </UContainer>
</template>



<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const slug = ref('')
const content = ref('')
const image = ref('')
const badgeId = ref('')
const badges = ref([])

const error = ref(null)
const success = ref(false)
const loading = ref(false)

const router = useRouter()

onMounted(async () => {
  try {
    badges.value = await $fetch('/api/badges') // Make sure this route exists in your server
  } catch (err) {
    console.error('Failed to fetch badges:', err)
  }
})

// Auto-generate slug from title
watch(title, (val) => {
  slug.value = val
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Remove consecutive hyphens
})

const handleSubmit = async () => {
  error.value = null
  success.value = false
  loading.value = true

  if (!title.value || !slug.value || !content.value) {
    error.value = 'Title and content are required.'
    loading.value = false
    return
  }

  const body = {
    title: title.value,
    slug: slug.value,
    content: content.value,
    image: image.value,
    badgeId: badgeId.value || null,
    authorId: 1 // Always 1
  }

  await $fetch('/api/posts/create', {
    method: 'POST',
    body
  }).catch(err => {
    error.value = err.data?.message || 'Failed to create blog post'
  })

  loading.value = false
  if (!error.value) {
    success.value = true
    await router.push('/blogs')
  }
}
</script>


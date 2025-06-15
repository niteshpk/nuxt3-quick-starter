<template>
    <UPageMarquee>
    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UPageMarquee>
  
  <form @submit.prevent="handleSubmit" class="space-y-4 max-w-3xl">
    <UInput v-model="form.title" label="Title" placeholder="Enter blog title" @blur="onBlur('title')" />
    <p v-if="touched.title && errors.title" class="text-red-500 text-sm">{{ errors.title }}</p>
<ClientOnly>
    <QuillEditor
      v-model:content="form.content"
      contentType="html"
      placeholder="Write your blog content..."
      @blur="onBlur('content')"
    />
</ClientOnly>
    <p v-if="touched.content && errors.content" class="text-red-500 text-sm">{{ errors.content }}</p>
    <UInput v-model="form.image" label="Image URL" placeholder="https://..." @blur="onBlur('image')" />

    <USelectMenu
      v-model="form.badgeId"
      :options="badges"
      label="Badge"
      option-attribute="label"
      placeholder="Select a badge"
      @blur="onBlur('badgeId')"
    />

    <div class="flex gap-4">
      <UButton type="submit" :color="isFormValid ? 'primary' : 'gray'" :disabled="!isFormValid" :loading="loading">
        Create Blog
      </UButton>
      <UButton type="button" color="gray" variant="soft" @click="router.back()">Cancel</UButton>
    </div>

    <p v-if="responseMessage" :class="success ? 'text-green-600' : 'text-red-600'">{{ responseMessage }}</p>
  </form>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const router = useRouter()

const form = reactive({
  title: '',
  content: '',
  image: '',
  badgeId: null,
  authorId: 1,
})

const touched = reactive({
  title: false,
  content: false,
  image: false,
  badgeId: false,
})

const errors = reactive({
  title: '',
  content: '',
})

const loading = ref(false)
const success = ref(false)
const responseMessage = ref('')
const badges = ref([])

onMounted(async () => {
  const { data } = await useFetch('/api/badges')
  badges.value = data.value || []
})

const validate = () => {
  errors.title = form.title.trim() ? '' : 'Title is required'
  errors.content = form.content.trim() ? '' : 'Content is required'

  return !errors.title && !errors.content
}

const isFormValid = computed(() => validate())

const onBlur = (field) => {
  touched[field] = true
  validate()
}

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/-+/g, '-')          // Remove consecutive hyphens
}

const handleSubmit = async () => {
  if (!validate()) return

  loading.value = true
  responseMessage.value = ''

  const res = await $fetch('/api/posts/create', {
    method: 'POST',
    body: {
      ...form,
      slug: slugify(form.title),
    },
  }).catch((err) => {
    responseMessage.value = err.data?.message || 'Failed to create blog post'
    success.value = false
  })

  loading.value = false

  if (!responseMessage.value) {
    success.value = true
    responseMessage.value = 'Blog post created successfully!'
    await router.push('/blogs')
  }
}
</script>

<style scoped>
.quill-editor {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  min-height: 200px;
}
</style>

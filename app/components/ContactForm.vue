<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div v-for="field in fields" :key="field.key">
        <UInput
          v-if="field.type === 'text' || field.type === 'email'"
          v-model="form[field.key]"
          :label="field.label"
          :placeholder="field.label"
          @blur="touched[field.key] = true"
          :type="field.type || 'text'"
        />

        <UTextarea
          v-if="field.type === 'textarea'"
          v-model="form.message"
          label="Message"
          placeholder="Message"
          :rows="5"
          @blur="touched.message = true"
        />
        <p v-if="touched[field.key] && errors[field.key]" class="text-red-500 text-sm">
          {{ errors[field.key] }}
        </p>
    </div>

    <UButton type="submit" :color="isFormValid ? 'primary' : 'gray'" :loading="loading" :disabled="!isFormValid">
      Send Message
    </UButton>

    <p v-if="responseMessage" :class="success ? 'text-green-600' : 'text-red-600'">
      {{ responseMessage }}
    </p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '#app'

const form = ref({
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  message: ''
})

const touched = ref({
  name: false,
  email: false,
  phone: false,
  whatsapp: false,
  message: false
})

const errors = ref({
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const responseMessage = ref('')

const fields = [
  { key: 'name', label: 'Name', type: 'text'},
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'phone', label: 'Phone Number',  type: 'text' },
  { key: 'whatsapp', label: 'WhatsApp Number', type: 'text' },
  { key: 'message', label: 'Message',  type: 'textarea'}
]

const validateForm = () => {
  let isValid = true
  errors.value = {
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    message: ''
  }

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Email is invalid'
    isValid = false
  }

  if (!form.value.phone.trim()) {
    errors.value.phone = 'Phone number is required'
    isValid = false
  }

  if (!form.value.whatsapp.trim()) {
    errors.value.whatsapp = 'WhatsApp number is required'
    isValid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const isFormValid = computed(() => validateForm())

const submitForm = async () => {
  if (!isFormValid.value) return

  loading.value = true
  success.value = false
  responseMessage.value = ''

  const { data, error } = await useFetch('/api/contact', {
    method: 'POST',
    body: form.value
  })

  loading.value = false

  if (!error.value && data.value?.success) {
    success.value = true
    responseMessage.value = data.value.message || 'Message sent successfully!'
    form.value = {
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      message: ''
    }
    touched.value = {
      name: false,
      email: false,
      phone: false,
      whatsapp: false,
      message: false
    }
  } else {
    success.value = false
    responseMessage.value = data.value?.message || 'Something went wrong. Please try again.'
  }
}
</script>

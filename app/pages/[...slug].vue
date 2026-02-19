<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
    <AppProse>
        <ContentRenderer v-if="page" :value="page"  />
    </AppProse>
</template>

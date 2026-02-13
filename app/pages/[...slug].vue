<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

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
        <div v-else>
            <h1><span class="text-orange">404</span> Page not found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </AppProse>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
})

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="blog-post">
    <header class="blog-post__header">
      <NuxtLink to="/blog" class="blog-post__back">&larr; Back to Blog</NuxtLink>
      <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      <h1>{{ post.title }}</h1>
      <p v-if="post.description" class="blog-post__description">{{ post.description }}</p>
      <div v-if="post.tags?.length" class="blog-post__tags">
        <span v-for="tag in post.tags" :key="tag" class="blog-post__tag">{{ tag }}</span>
      </div>
    </header>
    <img
      v-if="post.image?.src"
      :src="post.image.src"
      :alt="post.image.alt"
      class="blog-post__hero"
    />
    <AppProse>
      <ContentRenderer :value="post" />
    </AppProse>
  </article>
  <AppProse v-else>
    <h1><span class="text-orange">404</span> Post not found</h1>
    <p>Sorry, the post you are looking for does not exist.</p>
  </AppProse>
</template>

<style scoped>
.blog-post {
  @apply max-w-screen-lg mx-auto px-4 py-8;
}

.blog-post__back {
  @apply text-sm font-semibold uppercase tracking-wider no-underline;
  color: var(--color-green);
}

.blog-post__header {
  @apply mb-8;

  time {
    @apply block text-sm uppercase tracking-wider mt-4;
    color: var(--color-green);
  }

  h1 {
    @apply mt-2;
  }
}

.blog-post__description {
  @apply text-lg opacity-70;
}

.blog-post__tags {
  @apply flex flex-wrap gap-2 mt-4;
}

.blog-post__tag {
  @apply text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded;
  background-color: var(--color-tan);
  color: var(--color-blue);
}

.blog-post__hero {
  @apply w-full rounded-lg mb-8;
}
</style>

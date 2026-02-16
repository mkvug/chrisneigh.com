<script setup>
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all()
)

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Blog',
  description: 'Latest posts from Chris Neigh',
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
  <section class="blog-listing">
    <h1>Blog</h1>
    <div v-if="posts?.length" class="blog-grid">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="blog-card"
      >
        <img
          v-if="post.image?.src"
          :src="post.image.src"
          :alt="post.image.alt"
          class="blog-card__image"
        />
        <div class="blog-card__content">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <h2>{{ post.title }}</h2>
          <p v-if="post.description">{{ post.description }}</p>
          <div v-if="post.tags?.length" class="blog-card__tags">
            <span v-for="tag in post.tags" :key="tag" class="blog-card__tag">{{ tag }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <p v-else>No posts yet. Check back soon!</p>
  </section>
</template>

<style scoped>
.blog-listing {
  @apply max-w-screen-lg mx-auto px-4 py-8;
}

.blog-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-8;
}

.blog-card {
  @apply block rounded-lg overflow-hidden transition-shadow duration-300 no-underline;
  background-color: var(--color-tan);
  color: var(--color-black);

  &:hover {
    box-shadow: 0 4px 20px rgba(0 0 0 / 0.1);
  }
}

.blog-card__image {
  @apply w-full h-48 object-cover;
}

.blog-card__content {
  @apply p-6;

  time {
    @apply text-sm uppercase tracking-wider;
    color: var(--color-green);
  }

  h2 {
    @apply text-xl mt-2 mb-2;
  }

  p {
    @apply text-sm opacity-70 mb-4;
  }
}

.blog-card__tags {
  @apply flex flex-wrap gap-2;
}

.blog-card__tag {
  @apply text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded;
  background-color: var(--color-white);
  color: var(--color-blue);
}
</style>

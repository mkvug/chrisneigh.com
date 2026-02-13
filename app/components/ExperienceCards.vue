<template>
    <section class="experience-cards">
        <h2 class="experience-cards__title" v-if="title">{{ title }}</h2>
        <div v-for="(group, category) in groupedCards" :key="category" class="experience-cards__category">
            <h3 class="experience-cards__category-title">{{ category }}</h3>
            <div class="experience-cards__grid">
                <div v-for="(card, index) in group" :key="index" class="experience-card">
                    <div class="experience-card__image">
                        <img :src="card.image" :alt="card.alt">
                    </div>
                    <div class="experience-card__content">
                        <h6>{{ card.title }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  cards: {
    type: Array,
    default: () => [],
  },
});

const groupedCards = computed(() => {
  const groups = {};
  for (const card of props.cards) {
    const category = card.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(card);
  }
  return groups;
});
</script>

<style scoped>
.experience-cards {
    @apply py-8;
    background-color: var(--color-tan);
}
.experience-cards__title {
    @apply max-w-screen-lg mx-auto px-4 mb-8 text-center;
}
.experience-cards__category {
    @apply max-w-screen-lg mx-auto px-4 mb-8;
}
.experience-cards__category-title {
    @apply tracking-wider mb-4 pt-8 pb-4 text-center;
    color: var(--color-green);
    border-top: 1px solid var(--color-green);
}
.experience-cards__grid {
    /*@apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4;*/
    @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4;
    /*@apply flex flex-wrap justify-center gap-4;*/
}

.experience-card {
    @apply flex flex-col justify-start items-center text-center;
    /*flex: 0 0 175px;*/

    .experience-card__image {
        @apply w-16 h-16 flex items-center justify-center;

        img {
            @apply w-full h-full object-contain;
        }
    }
}
</style>

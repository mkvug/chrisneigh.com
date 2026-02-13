<template>
  <section class="hero">
    <template v-if="$slots.title && $slots.subtitle">
        <div class="hero-standard">
            <h1 class="hero-title">
                <slot name="title">Welcome</slot>
            </h1>
            <p class="hero-subtitle">
                <slot name="subtitle"></slot>
            </p>
            <div v-if="$slots.actions" class="hero-actions">
                <slot name="actions"></slot>
            </div>
        </div>
    </template>
    <template v-else>
        <slot />
    </template>
  </section>
</template>

<style scoped>
.hero-standard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  background-color: #1a1a2e;
  color: #fff;
}

.hero-title {
  font-size: 3rem;
  margin: 0 0 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin: 0 0 2rem;
  opacity: 0.85;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}
</style>

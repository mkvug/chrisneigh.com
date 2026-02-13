<template>
  <section class="prose">
    <slot />
  </section>
</template>

<style scoped>
.prose {
    @apply mx-auto w-full max-w-[65ch] p-4;
}
</style>

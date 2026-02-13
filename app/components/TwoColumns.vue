<template>
  <section class="two-columns">
    <template v-if="$slots.colOne">
        <div class="col">
            <slot name="colOne"></slot>
        </div>
    </template>
    <template v-if="$slots.colTwo">
        <div class="col">
            <slot name="colTwo"></slot>
        </div>
    </template>
  </section>
</template>

<style scoped>
.two-columns {
    @apply flex flex-col md:grid grid-cols-2 gap-4 max-w-screen-lg mx-auto py-12 px-4;
}

.col {
    @apply flex flex-col justify-center;
}
</style>

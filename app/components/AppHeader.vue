<template>
  <header ref="header" :class="{ scrolled }">
      <span class="logo">
          <i c></i>
          <i n></i>
          <h1>ChrisNeigh</h1>
      </span>
      <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>
</template>

<script setup>
const header = useTemplateRef('header')
const scrolled = ref(false)
let headerHeight = 0

function onScroll() {
  const main = document.querySelector('div[role="main"]')
  if (!main) return
  scrolled.value = main.getBoundingClientRect().top <= headerHeight / 2
}

onMounted(() => {
  headerHeight = header.value?.offsetHeight ?? 0
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
header {
    --scale: 1.5;
    @apply my-8 md:my-0 flex items-center p-8 justify-between sticky top-0 z-10;
    &.scrolled {
        --scale: 1;
        background: var(--color-white);
        box-shadow: 0 0 10px rgba(0 0 0 / 25%);
        @apply py-4 my-0;

        .logo {
            h1 {
                @apply hidden;
            }
        }
    }
}
nav {
    @apply flex flex-row gap-2;
    a {
        @apply p-4 uppercase text-sm font-bold text-gray-700 hover:text-gray-900 relative !cursor-pointer;

        &:after {
            content: '';
            @apply absolute left-0 bottom-0 w-0 h-2 transition-all duration-300;
            background: var(--color-green);
        }

        &:hover {
            &:after {
                @apply w-full;
            }
        }
    }
}
.logo {
    @apply grid grid-cols-2 transition-transform duration-300;
    transform: scale(var(--scale));
    transform-origin: left center;
}
i {
    @apply w-[50px] h-[50px];
    &[c] {
        border-radius: 50px 0 0 50px;
        background-color: var(--color-orange);
    }
    &[n] {
        background-color: var(--color-blue);
        border-radius: 50px 50px 0 0;
    }
}
h1 {
    @apply col-span-2 font-black text-base my-0;
    letter-spacing: -0.002em;
    line-height: 1;
    color: var(--color-black);
}
</style>

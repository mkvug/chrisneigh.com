<template>
  <header ref="header" :class="{ scrolled }">
      <NuxtLink v-if="route.path !== '/'" to="/" class="logo">
          <i c></i>
          <i n></i>
          <h1>ChrisNeigh</h1>
      </NuxtLink>
      <span v-else class="logo">
          <i c></i>
          <i n></i>
          <h1>ChrisNeigh</h1>
      </span>
      <button class="hamburger md:hidden" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
      </button>
      <nav :class="{ open: menuOpen }">
          <RouterLink to="/blog" @click="menuOpen = false">Blog</RouterLink>
      </nav>
  </header>
</template>

<script setup>
const route = useRoute()
const header = useTemplateRef('header')
const scrolled = ref(false)
const menuOpen = ref(false)
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
    @apply md:my-0 flex items-center p-8 justify-between sticky top-0 z-10;
    /*@apply my-0 md:my-8;*/
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
.hamburger {
    @apply relative w-8 h-6 bg-transparent border-none cursor-pointer p-0;

    span {
        @apply block absolute left-0 w-full h-0.5 transition-all duration-300;
        background: var(--color-black);

        &:nth-child(1) { top: 0; }
        &:nth-child(2) { top: 50%; transform: translateY(-50%); }
        &:nth-child(3) { bottom: 0; }
    }

    &.open span {
        &:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
        &:nth-child(2) { opacity: 0; }
        &:nth-child(3) { bottom: 50%; transform: translateY(50%) rotate(-45deg); }
    }
}
nav {
    @apply hidden md:flex flex-row gap-2;

    &.open {
        @apply flex flex-col absolute left-0 right-0 p-4 gap-0;
        top: 100%;
        background: var(--color-white);
        box-shadow: 0 4px 10px rgba(0 0 0 / 0.1);
    }

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
    @apply w-[50px] h-[50px] transition-colors duration-1000 ease-in-out;
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

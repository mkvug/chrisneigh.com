<script setup lang="ts">
import type { NuxtError } from '#app'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })

const errorClass = `error-${props.error?.statusCode}-page`


onMounted(() => {
  const orientation = window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'

  let path = []

  if (orientation === 'landscape') {
    path = [
      { x: '30vw', y: '10vh' },
      { x: '70vw', y: '10vh' },
      { x: '110vw', y: '50vh' },
    ]
  } else {
    path = [
      { x: '30vw', y: '25vh' },
      { x: '70vw', y: '25vh' },
      { x: '110vw', y: '50vh' },
    ]
  }

  document.body.classList.add(errorClass)

  gsap.fromTo('#astronaut', {
    x: '-7.5vw',
    y: '50vh',
    rotation: 0,
  }, {
    duration: 120,
    // duration: 50,
    ease: 'none',
    motionPath: {
      path: path,
      curviness: 1.5,
    },
    rotation: -120,
  })
})

onUnmounted(() => {
  document.body.classList.remove(errorClass)
})
</script>

<template>
    <NuxtLayout>
        <div id="astronaut">
            <img src="/images/astronaut.png" alt="astronaut" />
        </div>
        <AppProse>
            <h1><span class="text-orange status-code" :data-code="error.statusCode">{{ error.statusCode }}</span><span class="status-message">{{ error.statusMessage }}</span></h1>
            <button class="text-white" @click="handleError"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="home-icon"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg> Go back to home page</button>
        </AppProse>
    </NuxtLayout>
</template>

<style scoped>
#astronaut {
    @apply w-24;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
}
h1 {
    @apply text-center;
    span {
        @apply block;
        &.status-code {
            @apply font-black;
            font-size: 2em;
            z-index: 10;
            position: relative;
            &:after {
                content: attr(data-code);
                position: absolute;
                top: 26px;
                left: 0;
                width: 100%;
                height: 100%;
                filter: blur(14px);
                z-index: -1;
                zoom: 1.25;
                color: black;
            }
        }
        &.status-message {
            color: var(--color-blue);
        }
    }
}
button {
    @apply flex items-center gap-2 mx-auto px-8 py-4 mt-8 transition-all duration-300 ease-in-out;
    /*background: var(--color-black);*/
    box-shadow: 0 0 4rem var(--color-black) inset;
    mix-blend-mode: plus-lighter;
    corner-shape: bevel square;
    border-radius: 1.5rem;

    &:hover {
        /*background: var(--color-blue);*/
        box-shadow: 0 0 4rem var(--color-blue) inset;
    }
}
</style>

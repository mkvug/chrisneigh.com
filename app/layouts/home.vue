<template>
    <AppHero>
        <div class="hero-profile">
            <div class="hero-profile-content">
                <h1>Hello, World!<br>I'm <span>Chris</span>.</h1>
                <h2>Developer, Engineer, &amp; Maker</h2>
            </div>
            <img src="/assets/images/chris.png" alt="Chris Neigh" />
        </div>
        <!-- <template #title>Hello World</template>
        <template #subtitle>This is the hero subtitle.</template>
        <template #actions>
            <a href="/about">Learn More</a>
        </template> -->
    </AppHero>
    <AppHeader />
    <div role="main">
        <slot />
    </div>
    <AppFooter />
</template>


<style scoped>
    .hero-profile {
        @apply grid grid-cols-1 md:grid-cols-12 gap-4 max-w-full items-center px-4 py-4 md:py-8 overflow-hidden text-center md:text-left h-auto;
        background: rgba(0 0 0 / 10%);
        @media all and (width >= 768px) {
            height: clamp(450px, calc(100vh - 300px), 600px);
        }
        @media all and (width >= 1024px) {
            height: clamp(650px, calc(100vh - 300px), 800px);
        }

        .hero-profile-content {
            @apply md:col-start-2 md:col-span-5;
            @apply xl:col-start-3 xl:col-span-5;
            @apply 2xl:col-start-4 2xl:col-span-4;
        }

        h1 {
            @apply text-4xl md:text-6xl;

            visibility: hidden;
            span {
                color: var(--color-green);
            }
        }

        h2 {
            @apply text-2xl md:text-3xl;
            visibility: hidden;
        }

        img {
            @apply md:col-start-7 md:col-span-4;
            @apply xl:col-start-8 xl:col-span-3;
            @apply 2xl:col-start-8 2xl:col-span-3;
            @apply max-w-[300px] md:max-w-full mx-auto;
            transform: scale(1.25) translate(0, 50px);
            visibility: hidden;
        }
    }
    [role="main"] :deep(.prose),
    [role="main"] :deep(.two-columns) {
        @apply my-4 md:my-12 lg:my-16;
    }

    [role="main"] :deep(.prose) h2 span {
        color: var(--color-green);
        @apply inline-block;
        visibility: hidden;
    }

    [role="main"] :deep(.two-columns) ul {
        @apply list-none;

        li {
            visibility: hidden;
        }
    }
</style>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

onMounted(() => {
  const h1 = document.querySelector('.hero-profile h1');
  const h2 = document.querySelector('.hero-profile h2');
  const img = document.querySelector('.hero-profile img');

  const split = SplitText.create(h1.querySelector('span'), { type: 'chars' });
  const split2 = SplitText.create(h2, { type: 'words' });

  const tl = gsap.timeline();

  tl.from([h1, h2], { duration: 1, autoAlpha: 0 });
  tl.from(split.chars, { duration: 0.05, autoAlpha: 0, stagger: 0.12, ease: 'steps(1)' }, '-=0.8');
  // Animate "Developer," then "Engineer," then "& Maker" together
  const words = split2.words;
  tl.from(words[0], { duration: 0.25, autoAlpha: 0, y: -50, ease: 'steps(1)' }, '-=0.1');
  tl.from(words[1], { duration: 0.25, autoAlpha: 0, y: -50, ease: 'steps(1)' }, '+=0.5');
  tl.from([words[2], words[3]], { duration: 0.25, autoAlpha: 0, y: -50, ease: 'steps(1)' }, '+=0.5');
  tl.from(img, { duration: 1.5, y: 75, autoAlpha: 0 }, '-=0.5');

  // Animate .two-columns ul li elements when they scroll into view
  gsap.utils.toArray('[role="main"] .two-columns ul li').forEach((li, i) => {
    gsap.from(li, {
      autoAlpha: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: li,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      delay: i * 0.15,
    });
  });

  // Animate .prose h2 span elements when they scroll into view
  gsap.utils.toArray('[role="main"] .prose h2 span').forEach((span) => {
    gsap.from(span, {
      autoAlpha: 0,
      scale: 2,
      x: 20,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: span,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
});
</script>

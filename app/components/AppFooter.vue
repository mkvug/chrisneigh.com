<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">
            <i c></i>
            <i n></i>
          </span>
          <p>Developer, Engineer, &amp; Maker</p>
        </div>
        <nav class="footer-links">
          <a href="https://github.com/mkvug" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/cneigh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ year }} Chris Neigh</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  background-color: var(--color-black);
  color: var(--color-tan);
}

.footer-inner {
  @apply max-w-screen-lg mx-auto px-4 py-8;
}

.footer-top {
  @apply flex flex-col md:flex-row justify-between items-center gap-6 pb-6;
  border-bottom: 1px solid rgba(255 255 255 / 0.1);
}

.footer-brand {
  @apply flex items-center gap-4;

  p {
    @apply text-sm mb-0 opacity-70;
  }
}

.logo {
  @apply grid grid-cols-2;
}

i {
  @apply w-[25px] h-[25px];
  &[c] {
    border-radius: 25px 0 0 25px;
    background-color: var(--color-orange);
  }
  &[n] {
    background-color: var(--color-blue);
    border-radius: 25px 25px 0 0;
  }
}

.footer-links {
  @apply flex gap-6;

  a {
    @apply text-sm uppercase font-semibold tracking-wider relative;
    color: var(--color-tan);
    text-decoration: none;

    &:after {
      content: '';
      @apply absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300;
      background: var(--color-green);
    }

    &:hover:after {
      @apply w-full;
    }
  }
}

.footer-bottom {
  @apply pt-6 text-center;

  p {
    @apply text-xs mb-0 opacity-50;
  }
}
</style>

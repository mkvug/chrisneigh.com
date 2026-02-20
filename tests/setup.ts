import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

(globalThis as any).ref = ref;
(globalThis as any).computed = computed;
(globalThis as any).onMounted = onMounted;
(globalThis as any).onUnmounted = onUnmounted;
(globalThis as any).nextTick = nextTick;
(globalThis as any).definePageMeta = () => {};
(globalThis as any).useSeoMeta = () => {};

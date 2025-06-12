<template>
  <div class="loading-overlay" :class="{ fadeOut: isDone }">
    <div class="loading-wrapper">
      <transition name="fade-grow" mode="out-in">
        <img :src="currentImage" :key="currentStage" class="loading-image" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { sproutImage, stemImage, flowerImage } from '@/utils/assetsToPreload'

const props = defineProps<{
  loadAssets: () => Promise<void>
}>()

const emit = defineEmits(['finished'])

const currentImage = ref(sproutImage)
const currentStage = ref(0)
const isDone = ref(false)

onMounted(async () => {
  await props.loadAssets()

  currentImage.value = sproutImage
  currentStage.value = 0

  setTimeout(() => {
    currentImage.value = stemImage
    currentStage.value = 1

    setTimeout(() => {
      currentImage.value = flowerImage
      currentStage.value = 2

      // Esperamos un poco más para que se vea la flor
      setTimeout(() => {
        isDone.value = true
        setTimeout(() => emit('finished'), 200) // espera fade final
      }, 1000) // tiempo de permanencia de la flor visible
    }, 900) // stem → flower
  }, 500) // sprout → stem
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.7s ease;
}

.loading-overlay.fadeOut {
  opacity: 0;
  pointer-events: none;
}

.loading-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-image {
  width: 64px;
  height: 64px;
  object-fit: contain;
  image-rendering: pixelated;
}
</style>

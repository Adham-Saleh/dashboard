<template>
  <div>
    <div class="image-wrapper">
      <div class="shimmer" v-if="!isLoaded"></div>
      <NuxtImg
        class="img-container"
        :width="size"
        :src="image"
        loading="lazy"
        @load="loadingHandler"
        placeholder="a"
        placeholder-class="wait"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["size", "image"]);

const isLoaded = ref<boolean>(false);

const loadingHandler = function () {
  console.log("image loaded");
  isLoaded.value = true;
};
</script>

<style scoped>
@keyframes lazy-loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.img-container {
  aspect-ratio: 1 / 1;
  border-radius: 100%;
}

.wait {
  background: rgb(184, 184, 184);
}

.shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.414) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1s infinite;
  border-radius: 100%; 
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>

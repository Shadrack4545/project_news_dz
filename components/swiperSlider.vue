<template>
  <div class="slider-wrapper">
    <div class="slider__text" :key="`text-${activeIndex}`">
      <h2>{{ slides[activeIndex].title }}</h2>
      <p>{{ slides[activeIndex].description }}</p>
    </div>

    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 4000 }"
      :pagination="{ clickable: true }"
      navigation
      @slideChange="onSlideChange"
      class="slider"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="`Slide ${index + 1}`" />
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const slides = ref([
  {
    image: '/img/slide1.png',
    title: 'Explore Architectural Styles',
    description: 'Discover beautiful home designs around the world',
  },
  {
    image: '/img/slide2.png',
    title: 'Modern Minimalism',
    description: 'Sleek and simple designs for the urban lifestyle',
  },
  {
    image: '/img/slide3.png',
    title: 'Rustic Charm',
    description: 'Warm and cozy designs inspired by nature',
  },
])

const activeIndex = ref(0)

function onSlideChange(swiper: any) {
  activeIndex.value = swiper.realIndex
}
</script>

<style scoped lang="scss">
.slider-wrapper {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;

  .slider {
    width: 100%;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.slider__text {
  position: absolute;
  max-width: 50%;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 5;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;

  h2 {
    font-family: 'Segoe UI', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 120%;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 135%;
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
}
</style>
``
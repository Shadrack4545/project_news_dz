<template>
  <h4><span>Главная</span> / Контакты</h4>

  <div class="contacts">
    <div class="contacts__inner">
      <div class="contacts__text">
        <h2>Контакты</h2>
        <UIContactsList />
      </div>
      <div class="contacts__position">
        <Map />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIContactsList from '@/components/UIContactsList.vue';
import Map from '@/components/Map.vue';
</script>

<style lang="scss" scoped>
span {
  color: $color-primary;
}

h4 {
  margin: 40px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 135%;
  color: #222; 
}

a {
  text-decoration: none;
  color: #222; 
}

.contacts {
  display: flex;
  justify-content: center;
  height: 100%;

  .contacts__inner {
    display: flex;

    @media screen and (max-width: $breakpoint-lg) {
      flex-direction: column;

      iframe {
        height: 600px;
        width: 100%;
      }
    }

    .contacts__text {
      padding: 0 60px;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 46px;
        line-height: 120%;
        margin: 0;
        color: #111; 
      }
    }
  }
}
</style>

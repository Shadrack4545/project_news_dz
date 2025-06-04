<template>
  <div class="burger" @click="toggleDrawer" :class="{ open: drawerOpen }">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div v-show="drawerOpen" class="overlay" @click="toggleDrawer"></div>

  <div class="drawer" :class="{ open: drawerOpen }">
    <nav>
      <NuxtLink to="/" class="drawer__link">Completed Projects</NuxtLink>
      <NuxtLink to="/news" class="drawer__link">News</NuxtLink>
      <NuxtLink to="/contacts" class="drawer__link">Contacts</NuxtLink>
    </nav>

    <div class="drawer__contacts">
      <a :href="`tel:${contacts.phone}`" class="drawer__contact-link">{{ contacts.phone }}</a>
      <a :href="`mailto:${contacts.email}`" class="drawer__contact-link">{{ contacts.email }}</a>
      <a class="drawer__contact-link">{{ contacts.address }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { contacts } from '~/data/contacts';

const drawerOpen = ref(false);

const toggleDrawer = (): void => {
  drawerOpen.value = !drawerOpen.value;
};

const handleResize = (): void => {
  if (window.innerWidth > 992) {
    drawerOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

watch(drawerOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
</script>

<style lang="scss" scoped>
@use '@/assets/variables' as *;

.burger {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background: $color-primary;
  border-radius: 30%;
  z-index: 100;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  span {
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 3px 0;
    transition: all 0.3s ease-in-out;
  }

  &.open {
    background-color: $color-primary-dark;

    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;
  max-width: 400px;
  background: $color-primary;
  z-index: 99;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  padding: 60px 20px 20px;
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  }

  .drawer__link {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    margin: 15px 0;
    font-family: $font-secondary;
    font-weight: 400;
    line-height: 120%;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .drawer__contact-link {
    display: flex;
    align-items: center;
    color: #fff;
    font-family: $font-primary;
    font-size: 14px;
    margin: 12px 0;
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }

    &::before {
      content: '';
      background-color: #fff;
      mask-repeat: no-repeat;
      mask-position: center;
      mask-size: 16px;
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }

    &:nth-child(1)::before {
      mask-image: url('/img/icons/telephone.svg');
    }

    &:nth-child(2)::before {
      mask-image: url('/img/icons/email.svg');
    }

    &:nth-child(3)::before {
      mask-image: url('/img/icons/location.svg');
    }
  }
}

.drawer.open {
  transform: translateX(0%);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 90;
  display: block;
  transition: background-color 0.3s ease-in-out;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user';

// import type { RouteParams } from 'vue-router';

const userStore = useUserStore();

const username = ref('haemil');
const isAuthorized = computed(() => userStore.isAuthorized);

const displayStatus = computed(() =>
  isAuthorized.value ? 'authorized' : 'anonym',
);

const allNavLinks = computed(() => [
  {
    // name: 'global-feed',
    name: 'home',
    title: 'Home',
    display: 'all',
  },
  {
    name: 'login',
    title: 'Sign in',
    display: 'anonym',
  },
  {
    name: 'register',
    title: 'Sign up',
    display: 'anonym',
  },
  // {
  //   name: 'create-article',
  //   title: 'New Post',
  //   display: 'authorized',
  //   icon: 'ion-compose',
  // },
  // {
  //   name: 'settings',
  //   title: 'Settings',
  //   display: 'authorized',
  //   icon: 'ion-gear-a',
  // },
  {
    name: 'profile',
    // params: { username: username.value },
    title: username.value || '',
    // display: 'authorized',
    display: 'all',
  },
  {
    name: 'about',
    title: 'Logout',
    display: 'authorized',
  },
]);

const navLinks = computed(() =>
  allNavLinks.value.filter(
    l => l.display === displayStatus.value || l.display === 'all',
  ),
);

// computed로 등록을 해야 하는구만...
// const isAuthorized = computed(() => {
//   return userStore.isAuthorized;
// });
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">conduit</RouterLink>

      <!--  -->
      <ul class="nav navbar-nav pull-xs-right">
        <li v-for="link in navLinks" :key="link.name" class="nav-item">
          <!-- <RouterLink :to="{ name: link.name, params: link.params }"> -->
          <RouterLink :to="{ name: link.name }">
            <!-- <i v-if="link.icon" :class="link.icon" /> -->
            {{ link.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>

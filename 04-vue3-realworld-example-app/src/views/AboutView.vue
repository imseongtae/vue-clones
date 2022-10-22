<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

const message = computed(() => {
  return userStore.isAuthorized ? '로그인 상태입니다.' : '로그아웃 상태입니다.';
});

const logoutUser = () => {
  userStore.logout();
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>현재 사용자는 {{ message }}</h3>

    <RouterLink to="/">메인 페이지로 돌아가기</RouterLink>
    <div>
      <button @click="logoutUser">로그아웃</button>
    </div>
  </div>
</template>

<style scoped>
/*  */
</style>

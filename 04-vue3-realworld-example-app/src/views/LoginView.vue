<script setup lang="ts">
// import { reactive } from 'vue';
// import { useUserStore } fro@/stores/useruth';
// import router from '@/router';

// const userStore = useUserStore();

// const form = reactive({
//   email: 'ham@test.com',
//   password: '1234',
// });

// const login = () => {
//   userStore.login(form);
//   console.log('로그인 실행 됨');
//   router.push('/');
// };
</script>

<template>
  <div>
    <h2>로그인 페이지 입니다.</h2>
    <RouterLink to="/">이전 페이지로</RouterLink>

    <hr />

    <div>
      <!-- <button type="button" @click="login">Login</button> -->
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
}
</style>

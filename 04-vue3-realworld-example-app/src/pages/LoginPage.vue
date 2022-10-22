<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
// import router from '@/router';

const userStore = useUserStore();

/**
 * email: ham@test.com
 * password: 1234
 */
const formRef = ref<HTMLFormElement | null>(null);
const form = ref({
  email: '',
  password: '',
});

const handleLogin = () => {
  // 이해 안 되는 지점 2 - 폼 입력 값을 검증하고 유효하지 않으면 invalid 이벤트를 발행. false를 반환
  // 일일이 폼 데이터 유효한지 체크하는 것보다 효율적일듯?
  if (!formRef.value?.checkValidity()) return;

  userStore.login(form.value);
  console.log('로그인 실행 됨');
  // router.push('/');
};
</script>

<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>

          <ul class="error-messages">
            <!-- <li>That email is already taken</li> -->
          </ul>

          <form ref="formRef" @submit.prevent="handleLogin">
            <fieldset class="form-group">
              <input
                v-model="form.email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="form.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                required
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              :disabled="!form.email || !form.password"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

import { defineStore } from 'pinia';
import type { LoginForm, Token } from '@/interfaces/user.interface';
import Storage from '@/utils/storage'; // src/utils/storage
import { computed, ref } from 'vue';
import { user } from '@/services';
import router from '@/router';

export const tokenStorage = new Storage<Token>('token');

export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string | null>(tokenStorage.get());
  // 사용하는 쪽에서 computed 를 붙여서 사용해야 반응형 데이터가 됨
  const isAuthorized = computed<boolean>(() => {
    return !!accessToken.value;
  });

  const login = async (form: LoginForm) => {
    try {
      // 1. api
      const result = await user.loginUser(form);
      const data = result.data;
      if (data.user) {
        // 2. state & localStorage setting
        const token: string = data.user.token;
        tokenStorage.set(token);
        accessToken.value = token;

        // 라우팅을 이 부분에서 다루어야 할듯 - 서비스 마다 다름
        router.push({ name: 'home' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = async () => {
    try {
      //  api 연결
      const result = await user.getCurrentUser();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    accessToken.value = null;
    tokenStorage.remove();
    // 특정 경로로 보내는 로직은 이 부분에서 구현하는게 중복을 줄이는 방법이겠다.
    // 어드민의 경우에는 여기서 초기 페이지로 라우팅
    // 일반 서비스도 그 자리에서 라우팅? - 다만 권한이 필요한 페이지라면 초기로..!
  };

  return {
    accessToken,
    isAuthorized,
    login,
    currentUser,
    logout,
  };
});

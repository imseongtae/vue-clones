import { instance, authInstance } from './common/instances';
import type { LoginForm } from '@/interfaces/user.interface';

// 추후, 개별 API에는 AxiosPromise<string[]> 과 같은 식으로 호출하면 좋다고 함. 캡틴판교님 팁
// function loginUser(userForm: UserForm) {
//   return instance.post('users/login', { user: userForm });
// }
// function getCurrentUser() {
//   return authInstance.get('/user');
// }

export class User {
  /**
   * @description Login for existing user
   * @summary Existing user login
   * @request POST:/users/login
   */
  loginUser(form: LoginForm) {
    return instance.post('users/login', { user: form });
  }

  /**
   * @description Gets the currently logged-in user info
   * @summary Get current user info
   * @request GET:/user
   */
  getCurrentUser() {
    return authInstance.get('/user');
  }
}

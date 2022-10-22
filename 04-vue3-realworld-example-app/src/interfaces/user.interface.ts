export type Token = string;

export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

// LoginForm 과 같은 이름도 좋을 것 같음
// SignupForm
export interface LoginForm {
  email: string;
  password: string;
}

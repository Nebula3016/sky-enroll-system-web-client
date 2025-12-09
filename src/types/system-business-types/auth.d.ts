declare global {
  namespace IAuthTypes {
    export interface LoginRequest {
      account: string;
      password: string;
      graphCaptchaCode: string;
      graphCaptchaId: string;
    }
  }
}

export {};

declare global {
  namespace IUserTypes {
    /**
     * 用户简要信息
     */
    export interface UserInfo {
      id: string;
      username: string;
      account: string;
    }
  }
}

export {};

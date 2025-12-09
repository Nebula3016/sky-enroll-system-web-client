/**
 * 系统http客户端请求模式
 */
export enum SystemHttpRequestModeEnum {
  /**
   * 正式版本
   */
  Official = 'official',
  /**
   * 演示版本
   */
  Demonstration = 'demonstration',
}

/**
 * 系统运行环境
 */
export enum SystemEnvEnum {
  /** 开发环境 */
  Development = 'development',
  /** 生产环境  */
  Production = 'production',
  /** 测试环境 */
  Testing = 'testing',
}

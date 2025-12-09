/**
 * 容器布局枚举文件
 */

/**
 * @name ContainerLayoutTypeEnum
 * @description 容器布局类型枚举
 */
export enum ContainerLayoutTypeEnum {
  /**
   * @description 侧边栏+头部/主内容/底部
   * (A(H+M+F))
   */
  A_HMF = 'aside-header-main-footer',

  /**
   * @description 侧边栏+头部/主内容
   * (A(H+M))
   */
  A_HM = 'aside-header-main',

  /**
   * @description 头部+侧边栏/主内容/底部
   * (H(A+M+F))
   */
  H_AMF = 'header-aside-main-footer',

  /**
   * @description 头部+侧边栏/主内容
   * (H(A+M))
   */
  H_AM = 'header-aside-main',

  /**
   * @description 头部+主内容+底部
   * (H+M+F)
   */
  HMF = 'header-main-footer',

  /**
   * @description 头部+主内容
   * (H+M)
   */
  HM = 'header-main',

  /**
   * @description 用户完全自定义
   */
  CUSTOM = 'custom',
}

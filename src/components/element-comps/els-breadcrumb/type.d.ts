/**
 * @name ElsBreadcrumbProps
 * @description 面包屑导航组件属性类型定义
 */
export interface ElsBreadcrumbProps {
  /**
   * @description 面包屑导航组件类名
   */
  classNames?: string;

  /**
   * @description 面包屑导航路由历史列表
   */
  routeHistorList?: {
    /**
     * @description 路由跳转目标，同 vue-router 的 to 属性
     */
    to: string;

    /**
     * @description 路由跳转名称
     */
    name: string;
  }[];
}

/**
 * @name ElBreadcrumbProp
 * @description el-breadcrumb组件属性类型定义
 */
export interface ElBreadcrumbProps {
  /**
   * @description 分隔符
   */
  separator?: string;

  /**
   * @description 分隔符图标
   */
  separatorIcon?: string;
}

/**
 * @name ElBreadcrumbItemProps
 * @description 面包屑项目类型定义
 */
export interface ElBreadcrumbItemProps {
  /**
   * @description 如果设置该属性为 true, 导航将不会留下历史记录
   */
  replace?: boolean;

  /**
   * @description 路由跳转目标，同 vue-router 的 to 属性
   */
  to?: string | object;
}

/**
 * @name ElContainerProps
 * @description el-container组件属性类型定义
 */
export interface ElContainerProps {
  /**
   * @description 容器排列方向，子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

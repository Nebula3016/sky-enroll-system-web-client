import type { MotionVariants } from '@vueuse/motion';
import type { VueuseMotionMode } from './index.enum';

/**
 * vueuse-motion 组件 props 类型定义
 */
export type VueuseMotionPropsTypes = {
  vueuseMotionBodyProps?: VueuseMotionBodyProps;
  vueuseMotionProps?: MotionVariants;
};

/**
 * vueuse-motion 组件 body props 类型定义
 */
export interface VueuseMotionBodyProps {
  /** 动画模式 */
  mode: VueuseMotionMode;
}

export { MotionVariants };

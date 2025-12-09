import { TypingMode } from './index.enum';

/**
 * typing-animation 组件 props 类型定义
 */
export type TypingAnimationPropsTypes = {
  TypingAnimationBodyProps?: TypingAnimationBodyProps;
  TypingExcessAnimationProps?: Partial<TypingExcessAnimationProps>;
};

/**
 * typing-animation 组件 body props 类型定义
 */
export interface TypingAnimationBodyProps {
  /** 动画模式 */
  mode: TypingMode;
}

/**
 * typing-animation 组件 options props 类型定义
 */
export interface TypingOptionsProps {
  breakLines?: boolean;
  cursorChar?: string;
  cursor?: Record<string, any> | boolean;
  cursorSpeed?: number;
  deleteSpeed?: null | number;
  html?: boolean;
  lifeLike?: boolean;
  loop?: boolean;
  loopDelay?: number | number[];
  nextStringDelay?: number | number[];
  speed?: number;
  startDelay?: number;
  startDelete?: boolean;
  strings?: string[] | string;
  waitUntilVisible?: boolean;
  beforeString?: (string: string) => void;
  afterString?: (string: string) => void;
  beforeStep?: (char: string) => void;
  afterStep?: (char: string) => void;
  afterComplete?: () => void;
}

export interface TypingExcessAnimationProps extends Pick<TypingOptionsProps, 'speed' | 'strings'> {
  /** 元素选择器或元素实例 */
  element: string | HTMLElement;
}

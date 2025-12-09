import { VueTools } from '@/utils';

const { ref } = VueTools;

export default function useVerticalMenuHook() {
  // 菜单是否折叠
  const isCollapse = ref(false);

  // 切换菜单折叠状态
  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
  };

  return {
    isCollapse,
    toggleCollapse,
  };
}
